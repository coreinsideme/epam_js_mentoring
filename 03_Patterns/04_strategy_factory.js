class ShipTransport {
    send(parcel) {
        // some code here that sending parcel by ship
    }
}

class TruckTransport {
    send(parcel) {
        // some code here that sending parcel by truck
    }
}

class TransportFactory {
    getTransport(parcelType) {
        switch (parcelType) {
            case 'truck': {
                return new TruckTransport();
                break;
            }
            case 'ship': {
                return new ShipTransport();
                break;
            }
            default: {
                throw new Error('no such transport');
            }
        }
    }
}

class TransportCompany {
    constructor(factory) {
        this.transportFactory = factory;
    }

    sendParcel(parcel) {
        let transport = this.transportFactory.getTransport(parcel.type);
        transport.send(parcel);
    }
}


// Main
let factory = new TransportFactory();
let company = new TransportCompany(factory);

let parcel1 = { type: 'truck' };
company.sendParcel(parcel1);

let parcel2 = { type: 'ship' };
company.sendParcel(parcel2);

