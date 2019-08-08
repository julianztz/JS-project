/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var Mark_h, Mark_w, John_h, John_w, BMI_Mark, BMI_John;
Mark_h = 1.8
Mark_w = 90
John_h = 1.7
John_w = 75

BMI_Mark= Mark_w/(Mark_h^2)
BMI_John = John_w/(John_h^2)

var Mark_taller = Mark_h > John_h

console.log('is mark taller? ', Mark_taller)
console.log('mark BMI: ', BMI_Mark)
console.log('john BMI: ', BMI_John)