# Language Basics
The basics of Javascript language are covered in this section. [Click here](./../readme.md) to go back to the main page.

## Index

- [Operator Precedence](#operator-precedence)
- [Function declearation vs function expression](#function-declearation-vs-function-expression)
- [Arrays](#arrays)

  - <details><summary>Array Methods</summary>
        <p>

    Available [Array methods](#array-methods)


        1. concat()
        2. copyWithin()
        3. every()
        4. fillter()
        5. flat()
        6. flatMap()
        7. forEach()
        8. indexOf()
        9. lastIndexOf()
        10. map()
        11. reduce()
        12. reverse()
        13. slice()
        14. some()
        15. sort()
        16. splice()
        17. entries()
        18. fill()
        19. find()
        20. findIndex()
        21. findLast()
        22. findLastIndex()
        23. group()
        24. groupTo()
        25. reduceRight()
        26. Array.from()
        27. Array.isArray()
        28. Array.of()

    </p>

    </details>

### Operator precedence

| Operator     | precedence | associativity | operator type  |
| ------------ | ---------- | ------------- | -------------- |
| `()`         | 20         | left          | grouping       |
| `[]`         | 20         | left          | member access  |
| `.`          | 20         | left          | member access  |
| `new`        | 20         | left          | member access  |
| `++`         | 20         | right         | postfix        |
| `--`         | 20         | right         | postfix        |
| `!`          | 19         | right         | unary          |
| `~`          | 19         | right         | unary          |
| `+`          | 19         | right         | unary          |
| `-`          | 19         | right         | unary          |
| `typeof`     | 19         | right         | unary          |
| `void`       | 19         | right         | unary          |
| `delete`     | 19         | right         | unary          |
| `*`          | 18         | left          | multiplicative |
| `/`          | 18         | left          | multiplicative |
| `%`          | 18         | left          | multiplicative |
| `+`          | 17         | left          | additive       |
| `-`          | 17         | left          | additive       |
| `<<`         | 16         | left          | shift          |
| `>>`         | 16         | left          | shift          |
| `>>>`        | 16         | left          | shift          |
| `<`          | 15         | left          | relational     |
| `<=`         | 15         | left          | relational     |
| `>`          | 15         | left          | relational     |
| `>=`         | 15         | left          | relational     |
| `in`         | 15         | left          | relational     |
| `instanceof` | 15         | left          | relational     |
| `==`         | 14         | left          | equality       |
| `!=`         | 14         | left          | equality       |
| `===`        | 14         | left          | equality       |
| `!==`        | 14         | left          | equality       |
| `&`          | 13         | left          | bitwise AND    |
| `^`          | 12         | left          | bitwise XOR    |
| `\|`         | 11         | left          | bitwise OR     |
| `&&`         | 10         | left          | logical AND    |
| `\|\|`       | 9          | left          | logical OR     |
| `?:`         | 8          | right         | conditional    |
| `=`          | 3          | right         | assignment     |
| `+=`         | 3          | right         | assignment     |
| `-=`         | 3          | right         | assignment     |
| `*=`         | 3          | right         | assignment     |
| `/=`         | 3          | right         | assignment     |
| `%=`         | 3          | right         | assignment     |
| `<<=`        | 3          | right         | assignment     |
| `>>=`        | 3          | right         | assignment     |
| `>>>=`       | 3          | right         | assignment     |
| `&=`         | 3          | right         | assignment     |
| `\|=`        | 3          | right         | assignment     |
| `^=`         | 3          | right         | assignment     |
| `,`          | 2          | left          | comma          |

### Function declearation vs function expression

Function declaration:

    function foo() {
        // ...
    }

Function expression:

    var foo = function() {
        // ...
    }

### Arrays

- JavaScript arrays are resizable and can contain a mix of different data types.
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers.
- JavaScript arrays are zero-indexed
- JavaScript array-copy operations create shallow copies. That is,**if an array element is an object reference,the copy will refer to the same object.**

#### Array methods

1.  `concat()`
    <!-- code example of concat -->

    Code example of concat:

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```

2.  `copyWithin()`
    <!-- code example of copyWithin -->

    Code example of copyWithin:

```javascript
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

3.  `every()`
    <!-- code example of every -->

    Code example of every:

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

4.  `filter()`
    <!-- code example of filter -->

    Code example of filter:

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

5.  `flat()`
    <!-- code example of flat -->

    Code example of flat:

```javascript
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

6.  `flatMap()` mapps and flattens the array
    <!-- code example of flatMap -->

    Code example of flatMap:

```javascript
const arr1 = [1, 2, 3, 4];

console.log(arr1.flatMap(x => [x, x * 2]));
// expected output: Array [1, 2, 2, 4, 3, 6, 4, 8]
```

7.  `forEach()`
    <!-- code example of forEach -->

    Code example of forEach:

```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

8.  `indexOf()`
    <!-- code example of indexOf -->

    Code example of indexOf:

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

9.  `lastIndexOf()`
    <!-- code example of lastIndexOf -->

    Code example of lastIndexOf:

```javascript
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

10. `map()`
    <!-- code example of map -->

    Code example of map:

```javascript
 const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

11. `reduce()` excepts a user defined function and returns a single value
    <!-- code example of reduce -->

    Code example of reduce:

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator,currentValue) =>
    accumulator + currentValue,initialValue
 );

console.log(sumWithInitial);
// expected output: 10
```

12. `reverse()`
    <!-- code example of reverse -->

    Code example of reverse:

```javascript
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Note that the array has been modified in place
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

13. `slice()` forbids the last index and takes the first index
    <!-- code example of slice -->

    Code example of slice:

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

14. `some()` returns true if any of the elements in the array pass the test
    <!-- code example of some -->

    Code example of some:

```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

15. `sort()` sorts the elements of an array in place and returns the sorted array. **Built upon converting the elements into strings**

<!-- code example of sort -->

Code example of sort:

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

16. `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

<!-- code example of splice -->

Code example of splice:

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

```
17. `entries()` returns a new Array Iterator object that contains the key/value pairs for each index in the array.

<!-- code example of entries -->

Code example of entries:

```javascript
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

18. `fill()` fills all the elements of an array from a start index to an end index with a static value.

<!-- code example of fill -->

Code example of fill:

```javascript
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

19. `find()` returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

<!-- code example of find -->

Code example of find:
    
```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

const found array1.find(element=>elemet == 20);

console.log(found);
//expcted output: undefined
```

20. `findIndex()`

Code example of findIndex():

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```
21. `findLast()` returns the value of the last element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

<!-- code example of findLast -->

Code example of findLast:

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findLast(isLargeNumber));
// expected output: 44
```
22. `findLastIndex()` returns the index of the last element in the provided array that satisfies the provided testing function. Otherwise -1 is returned.

<!-- code example of findLastIndex -->

Code example of findLastIndex:

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findLastIndex(isLargeNumber));
// expected output: 4

```
23. `group()` groups the elements of an array based on the given function.

<!-- code example of group -->

Code example of group:

```javascript
const array = [6.1, 4.2, 6.3];
const groupped = array.groupBy(Math.floor);
// [[6.1, 6.3], [4.2]]

console.log(groupped);
// expected output: Array [Array [6.1, 6.3], Array [4.2]]
```
24. `groupToMap()` groups the elements of an array based on the given function and returns the objects in a Map.

<!-- code example of groupToMap -->

Code example of groupToMap:

```javascript
const array = [6.1, 4.2, 6.3];
const groupped = array.groupToMap(Math.floor);
// {6: [6.1, 6.3], 4: [4.2]}

console.log(groupped);
// expected output: Map {6 => Array [6.1, 6.3], 4 => Array [4.2]}
```

25. `reduceRight()` applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

<!-- code example of reduceRight -->

Code example of reduceRight:

```javascript

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
      (accumulator, currentValue) => accumulator.concat(currentValue)
    );

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

26. `Array.from()` creates a new, shallow-copied Array instance from an array-like or iterable object.

<!-- code example of Array.from -->

Code example of Array.from:

```javascript
 function f() {
      return Array.from(arguments);
    }

f(1, 2, 3);
// [1, 2, 3]

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
```

27. `Array.isArray()` determines whether the passed value is an Array.

<!-- code example of Array.isArray -->

Code example of Array.isArray:

```javascript
Array.isArray([1, 2, 3]);
// true

Array.isArray({foo: 123});
// false

Array.isArray('foobar');
// false

Array.isArray(undefined);
// false
```

28. `Array.of()` creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

<!-- code example of Array.of -->

Code example of Array.of:

```javascript
Array.of(7);
// [7]

Array.of(1, 2, 3);
// [1, 2, 3]

Array.of(undefined);
// [undefined]
```