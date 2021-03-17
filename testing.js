function Person(name, age) {
    this.name = name,
    this.age = age,
    this.stomache = [],
    this.eat = function (food) {
      if (this.stomache > 10) {
        return this.stomache.push(food);
      }
      return this.stomache.push(food);
    },
    this.poop = function () {
      return this.stomache = [];
    },
    this.toString = function () {
      return console.log(`${this.name}, ${this.age}`);
    }
            
  }
  
const sam = new Person('Sam', '21');
console.log(sam);
function Baby(person, favoriteToy) {
    this.name = person.name;
    this.age = person.age;
    this.favoriteToy = favoriteToy;
 
}
 
const billy = new Baby(Person('Billy', '2months'), 'Zebra')
console.log(billy);