class Uber{
    constructor(costPerMile,costPerMinute){
        this.costPerMile=costPerMile;
        this.costPerMinute=costPerMinute;
    }
    Calculate(distance, time){
        var distanceCost=distance*this.costPerMile;
        var timeCost=distance*this.costPerMinute;
        return distanceCost+timeCost;
    }
}

var uberCost = new Uber(20,10);
var totelCost= uberCost.Calculate(10,20);
console.log(totelCost.toFixed(2)+' RS');