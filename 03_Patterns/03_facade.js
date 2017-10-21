class SkiSeller {
    rentSkies(height) {
        // some logic
        return skies;
    }
}

class LiftRepresenter {
    buyTicket(age) {
        // some logic
        return ticket;
    }
}

class Reception {
    rentApartment(age, gender) {
        // some logic
        return keyForApartment;
    }
}

class Terminal {
    constructor(ski, lift, apartment) {
        this.skiRepresenter = ski;
        this.liftRepresenter = lift;
        this.apartmentRepresenter = apartment;
    }

    makeUserHappy(user) {
        return {
            skies: this.skiRepresenter.rentSkies(user.height),
            liftTicket: this.liftRepresenter.buyTicket(user.age),
            apartmentKey: this.apartmentRepresenter.rentApartment(user.age, user.gender)
        }
    }
}


// Main
let terminal = new Terminal(new SkiSeller(), new LiftRepresenter(), new Reception());
let user = {age: '', height: '', gender: ''};

terminal.makeUserHappy(user);
