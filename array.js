// const arr =['mehedi',
//             'khan',
//             'babu',
//             'habib'
                
                
//                 ];

//                 arr[arr.length]= 'labu'

//                 console.log(arr)
//                 console.log(arr.length)

// //constructor pattern

// const a1 = new Array(6) 
// console.log(a1,a1.length)

// const a2 = new Array(1,4,8,8) 

// console.log(a2,a2.length)

// const arr=[1,2,3,4,5]
// let sum = 0

// for(let i=0; i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const times = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

// const func = [sum, sub, times, div, mod];

// const a = 10;
// const b = 20;

// for (let i = 0; i < func.length; i++) {
//     const result = func[i](a, b);
//     console.log(`[${func[i].name}] Result = ${result}`);
// }


// array of array

// const pointTable = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ];

// for(let i=0; i<pointTable.length;i++){
//     console.log(`Point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]} `);
// }

//Two dimentional array

const numbers =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i =0; i<numbers.length; i++){
    for(let j=0; j<numbers[i].length; j++){
        console.log(numbers[i][j])
    }
}


