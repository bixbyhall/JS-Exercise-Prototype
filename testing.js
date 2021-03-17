function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  
  Car.prototype.fill = function(gallons) {
    return this.tank += gallons;
  };
  Car.prototype.drive = function(distance) {
    if (this.tank - (distance / this.milesPerGallon) > 0) {
        return [this.odometer += distance, this.tank = this.tank - (distance / this.milesPerGallon),];
    } else if (this.tank - (distance / this.milesPerGallon) <=0) {
        this.odometer += (distance - (distance - this.tank * this.milesPerGallon));
        return `I Ran out of fuel at ${this.odometer} miles!`;
    }
  }
  const truck = new Car('Tacoma', '23');
  truck.fill(25);
  console.log(truck.drive(700));
  