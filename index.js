
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  let cat1 = new Cat("Whiskers", "female");
  let cat2 = new Cat("Tom", "male");
  
  console.log(cat1.speak()); 
  console.log(cat2.speak()); 

  let dog1 = new Dog("Rex", "male");
  let dog2 = new Dog("Bella", "female");
  
  console.log(dog1.speak());
  console.log(dog2.speak()); 
  
  let bird1 = new Bird("Polly", "female");
  let bird2 = new Bird("Jack", "male");
  
  console.log(bird1.speak()); 
  console.log(bird2.speak()); 