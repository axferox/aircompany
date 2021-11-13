const Plane = require('./Plane');

class experimentalPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._classificationLevel = classificationLevel;

    }
}

module.exports = experimentalPlane