const PassengerPlane = require('./planes/passenger-plane');
const MilitaryPlane = require('./planes/military-plane');
const militaryType = require('./models/military-type');
const experimentalPlane = require('./planes/experimental-plane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }
    
    getPassengerPlanes() {
        const passengerPlanes = this.planes.filter(plane => {
            return plane instanceof PassengerPlane;
        })
        return passengerPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.planes.filter(plane => {
            return plane instanceof PassengerPlane;
        })
        return passengerPlanes.sort((a, b) => b.passengersCapacity - a.passengersCapacity)[0];
    }

    getMilitaryPlanes() {
        const militaryPlanes = this.planes.filter(plane => {
            return plane instanceof MilitaryPlane;
        })
        return militaryPlanes;
    }

    getTransportMilitaryPlanes() {
        const getTransportMilitaryPlanes = this.planes.filter(plane => {
            return plane.militaryType === militaryType.transport;
        })
        // console.log(getTransportMilitaryPlanes)
        return getTransportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        const getBomberMilitaryPlanes = this.planes.filter(plane => {
            return plane.militaryType === militaryType.bomber;
        })
        return getBomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        const getExperimentalPlanes = this.planes.filter(plane => {
            return plane instanceof experimentalPlane;
        })
        return getExperimentalPlanes;
    }

    sortByMaxLoadCapacity() {
        const sortByMaxLoadCapacity = this.planes.sort((a, b) => (a.maxLoadCapacity - b.maxLoadCapacity));
        return sortByMaxLoadCapacity;
    }
}
module.exports = Airport;