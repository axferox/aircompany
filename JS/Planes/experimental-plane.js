const Plane = require('./plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalFeatures, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.experimentalFeatures = experimentalFeatures;
        this.classificationLevel = classificationLevel;

    }
}

module.exports = ExperimentalPlane