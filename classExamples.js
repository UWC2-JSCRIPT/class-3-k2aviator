const car = {
  year: 2019,
  make: 'Toyota',
  model: 'Rav4',
  getSpecs() {
  console.log(`This is a ${this.year} ${this.make} ${this.model}`);
  }
  };
  car.getSpecs() // 'This is a 2019 Toyota Rav4'


//SETTING this - bind, call AND apply
console.log("")

  const teacher = {
    says: 'blah, blah',
    talk(punct) {
    console.log(`${this.says}${punct}`);
    }
  };
  const student = {
    says: 'Wait… what'
  }
  teacher.talk("!")
  teacher.talk.call(student, '?');


  // SETTING this – bind, call AND apply

console.log("")
const teacherTwo = {
    says: 'blah, blah',
    talk(punct) {
    console.log(`${this.says}${punct}`);
    }
    };
    const studentTwo = {
    says: 'Wait… what'
    }
  const studentTalk = teacherTwo.talk.bind(studentTwo);
  
  studentTalk('?!?!');
    
  teacherTwo.talk(".")