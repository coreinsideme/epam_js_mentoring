class EuroDevice {
    euroPlug = euroPlug; // device has a plug

    constructor(electricitySocket) {
        this.electricitySocket = electricitySocket;
    }

    setAdapter(adapterSocket) {
        this.electricitySocket = adapterSocket;
    }

    makeItWork() {
        let euroVoltage = this.electricitySocket.getEuroVoltage(this.euroPlug);
        // consume it somehow
    }
}


class EuroElectricityAdapter {
    constructor(nonEuroElectricitySocket) {
        this.nonEuroElectricitySocket = nonEuroElectricitySocket;
    }

    getEuroVoltage(euroPlug) {
        let euroSocket = this.transformSocket(this.nonEuroElectricitySocket);
        let euroVoltage = this.transformVoltage(euroSocket.plugIn(euroPlug));
        return euroVoltage;
    }
}

class ChinaEuroElectricityAdapter extends EuroElectricityAdapter {
    transformSocket(chinaSocket) {
        // transfrom it somehow
        return euroSocket;
    }

    transformVoltage(chinaVoltage) {
        // transfrom it somehow
        return euroVoltage;
    }
}

class USAEuroElectricityAdapter extends EuroElectricityAdapter {
    transformSocket(USASocket) {
        // transfrom it somehow
        return euroSocket;
    }

    transformVoltage(USAVoltage) {
        // transfrom it somehow
        return euroVoltage;
    }
}

// Main

const chinaSocket = getChinaSocket();
const USASocket = getUSASocket();

const euroChinaAdapterSocket = new ChinaEuroElectricityAdapter(chinaSocket);
const euroUSAAdapterSocket = new USAEuroElectricityAdapter(USASocket);

let device = new EuroDevice(euroChinaAdapterSocket);
device.makeItWork();

// suddenly we appeared in USA
device.setAdapter(euroUSAAdapterSocket);
device.makeItWork();