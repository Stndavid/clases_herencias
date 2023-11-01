class Vehiculo {
    constructor(public marca: string, public modelo: string) {}

    mostrarInformacion() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

class VehiculoTerrestre extends Vehiculo {
    constructor(marca: string, modelo: string, public tipo: string) {
        super(marca, modelo);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tipo: ${this.tipo}`);
    }
}

class VehiculoMaritimo extends Vehiculo {
    constructor(marca: string, modelo: string, public eslora: string) {
        super(marca, modelo);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Eslora: ${this.eslora}`);
    }
}

class VehiculoAereo extends Vehiculo {
    constructor(marca: string, modelo: string, public envergadura: string) {
        super(marca, modelo);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Envergadura: ${this.envergadura}`);
    }
}

const camion = new VehiculoTerrestre("Mercedez", "FA150", "Camión");
const camioeta = new VehiculoTerrestre("Ford", "F-150", "camioneta")
const automovil = new VehiculoTerrestre("Chevrolet", "Fortuner", "automovil")
camion.mostrarInformacion();
camioeta.mostrarInformacion();
automovil.mostrarInformacion();


const yate = new VehiculoMaritimo("Azimut", "42S", "14 metros");
const barco = new VehiculoMaritimo("Fairline", "849", "50 metros");

yate.mostrarInformacion();
barco.mostrarInformacion();

const avion = new VehiculoAereo("Boeing", "747", "68 metros");
const avioneta = new VehiculoAereo("Bombardie", "7400", "25 metros");

avion.mostrarInformacion();
avioneta.mostrarInformacion();


