function arraysQuizExample(){
    function arraysQuizQuestion1(){
        // Write the prompt for the question
        // Have them complete some code which will result in console.logging something

        // either have a return statement or a console.log for the student to be able to have the answer returned to the console
    }

    function arraysQuizQuestion2(){



      //  Choose the correct comparison operator to alert true, when x is equal to y.
      let x = 10;
      let y = "10";
      // write a comparison of x and y that will return the value of true.
      //Make sure you comment the return statement back in
      // Bonus, can you think of multiple ways of writing expressions that will evaluate to true?
        // return (x !== y);
         return (x == y)
     

    };

    
let questionsArray = [arraysQuizQuestion1(), arraysQuizQuestion2()];
console.log(questionsArray[1]);

    // console.log("The Answer to arraysQuizQuestion1 is: ", );
    // console.log("The Answer to arraysQuizQuestion2 is: ", );
    // arraysQuiz1Question1();
    // arraysQuiz1Question2();

}

//Make some sort of class to organize sub questions?
//Maybe just mainly inherit some core functionality we want to have in each of these question functions

// how do we give questions to this Quiz section object?
// We want this Quiz Section object to be able to store the questions (basically the name of the function)
// We want to be able to programatically console log the results from the questions
class QuizSection{
  constructor(quizTopic, numberOfQuestions){
    this.quizTopic
  }

  logAnswer(){
    
  }

  //quiz topic property
  //method that will console log the asnwer to a question

}

class QuizQuestion{

}

arraysQuizExample();