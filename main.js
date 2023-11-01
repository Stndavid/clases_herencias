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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.mostrarInformacion = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(marca, modelo, tipo) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Tipo: ".concat(this.tipo));
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo(marca, modelo, eslora) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.eslora = eslora;
        return _this;
    }
    VehiculoMaritimo.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Eslora: ".concat(this.eslora));
    };
    return VehiculoMaritimo;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo(marca, modelo, envergadura) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.envergadura = envergadura;
        return _this;
    }
    VehiculoAereo.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Envergadura: ".concat(this.envergadura));
    };
    return VehiculoAereo;
}(Vehiculo));
// Ejemplo de uso
var camion = new VehiculoTerrestre("Mercedez", "FA150", "Camión");
var camioeta = new VehiculoTerrestre("Ford", "F-150", "camioneta");
var automovil = new VehiculoTerrestre("Chevrolet", "Fortuner", "automovil");
camion.mostrarInformacion();
var yate = new VehiculoMaritimo("Azimut", "42S", "14 metros");
var barco = new VehiculoMaritimo("Fairline", "849", "50 metros");
yate.mostrarInformacion();
var avion = new VehiculoAereo("Boeing", "747", "68 metros");
var avioneta = new VehiculoAereo("Bombardie", "7400", "25 metros");
avion.mostrarInformacion();
