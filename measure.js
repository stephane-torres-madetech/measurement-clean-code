class Measure{
    constructor(quanity, unit){
        this.quanity = quanity
        this.unit = unit

    }
    equals(measure){
        return this.quanity === measure.quanity && this.unit === measure.unit
        
    }
}

module.exports = Measure