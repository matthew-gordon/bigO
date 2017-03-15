// O(n) - Linear time
(function() {
  'use strict';

  var arr = [23,23,12,3,4,5];

  function double(arr) {
    const newArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      newArray[i] = arr[i] * 2;
    }
    return newArray;
  }

}());

// O(1) - Constant time
(function() {
  'use strict';

  function print50nums() {
    for (let i = 0; i < 50; i++) {
      console.log(i);
    }
  }

}());

// O(n^2) - Quadratic time
(function() {
  'use strict';

  var arr = [23,23,12,3,4,5];

  function sumValues(arr) {
    let i = 0;
    let newArr = new Array(arr.length);

    while (i < arr.length) {
      let sum = 0;
      let j = i;

      while (j < arr.length) {
        sum += arr[j];
        j += 1;
      }

      newArr[i] = sum;
      i += 1;
    }

    return newArr;
  }
  sumValues(arr);

}());
