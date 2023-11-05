const randomNumbers = [637, 635, 2, 8, 7, 3, 90, 87, 4];

let lessThan5 = [];

for (let i = 0; i < randomNumbers.length; i = i + 1 ) {
    if(randomNumbers[i] < 5){
        lessThan5.push(randomNumbers[i]);
    }  
    
}


console.log(lessThan5);