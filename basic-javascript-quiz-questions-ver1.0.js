
// BASIC JAVASCRIPT QUIZ
//Questions Created by Cohort 221 Students April 2022

//Instructions
// All of the questions below are wrapped in functions
// Each section of questions is wrapped in a function that is named for the topic the questions will be on

// Inside each of the section functions all of the return values of the questions is going to be logged to the console.
//This will allow you to compare the logged answers with the answer sheet of what you should return
//The answer sheet will contain solutions and some example code for how you could have solved the question.

function variablesQuiz(){
    
     /* This Section of the Quiz will review variables in JavaScript (including ES6 updates)
        These Quiz Questions were written by 
        Brian and Jose */ 

    function variablesQuizQ1(){

    //question #1 part1 Use the var keyword to declare a variable called domain. 
    //question #1 part2 Next assign a number to your new variable.//

        return domain
    };
    function variablesQuizQ2(){
    //question #2 Assign the contents of variable X to Z//
    var x;
    x = 7;
    var z;
    //type answer below this line//
    
    //type answer above this line//
    
    return z;
        
    };

    function variablesQuizQ3(){

    /* Question #3 - Part 1
    The 2 lines of code are commented out because they are currently throwing an error.
    Uncomment the two lines of code below the question prompt and read them.
    Why does the code result in an error?
    Write the reason for this as a string which is being assigned to the variable reasonForError. */

    // let toyName = "transformer";
    // let toyName = "lets roll!";

    let reasonForError = '';

    /* Question #3 - Part 2
        Fix code below this comment so it does not result in error
        Note - there are multiple ways to fix this error
        */
    
   

        
        return reasonForError;
        
    };

    // function variablesQuizQ4(){

        
    // };


   
    
    
   
    
   
    
  
    console.log("The answer to variablesQuizQ1 is currently: ", variablesQuizQ1())
    console.log("The answer to variablesQuizQ2 is currently: ", variablesQuizQ2())
    console.log("The answer to variablesQuizQ3 is currently: ", variablesQuizQ3())
    // console.log("The answer to variablesQuizQ4 is currently: ", variablesQuizQ4())
    
}//End of Variables Quiz Section




function comparisonOperatorsQuiz(){
    //This section of the quiz will review comparison operators
    //Quiz Questions Created by
    //Anton Igudesman
    //group member 2
    //group member 3
    //edited by Martyn Conkling

    function comparisonOperatorsQuizQ1(){
            

    };

    function comparisonOperatorsQuizQ2(){
            

    };

    function comparisonOperatorsQuizQ3(){
            

    };

    // this is more of an objects questions, should be put in a different section
    function comparisonOperatorsQuizQ4() {
        // Using the following Object:
      const  bugSpecimens = {
             2291: {
                 nickName: "Pincher Bug",
                 descriptiveTerms: ["creepy", "sharp", "scary", "beautiful"],
                 bugName: "Euborellia annulipes"
              },
             2471: {
                  nickName: "Dung Beetle",
                  descriptiveTerms: ["stinky", "disgusting"]
                    }
               }

    //Make up a scientific bug name for specimen 2471 
    //Complete the function "updateBugs" that lets you do the following    
    //-Add a 3rd term (as a string) to the array value of the descriptiveTerm property for specimen 2471
    //-Add a property to specimen 2471 called "bugName"

     

    // this function will not be reusable, as it is only going to be performing spec
        function updateBugs(collection, id, prop, val){

         //Write the code you need for your answer in here

        }
        return bugSpecimens;
    }
     
    console.log("The answer to Question 1 is currently: ", comparisonOperatorsQuizQ1())
    console.log("The answer to Question 1 is currently: ", comparisonOperatorsQuizQ2())
    console.log("The answer to Question 1 is currently: ", comparisonOperatorsQuizQ3())
    console.log("The answer to Question 1 is currently: ", comparisonOperatorsQuizQ4())

}//End of section



/* Comparison and Equality operators - Anton Igudesman's group

Choose the correct comparison operator to alert true, when x is equal to y.
	A.	x = 10;
		y = 10;
		alert(x = y);
	B. 	x = 10;
		y = 10;
		alert(x == y);
	C. 	x = 10;
		y = 10;
		alert(x >= y);

Which of these is not a part of “Comparison Operators”.
A. 	=!
B.	=
C.	===
Ans - 

Select the Correct Javascript “Boolean” Data Types.(Multiple Answer)
Yes/No
On/Off 
True/False
Undefined 
Ans- 

4. Using the following Object:
 const  bugSpecimens = {
        2291: {
            nickName: "Pincher Bug",
            descriptiveTerms: ["creepy", "sharp", "scary"],
            bugName: "Euborellia annulipes"
         },
        2471: {
             nickName: "Dung Beetle",
             descriptiveTerms: ["stinky", "disgusting"]
              }
          }
 Make up a scientific bug name for specimen 2471 
Complete the function that lets you do the following    
-Add a 3rd descriptiveTerm for specimen 2471
-Add the bugName cat as a string for specimen 2471


Ans -
function updateBugs(collection, id, cat, val) {
if (cat === "bugName" && collection[id].hasOwnProperty("bugName") === false) {
             collection[id][cat] = val;
              }
if (cat === "descriptiveTerms") {
collection[id][cat].push( val);
            }
return collection;
}
updateBugs(bugSpecimens, 2471, 'bugName', 'scratchydoodle');
updateBugs(bugSpecimens, 2471, 'descriptiveTerms', 'voracious');
console.log(bugSpecimens);





*/


/* Compound Assignment Operators Questions - Bonnie So's group

let a = 7
let b = 4
let c =25


What is one way to write the assignment below:
	
	A = a + 12


What is the output for c  /= 5?


Use compound assignment with augmented multiplication to make the output of theVar equal 150.
	
	Let theVar = 30


Push the values 2, 4, 6, 8 onto myForLoop using a for loop.



In the function myTest, show if a < 15, the output will be “Less than 15, if not “More than 15.



*/




/*Strings Quiz - Christian Cano's Group

1. True or False: 

    JavaScript automatically converts all object keys to strings.

    Answer:

2. What is the value of: “Bay Valley Tech”[2] ?
    
    Answer:

3. Turn this phrase into a string:

    John said, “I love learning to code”.

    Answer:



4. Fill in the blank to get the length of firstName.

    const firstName = ‘Daniel’;
    let val;
    val = ___________
    console.log(val)

    Answer: 
5. Fill in the blank by getting the substring ‘Brad’ from lastName.

Ethan/Joe Arrays Quiz Section


Joe Bailey made this question,

function arraysQuizQuestion1(){

    //Array Variable representing a set of character mains in the video game Smash Bros
    
    let smashMain = ['Incineroar', 'Dr. Mario', 'Inkling', 'Fox', 'Diddy Kong' ];
    
    //Question 1  How would you go about adding another character to a certain index?
    
            smashMain._______(__,__,"____");
    
            console.log(______)
}
 arraysQuizQuestion1();
};

    

    Joe Bailey made this question,


    function arraysQuizQuestion2(){
    
    //Can anybody in the group legally purchase alcohol?
    //Create a new variable that outputs the correct Boolean value
    
    const groupAge = [16, 17 , 20, 19];
    
    const over21 = groupAge._____(age => age >= 21);
    
    console.log(____);
    
    }
    arraysQuizQuestion2();
};

    //Ethan Parker
    function arraysQuizQuestion3(){
        // Question 3 - Why are the ending values on these 2 arrays merging together and how can we prevent it from happening
        const a = [1,2];
        const b = [3,4,5];
        
        console.log(a + b); // 1,23,4,5
    }
arraysQuizQuestion3();
};
*/

// Gustavo Hernadez's Questions - variables

function arraysQuiz(){
    function arraysQuizQuestion1(){
        
        //What are all the data types supported by javascript?
        
    function arrayQuizQuestion2(){  
        //answer : Undefined, Null, Boolean, String, Symbol, Number, Object
        
        //What are the three ways you may declare a variable?
        //answer: Var, let, const
        
        //Where does javascript go in HTML?
        //answer: <script>
        
        //What is the purpose of a for loop in javascript?
        //A JavaScript for loop executes a block of code as long as a specified condition is true.
        
        //
    }
}
        
        

        
        // Functions Quiz-- Wincy Yu
        
function functionsQuizWY(){

    function functionsQuestion1(){
        //How do you write an if statement to say "if i is not equal to 5"?
        //return "your answer here" and comment this back in
        //see answers document for answer
    };

    function functionsQuestion2(){
        //Write a Javascript array that contains the colors in order: red, green blue. Name the array "colors".
        //return "your answer here" and comment this back in
        //see answers document for answer
    };

    function functionsQuestion3(){
        //Write a function that rounds the number 6.75 to the nearest integer.
        //return "your answer here" and comment this back in
        //see answers document for answer
    };

    function functionsQuestion4(){
        //Write a function that assigns the value 8 to variable a. 
        //return "your answer here" and comment this back in
        //see answers document for answer
    };

    console.log("The answer to question 1 is: ", functionsQuestion1());
    console.log("The answer to question 2 is: ", functionsQuestion2());
    console.log("The answer to question 3 is: ", functionsQuestion3());
    console.log("The answer to question 4 is: ", functionsQuestion4());

}

functionsQuizWY();




/*
How do you write an If statement to execute some code "if i is not equal to 5?""
        if(i not = 5)
        if(i!=5)
        if i=!5 then
        if i not ==5
        
 What is the correct way to write a Javascript array?
        var colors=[“red”, “green”, “blue”]
        var colors = 1: red, 2: green, 3: blue
        Var colors = (1: “red”, 2: “green”, 3: “blue)
        Var colors = “red”, “green”, “blue”
        
How do you round the number 6.75 to the nearest integer?
    Math.round(6.75)
    round(6.75)
    Math.rnd(6.25)
    rnd(6.75)

Which operator is used to assign a value to a variable?
    =
    ==
    ===
    ====

*/








function arraysQuiz(){

    
    function arraysQuizQuestion1(){
        /* */
        
        //Array Variable representing a set of character mains in the video game Smash Bros
        
        let smashMain = ['Incineroar', 'Dr. Mario', 'Inkling', 'Fox', 'Diddy Kong' ];
        
        // Martyn's feedback
        // the wording is unclear
        // does character mean a character like a letter?
        // or are you talking about a smash bros character?
        // in which case you would be adding a new string as an element to the array at the specific index.
        
        //Question 1  How would you go about adding another character to a certain index?
        //Please call methods on the array smashMain so that, you can add a new Super smash brothers character "pikachu" to the array at index #
        
        smashMain._______(__,__,"____");
        // Then console log the newly added super smash brothers character by accessing it in the array with its index
        console.log(______)
    }
    
    function arraysQuizQuestion2(){
        /*
        Question Prompt
        A group of 4 friends have written their ages in an array called "groupAge"
        Assuming that the drinking age is 21, can anyone in the group legally purchase alcohol?
        Create a new variable "over21" that will be set to a boolean.  You want this boolean to correctly answer the above question.
        You will need to use a method that can be called on an Array and provided the given callback function in parenthases */
        
        const groupAge = [16, 17 , 20, 19];
        
        const over21 = groupAge._____(age => age >= 21);
        
        console.log(____);
        
    }
    
    arraysQuizQuestion1();
    arraysQuizQuestion2();
    
};
    
    
    
    
    
    
    
    // Keep this at the bottom of the page
    // Run all Quiz Functions...
    
comparisonOperatorsQuiz()
