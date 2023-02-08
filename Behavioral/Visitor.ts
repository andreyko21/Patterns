interface PC {
    accept(visitor: Visitor): void;
}

interface Visitor {
    visitVideoCard(element: VideoCard): void;

    visitProcesor(element: Procesor): void;
}

class VideoCard implements PC {
    accept(visitor: Visitor): void {
        visitor.visitVideoCard(this);
    }
}
class Procesor implements PC {
    accept(visitor: Visitor): void {
        visitor.visitProcesor(this);
    }
}

class Diagnostic implements Visitor {
    visitVideoCard(element: VideoCard): void {
        console.log(`Inspect videoCard`)
    }
    visitProcesor(element: Procesor): void {
        console.log(`Inspect procesor`)
    }
} 

class Repair implements Visitor {
    visitVideoCard(element: VideoCard): void {
        console.log(`Repair videoCard`)
    }
    visitProcesor(element: Procesor): void {
        console.log(`Repair procesor`)
    }
}

function clientCode(components: PC[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}
const components = [new VideoCard(),new Procesor(),];

const diagnostic = new Diagnostic();
clientCode(components, diagnostic);

const repair = new Repair();
clientCode(components, repair);
console.log('');
