// Создайте массив чисел и найдите его сумму

const numArray = [5, 10, 15, 20];

let sumForLoop = 0;
for (let i = 0; i < numArray.length; i++) {
  sumForLoop += numArray[i];
}

let sumReduce = numArray.reduce(function (acc, curr) {
  return acc + curr
}, 0);

let sumForEachLoop = 0;
numArray.forEach(function (num) {
  sumForEachLoop += num
});

console.log(sumForLoop, sumReduce, sumForEachLoop); //50 50 50

// Создайте массив строк и объедините их в одну строку

const stringsArray = [
  'You', 'don\'t', 'know', 'JS', 'yet'
]

const oneString = stringsArray.join(' ');
console.log(oneString);

// Найдите максимальный и минимальный элементы в массиве чисел
const minNumber = Math.min(...numArray);
const maxNumber = Math.max(...numArray);

const minNumReduce = numArray.reduce((i, j) => Math.min(i, j));
const maxNumberReduce = numArray.reduce((i, j) => Math.max(i, j));
console.log(minNumber, maxNumber, minNumReduce, maxNumberReduce);

// Реализуйте стек с использованием массива

function makeStack() {
  let items = [];
  let top = 0;

  this.push = function push(element) {
    items[top++] = element;
  }

  this.pop = function pop() {
    return items[--top];
  }

  this.size = function size() {
    return top;
  }

  this.isEmpty = function isEmpty() {
    return top === 0;
  }
}

const stack = new makeStack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.isEmpty(), stack.size());

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    this.items.length === 0;
  }
}
let stackClass = new Stack();
stackClass.push('fff')
console.log('stackClass', stackClass.items);

console.log('class');
console.log(stack.items);

// Реализуйте очередь с использованием массива

function makeQueue() {
  let items = {};
  let head = 0
  let tail = 0

  this.enqueue = function enqueue(element) {
    items[tail] = element;
    tail++;
  }

  this.dequeue = function dequeue() {
    const item = items[head];
    delete items[head];
    head++;
    return item;
  }

  this.size = function size() {
    return tail - head
  }

  this.isEmpty = function isEmpty() {
    return items.length === 0
  }
}

const q = new makeQueue();
q.enqueue(1)
q.dequeue()
console.log(q.isEmpty(), q.size());
