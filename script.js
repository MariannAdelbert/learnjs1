console.log('Hello script');

console.log(foo);
var foo = "hello"; //näitab inspect all undefined


//let i = 5;
//i = i % 2;
//console.log(i);


// Funktsioon 'hello' määramine
let hello = function(name) {
    return "Hello " + name;
}

// Kutsume 'hello' funktsiooni ja salvestame väärtuse muutujasse
let greeting = hello("Mariann");
console.log(greeting);  // Näitab: "Hello Mariann"

// Siin lihtsalt määrame muutujale väärtuse
greeting = "Mariann";
console.log(greeting);  // Näitab: "Mariann"

// Funktsioon 'goodbye' määramine tavalise funktsioonina
let goodbye = function(name) {
    return "Goodbye " + name;
}

// Funktsioon 'goodbye' määramine noolefunktsioonina
goodbye = (name) => {
    return "Goodbye " + name;
}

// Kutsume 'goodbye' funktsiooni ja salvestame väärtuse muutujasse
let farewell = hello("Mariann");
console.log(farewell);  // Näitab: "Hello Mariann"

// Siin määrame lihtsalt väärtuse muutujale
farewell = "Mariann";
console.log(farewell);  // Näitab: "Mariann"

let person = {
    name: "Mariann",
    age: 27,
    greeting(){
        console.log(this);
        return "hello";
    },
    goodbye: () => {
        console.log(this);
        return "goodbye";
    }
}

console.log(person.greeting());
console.log(person.goodbye());


function recursive(i) {
    console.log(i);
    if (i<10){
        recursive(i+1);
    }
}

recursive(0);

for (let i=0; i<10; i++){
    console.log(i)
}

let boo = "scary";
let template = `hello 
world
${person.name}
${boo}
!!!`;

console.log(template);

console.log("\u{1F44B}");  // Näitab: "👋"

console.log(0xFF);
console.log(0o15);

console.log(100_000_000_000);

let array = [
    'asdasd',
     1, true,
      () => 'hello',
       { cat: 'Nuustik'},
        [1, 2, 'hello'],
        'something'];


array[8]= 'something2';
console.log(array);
console.log(array[0]);
console.log(array[4].cat);

let i = 10;
if (i<10){
    console.log('i on väiksem kui 10');
} else if(i>10) {
    console.log('i on suurem kui 10');
} else {
    console.log('i on võrdne 10');
}
let day = new Date().getDay();
console.log(day);

let answer ='';
if(day==0){
    answer= 'pühapäev';
} else if(day==1){
    answer= 'esmaspäev';
} else if(day==2){
    answer= 'teisipäev';
} else if(day==3){
    answer= 'kolmapäev';
} else if(day==4){
    answer= 'neljapäev';
} else if(day==5){
    answer= 'reede';
} else if(day==6){
    answer= 'lauppäev';
}
console.log(answer);

switch(day){
    case 0:
        answer= 'pühapäev';
        break;
    case 1:
        answer= 'esmaspäev';
        break;
    case 2:
        answer= 'teisipäev';
        break;
    case 3:
        answer= 'kolmapäev';
        break;
    case 4:
        answer= 'neljapäev';
        break;
    case 5:
        answer= 'reede';
        break;
    case 6:
        answer= 'laupäev';
        break;
    default:
        answer= 'Weird day';
}
console.log (answer);

//for(let i=1 ; i<1_000_000 ; i*=2) {
    //console.log(i);
//}

//let startSec = new Date().getSeconds();
//let currentSec = new Date().getSeconds();
//let count = 0;
//while (currentSec == startSec){
    //currentSec = new Date().getSeconds();
    //console.log(count);
    //count++;
//}

//while(true){
//
//}
let a= -1;

while (a<1) {
    console.log('did stuff');
}

do {
    console.log('did stuff');
} while (a<1);

for (let key in person){
    console.log(key, person[key]);
}

