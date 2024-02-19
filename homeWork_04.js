// Создать объект Person несколькими способами, 
// после создать объект Person2, чтобы в нём были доступны методы объекта Person. 
// Добавить метод logInfo чтоб он был доступен всем объектам.

const Person = new Object({
  methodOne: doSmth = () => {console.log('Do IT')},
  methodTwo: doDmthElse = () => {console.log('XOXOXO')}
})

// const Person2 = Object.assign({}, Person)
const Person2 = Person

Person.logInfo = 'some info'

// Создать класс PersonThree c get и set для поля name и конструктором, 
// сделать класс наследник от класса Person.

class PersonClass {
  constructor(name) {
    this.name = name
  }
}

class PersonThree extends PersonClass {
  constructor(name, oneMoreValue) {
    super(name);
    this.oneMoreValue = oneMoreValue;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    return this._name = value
  }
}

let prs = new PersonThree('aston', 'xyz')
console.log(prs.name);
console.log(prs.oneMoreValue);