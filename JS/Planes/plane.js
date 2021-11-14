class Plane {
    constructor(aircraftModel, speedLimit, distanceLimit, loadCapacity) {
        this.aircraftModel = aircraftModel;
        this.speedLimit = speedLimit;
        this.distanceLimit = distanceLimit;
        this.loadCapacity = loadCapacity;
    }
    getAircraftModel() {
        return this.aircraftModel;
    }
    getSpeedLimit() {
        return this.speedLimit;
    }
    getDistanceLimit() {
        return this.distanceLimit;
    }
    getLoadCapacity() {
        return this.loadCapacity;
    }
}

module.exports = Plane;