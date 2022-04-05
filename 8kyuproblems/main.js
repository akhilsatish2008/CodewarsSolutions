//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/* Example Outputs:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


 First step figurre out what the problem is asking :
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
