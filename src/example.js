// function aaa () {
//     return null
// }

// const bbb = () => null


// // this - context object
// // call, bind, apply


// // call
// function getName(num) {
//     console.log(this.name, num)
// }

// const AlexUser = {
//     name: 'Alex',
// }

// const AnnaUser = {
//     name: 'Anna',
// }

// getName.call(AlexUser, 33)

// // bind
// const getAnnasName = getName.bind(AnnaUser)

// getAnnasName(33)

// // apply
// getName.call(AlexUser, [33])


// // closures

// const createClosureObj = () => {
//     let name = 'name';

//     return {
//         getName() {
//             return name
//         },
//         setName(newName) {
//             if (typeof newName == 'string') {
//                 name = newName
//             } else {
//                 console.log('Error')
//             }
//         }
//     }
// }

// const myObj = createClosureObj()

// myObj.setName('fewfwfw')


// // arr methods
// const arr = [1, 2, 3];

// arr.push(4) // [1, 2, 3] -> [1, 2, 3, 4]

// arr.pop() // [1, 2, 3, 4] -> [1, 2, 3]

// const element = arr.shift() // 1

// const length = arr.unshift(1) // arr.length

// //////
// const tree = {
//     a: {
//         b: {
//             b: {

//             },
//             e: {

//             },
//             f: {

//             },
//         },
//         c: {

//         }
//     },
// }

// /// isNaN

// // console.log(typeof NaN) // number
// // console.log(isNaN('6')) // '6' -> 6 // false
// // console.log(isNaN('NaN')) // 'NaN' -> NaN // true
// // console.log(Number.isNaN('NaN')) // 'NaN' // false
// // console.log(isNaN('124'/'2')) // true


// /// Task #1

// function sayHi() {
//     console.log(name); // undefined
//     console.log(age); // ReferenceError
//     var name = "Lydia";
//     let age = 21;
// }
  
// // sayHi();


// /// Task #2

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 10000);
// }

// // step 1:
// // i = 0
// // () => console.log(i) - ждет 10 сек

// // step 2:
// // i = 1
// // второй callback: () => console.log(i) - тоже ждет 10 сек

// // step 3:
// // i = 2
// // третий callback: () => console.log(i) - тоже ждет 10 сек

// // result:
// // i = 3
// // () => console.log(i), () => console.log(i), () => console.log(i)


// /// Task #3

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// };  

// // console.log(shape.diameter()) // 20
// // console.log(shape.perimeter()) // Error


// /// Task #4

// const bird = {
//     size: 'small'
// };
  
// const mouse = {
//     name: 'Mickey',
//     small: true
// };

// // mouse.bird.size // result: cannot read property of undefined (reading "size")
// // mouse[bird.size] // result: true
// // mouse[bird["size"]] // result: true


// /// Task #5

// // let c = { greeting: 'Hey!' };
// // let d;

// // d = c;

// // c.greeting = 'Hello!';

// // console.log(d.greeting)


// /// Task #6

// let a = 3;
// let b = new Number(3);
// let c = 3;

// // console.log(a == b);
// // console.log(a === b);
// // console.log(b === c);


// /// Task #7

// function bark() {
//     console.log('Woof!');
// }

// bark.animal = 'dog'

// /// Big O notation

// const arr1 = [1, 2, 3, 4, 5];


// // O(1)
// function getFirstElement(arr) {
//     return arr[0]
// }

// const bbbb = getFirstElement(arr1)

// // O(log n) 
// function binarySearch(arr, x) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2)

//         if (arr[mid] === x) {
//             return mid
//         } else if (arr[mid] < x) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }
// }

// // O(n)
// function linearSearch(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             return i
//         }
//     }

//     return -1
// }

// // O(n*log n)

// // TO DO

// // O(n^2)
// function bubbleSort(arr) {
//     for (let i=0; i < arr.length - 1; i++) {
//         for (let j=0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }

//     return arr
// }

// console.log('bubbleSort:', bubbleSort([4,5,3,0,2]))


// // O(2^n)
// // задача коммивояжера
