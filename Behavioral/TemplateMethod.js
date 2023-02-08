var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataMiner = /** @class */ (function () {
    function DataMiner() {
    }
    DataMiner.prototype.mine = function () {
        this.openFile();
        this.extractDate();
        this.parseData();
        this.analizeData();
        this.sendReport();
        this.closeFile();
        this.hook1();
    };
    DataMiner.prototype.openFile = function () {
        console.log('File open');
    };
    DataMiner.prototype.analizeData = function () {
        console.log('Data analysis');
    };
    DataMiner.prototype.sendReport = function () {
        console.log('Send report');
    };
    DataMiner.prototype.closeFile = function () {
        console.log('File close');
    };
    DataMiner.prototype.hook1 = function () { };
    return DataMiner;
}());
var PDF = /** @class */ (function (_super) {
    __extends(PDF, _super);
    function PDF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDF.prototype.extractDate = function () {
        console.log('extract PDF files');
    };
    PDF.prototype.parseData = function () {
        console.log('parse PDF files');
    };
    return PDF;
}(DataMiner));
var DOC = /** @class */ (function (_super) {
    __extends(DOC, _super);
    function DOC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOC.prototype.extractDate = function () {
        console.log('extract DOC files');
    };
    DOC.prototype.parseData = function () {
        console.log('parse DOC files');
    };
    return DOC;
}(DataMiner));
function clientCode(abstractClass) {
    abstractClass.mine();
}
console.log('PDF file read');
clientCode(new PDF());
console.log('');
console.log('DOC file read');
clientCode(new DOC());
