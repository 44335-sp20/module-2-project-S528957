//declare four variables called table, operator, count, and msg.
var table,operator, count, msg;
//table will be the number you are adding to or multiplying by.  In this case it will be 3.
var count = 0;
var operator = prompt("addition or multiplication: ");
//operator will be assigned to either the string "addition" or "multiplication" depending upon
//which one you are running. You will need to test both.
//count will be used to count in the loops.  Lets set it to 1.
//msg will store a string that will later display to the user.  For now leave it blank "".





//Write an if statement to check if the operator says add.
if operator == "addition";
//In the if statement, create a while loop that will loop 11 times by using count.
    while count <= 11; count++;
//Add a string to msg that will be printed out later.  The message for
//the loop should look something like this:
// 1 + 3 = 4
// 2 + 3 = 5
// 3 + 3 = 6
//and so on
//incrament count so you're not in an infinite loop.

//Write an else statement that will execute if the if statement is false.
//The else statement will use a for loop to add a string to the variable msg.
//When the for loop runs, the message should look something like this:
// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
//and so on.





//When you are done with the if-else statement, set the innerHTML
//of the element with the Id of 'answer' to your message. 
var el = document.getElementById('blackboard');
el.innerHTML = msg;
