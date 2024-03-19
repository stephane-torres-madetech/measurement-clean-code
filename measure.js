class Measure{
    constructor(quanity, unit){
        this.quanity = quanity
        this.unit = unit

    }
    equals(measure){
        if (this.unit === "tsp" && measure.unit === "tbsp") {
            return (this.quanity / 3) == measure.quanity;
        } 
        if (this.unit === "tbsp" && measure.unit === "tsp") {
            return (this.quanity * 3) == measure.quanity;
        }
        return this.quanity === measure.quanity && this.unit === measure.unit
    }
}

module.exports = Measure