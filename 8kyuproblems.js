//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/* Example Outputs:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


 First step figure out what the problem is asking :
        - The problem here is asking if you get a number such as (3) return a negative (-3) and if the numbers already negative return
          return that

  Second step: Plan a solution
        - Here i know i will first have to check wether the number is positive or negative. Then based on that return either
        the negative version of that number or return the number if already negative.

  Third step: Putting putting the peices of the puzzle together:
        - I know that i ll need a conditional to check the num is positive or neg so i ll use a terenery Operator, then its just inserting the logic
        if num is greater than 0 (if number is negative) then i will make num negative of itself by first making it = 0 by subtracting it by itself and then subtracting
        one more time to make it the negative verion (13 -13) = 0  then - 13 again to get negative 13

*/
function makeNegative(num) {

  return num > 0 ? (num-num)-num: num // terenary operator which checks if number is positive, then makes num negative

}
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example Outputs:
348597 => [7,9,5,8,4,3]
0 => [0]


 First step figure out what the problem is asking :
        - The problem here is asking to return an array  a non-negative(positive) number reversed and also using the digits of this number.
        take number 32459 put in array with each individual digit of number being an array item => [9,5,4,2,3]

  Second step: Plan a solution
        - couple steps i have to take to do this 1. Split digits of number given 2. reverse order and put in a new array

  Third step: Putting putting the peices of the puzzle together:
        - first have to convert array to string , using toString() method so i can split the digits, then split the didgits using split(''), then reverse string using reverse()method and finally using the map method to
        to create a new array and make sure all values are in integer form i ll use parseInt() method to convert the string of numbers back to just numbers
*/
function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(index => parseInt(index))//  to string => then splitting digits => reeversing order and finnaly mapping new array
}
/*Given an array of integers, return a new array with each value doubled.
For example:

[1, 2, 3] --> [2, 4, 6]


 First step figure out what the problem is asking :
          This is question is asking to to double the integer values of an array then return a new array
        -
  Second step: Plan a solution
        - I would first need something that multiplies each array item by 2. After i double each value i need to put the doubled values in a new array (return)

  Third step: Putting putting the peices of the puzzle together:
        - theres two ways that i think that i could do it one is to use a foreach loop and then in that loop multiply each array value by two and put that in a new array by creating a new array to put theses values in
        Or i could just use the map prototype method which will do everything i said i would need to do with a for loop but way less code

*/
function maps(x){
return x.map(item=>item*2)  //returns array with x values doubled
}

/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.

For example:

Return true if the array contains the value, false if not.



});

 First step figure out what the problem is asking :
        -This problem is asking to check whether the provided array contains the value of x in it when given an array and X
        so in other words your checking whether or not the array contains the value of x
        -
  Second step: Plan a solution
        here i would need to check  each array item with the given value of x. The simpliest way to do this is to use the includes method


  Third step: Putting putting the peices of the puzzle together:
        - Use includes method to return a boolean

*/
function check(a, x) {

  return a.includes(x)
   }
   
