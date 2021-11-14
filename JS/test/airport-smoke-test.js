const assert = require('chai').assert;

const Plane = require('../planes/plane');
const MilitaryPlane = require('../planes/military-plane');
const PassengerPlane = require('../planes/passenger-plane');
const Airport = require('../airport');
const militaryType = require('../models/military-type');
const experimentalPlane = require('../planes/experimental-plane');
const experimentalTypes = require('../models/experimental-type');
const classificationLevel = require('../models/classification-level');

describe('airport-smoke-test.js', () => {

    const planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, militaryType.bomber),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, militaryType.bomber),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, militaryType.fighter),
        new MilitaryPlane('F-15', 1500, 12000, 10000, militaryType.fighter),
        new MilitaryPlane('F-22', 1550, 13000, 11000, militaryType.fighter),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, militaryType.transport),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalTypes.altitude_limit, classificationLevel.secret),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalTypes.take_off_type, classificationLevel.top_secret)
    ];
    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should check is there are military Planes with transport type', () => {
        const airport = new Airport(planes);
        const transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of transportMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === militaryType.transport) {
                flag = true;
                break;
            }
        }
        assert.equal(flag, true);
    });

    it('should check passenger plane with max capacity', () => {
        let airport = new Airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse(expectedPlaneWithMaxPassengersCapacity == planeWithMaxPassengerCapacity);
    });


    it('test 3', () => {
        console.log("TEST testGetPassengerPlaneWithMaxCapacity started!");
        let airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getLoadCapacity() > nextPlane.getLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    })

    it('testHasAtLeastOneBomberInMilitaryPlanes', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === militaryType.bomber) {
                flag = true;
            } else {
                assert.fail("Test failed!");
            }
        }

        // if not failed;
    })

    it('should check that experimentsl planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes = airport.getExperimentalPlanes();
        let hasUnclassifiedPlanes = false;
        for (let experimentalPlane of bomberMilitaryPlanes) {
            if (experimentalPlane.classificationLevel === classificationLevel.UNCLASSIFIED) {
                hasUnclassifiedPlanes = true;

            }
            assert.isFalse(hasUnclassifiedPlanes);

        }
    });

});