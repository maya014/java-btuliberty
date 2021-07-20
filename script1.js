
// ..........................


// ერთი
let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];

for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
}


// ორი
let names = ['maya', 'tea', 'tako', 'ia', 'nika'];
for (let item of names) {
    if(item.length > 3) {
        console.log(item);
    }
}

// სამი
let number = [1, 2, 3, 4, 5, 6, 7];
for (let i=0; i < number.length; i++) {
    if(number[i] % 2 == 0) {
        console.log('Even number: ' + number[i])
    } else {
        console.log('Odd number: ' + number[i]);
    }
}

// ოთხი
let numbers = [15, 67, 100, 5, 7, [80, 500]];
  console.log(numbers[5][1]);  

// ხუთი
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

// ექვსი
let my_array = [1, 'august', 2021];
for (let item of my_array) {
    console.log(item);
}

// შვიდი
let name = ['sandro', 'Tiko', 'salo', 'tano', 'niks', 'leqso', 'lasha'];
if (name.length == 5 && name[name.length - 1] == 'Nika') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (name.length == 7 || name[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");
}

// რვა 
// 6 === “6”
// false,ხდება ცვლადების ტიპების კონვერტაცია .
