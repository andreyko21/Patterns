var VideoCard = /** @class */ (function () {
    function VideoCard() {
    }
    VideoCard.prototype.accept = function (visitor) {
        visitor.visitVideoCard(this);
    };
    return VideoCard;
}());
var Procesor = /** @class */ (function () {
    function Procesor() {
    }
    Procesor.prototype.accept = function (visitor) {
        visitor.visitProcesor(this);
    };
    return Procesor;
}());
var Diagnostic = /** @class */ (function () {
    function Diagnostic() {
    }
    Diagnostic.prototype.visitVideoCard = function (element) {
        console.log("Inspect videoCard");
    };
    Diagnostic.prototype.visitProcesor = function (element) {
        console.log("Inspect procesor");
    };
    return Diagnostic;
}());
var Repair = /** @class */ (function () {
    function Repair() {
    }
    Repair.prototype.visitVideoCard = function (element) {
        console.log("Repair videoCard");
    };
    Repair.prototype.visitProcesor = function (element) {
        console.log("Repair procesor");
    };
    return Repair;
}());
function clientCode(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
var components = [new VideoCard(), new Procesor(),];
var diagnostic = new Diagnostic();
clientCode(components, diagnostic);
var repair = new Repair();
clientCode(components, repair);
console.log('');
