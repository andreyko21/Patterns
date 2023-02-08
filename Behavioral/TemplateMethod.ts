abstract class DataMiner {

    public mine(): void {
        this.openFile();
        this.extractDate();
        this.parseData();
        this.analizeData();
        this.sendReport();
        this.closeFile();
        this.hook1();
    }

    protected openFile(): void {
        console.log('File open');
    }
    protected analizeData(): void {
        console.log('Data analysis');
    }
    protected sendReport(): void {
        console.log('Send report');
    }
    protected closeFile(): void {
        console.log('File close');
    }

    protected abstract extractDate(): void;
    protected abstract parseData(): void;

    protected hook1(): void { }
}

class PDF extends DataMiner {
    protected extractDate(): void {
        console.log('extract PDF files');
    }

    protected parseData(): void {
        console.log('parse PDF files');
    }
}

class DOC extends DataMiner {
    protected extractDate(): void {
        console.log('extract DOC files');
    }

    protected parseData(): void {
        console.log('parse DOC files');
    }
}

function clientCode(abstractClass: DataMiner) {
    abstractClass.mine();
}

console.log('PDF file read');
clientCode(new PDF());
console.log('');

console.log('DOC file read');
clientCode(new DOC());
