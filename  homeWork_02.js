// 1. Создать объект counter всеми возможными способами

const counter1 = {
  start: 0
}
const counter2 = new Object({
  start: 1
})
const counter3 = {}
counter3.start = 2

// 2. Скопировать объект counter всеми возможными способами

const counterCopy1 = {}
for (let key in counter1) {
  counterCopy1[key] = counter1[key]
}

const counterCopy2 = {}
Object.assign(counterCopy2, counter2)

const counterCopy3 = Object.assign({}, counter3)

// 3. Создать функцию makeCounter всеми описанными и возможными способами
function makeCouter1() {
  console.log('Это простое объявление функции');
}

const makeCouter2 = function () {
  console.log('Это функциональное выражение');
}

const makeCouter3 = () => {
  console.log('Это стрелочная функция');
}

(function makeCounterIIFE() {
  console.log('Это самовызывающаяся функция');
})()

// 4. Написать функцию глубокого сравнения двух объектов:

const obj1 = {
  here: {
    is: "on",
    other: "3"
  },
  object: "Y"
};

const obj2 = {
  here: {
    is: "on",
    other: "2"
  },
  object: "Y"
};

const deepEqual =
  (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) {
      return false
    }

    const isObject = (obj) => {
      return obj != null && typeof obj === 'object'
    }

    for (let key of objKeys1) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      const isObjects = isObject(value1) && isObject(value2);

      if ((isObjects && !deepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
        return false;
      }
    }
    return true;
  };

  console.log(deepEqual(obj1, obj2));

// 5. Развернуть строку в обратном направлении при помощи методов массивов

function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('Maria'));
