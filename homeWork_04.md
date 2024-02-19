# 1. Какие бывают алгоритмы сортировок? 

**Сортировка пузырьком**

Сортировка пузырьком перебирает весь массив элементов, сравнивая два соседних элемента друг с другом и меняя их местами в соответствии с условиями. Элементы с большим значением опускаются вниз массива, а элементы с наименьшим значением поднимаются вверх.

Сложность алгоритма: O(n^2), так как используется вложенный цикл.

```JavaScript
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};
```

**Сортировка выбором**

Сортировка выбором при каждой итерации проходит по неотсортированной части массива, находит минимальный элемент и переносит его в начало массива.

Сложность алгоритма: O(n^2).

```JavaScript
const selectedSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr
};
```

**Циклическая сортировка**

Циклическая сортировка раскладывает массив на циклы. Затем, внутри этих циклов происходят перестановки элементов до тех пор, пока все циклы не завершатся и массив не будет отсортирован.

Сложность алгоритма: O(n^2).

```JavaScript
function cycleSort(arr) {
  // Запускаем цикл i, который должен пройти по всему массиву.
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    // Создаём временную переменную position, которая будет равна i.
    let position = i;

    // Запускаем внутренний цикл j, который перебирает всех соседей справа.
    for (let j = i + 1; j < arr.length; j++) {
      // Когда внутри цикла j находим элемент, который меньше arr[i], увеличиваем position на единицу.
      if (arr[j] < value) {
        position++;
      }
    }
    // Если значение position равно i, переходим к следующей итерации внешнего цикла i.
    if (position === i) {
      continue;
    }
    // Пропускаем дубликаты, сравнивая значения элементов под индексами position и i с помощью цикла.
    while (value === arr[position]) {
      position++;
    }

    // Меняем местами элементы под индексами i и position.
    [arr[position], value] = [value, arr[position]];

    // Запускаем цикл в обратную сторону, пока position не будет ссылаться на i.
    while (position !== i) {
      position = i;
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k] < value) {
          position++;
        }
      }
      while (value === arr[position]) {
        position++;
      }
      [arr[position], value] = [value, arr[position]];
    }
  }
  return arr;
}
```

**Быстрая сортировка**

Быстрая сортировка определяет стержень и разбивает массив на подмассивы относительно этого стержня, которые затем сортируются.

Сложность алгоритма: O(n^2).

```JavaScript
const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const pi = partition(arr, start, end);

    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
};

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(value => value < pivot);
    const greater = arr.filter(value => value > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}
```


