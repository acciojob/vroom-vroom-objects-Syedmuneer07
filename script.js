// Complete the js code
function Car(make, model) {
	this.make;
	this.model;
}

Car.getMakeModel=function(){
		return `${this.make} ${this.model}`
	};
function SportsCar(make, model, topSpeed) {
	Car.call(make,model);
	this.topSpeed;
	
}
SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;

SportsCar.prototype.getTopSpeed(){
	return this.topSpeed;
}
// Create a new SportsCar instance
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
