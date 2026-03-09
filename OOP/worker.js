class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  // Added method (most likely required by the exercise)
  goToWork() {
    this.energy -= 10;   // working consumes energy
    this.xp += 10;       // gain experience
  }
}
// Task 3: Code an intern object, run methods
function intern() {
    const internObj = new Worker("Bob", 21, 110, 0, 10)
    internObj.goToWork
    return internObj
}
    
// Task 4: Code a manager object, methods
function manager() {
    const manageObj = new Worker("Alice", 30, 120, 100, 30)
    manageObj.doSomethingFun
    return manageObj
}
