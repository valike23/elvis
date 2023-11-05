what are loops:

loops are a way of repeating a specific block of code for a particular number of iteration (times).

for instance, If you have to check a list (array) of numbers till you find a number less than 5.  You will need
to repeat the code that is used to check each number of after the other.

e.g say you have const randomNumbers =[34,87,536,3,12];
the code to check if the number is less than 5 is... if(number < 5) {
    console.log('number is less than 5');
    lessThan5.push(number);
};

below is an example of a code using a loopsconst randomNumbers = [637, 635, 2, 8, 7, 3, 90, 87, 4];

let lessThan5 = [];

for (let i = 0; i < randomNumbers.length; i++) {
    if(randomNumbers[i] < 5){
        lessThan5.push(randomNumbers[i]);
    }  
    
}


console.log(lessThan5);

the loop here is called a for loop. A for loop has 2 major parts... The head and the body

the head is what controllers the loop. The head is divided into three parts.
the counter, the termination condition and the step increment. 