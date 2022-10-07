for (var x=0; x<=1000; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

for (var x=0; x<=10000; x++) {
    if (x === 2500) {
            console.log('A quarter of the way there!');
    }
    else if (x === 5000) {
            console.log('Halfway there!');   
    }
    else {
            console.log('The loop is done!');
    }
}

var myStringArray = ["Shottas","WWZ","Gone 2","VD","Narcos"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log("My #"+myStringArray.indexOf(i)+myStringArray[i]);
   
}