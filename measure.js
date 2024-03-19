class Unit{
    constructor(relativeRatio, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
        } else {
            this._ratioToBaseUnit = 1;
        }
    }

    s(amount){
        return new Measure(amount, this);
    }
}

const TEASPOON = new Unit()
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)

class Measure{
    constructor(quanity, unit){
        this.quanity = quanity
        this.unit = unit
    }

    equals(other){
        const firstComparison = this.unit._ratioToBaseUnit * this.quanity
        const secondComparison = other.unit._ratioToBaseUnit * other.quanity
        return firstComparison === secondComparison
    }
}

module.exports = {Measure, TEASPOON, TABLESPOON, OUNCE, CUP}