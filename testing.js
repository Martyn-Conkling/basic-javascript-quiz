//links I was looking at
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in



//Solution 1
//Create a logAnswer() function
//after every question call the logAnswer() function
function logAnswer(givenFunc){
    console.log("The answer to " + (givenFunc.name.toString()) + " is: ", givenFunc());
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
  logAnswer(arraysQuizQuestion2());
  
  
  
  //solution 2 
  //Have the quiz questions be inside of an object
  //iterate over the object using for .. in loops to log all of the answers
  const basicJavaScriptQuiz = {
  
  "section1": {
  
  topic: "variables",
  authors: ["Bob", "Joe"],
  questions:{
  
  "Question 1": function(){
    //  Choose the correct comparison operator to alert true, when x is equal to y.
    let x = 10;
    let y = "10";
    // write a comparison of x and y that will return the value of true.
    //Make sure you comment the return statement back in
    // Bonus, can you think of multiple ways of writing expressions that will evaluate to true?
    // return (x !== y);
     return (x == y)
  
  
  }
  
  }
  
  }//End of Section 1
  }//End of Quiz
  
  
  //Iterates over all Sections
  for(const section in basicJavaScriptQuiz){
    //Iterates over all Questions for each section
    console.log(section)
    for(const question in section){
      console.log(question);
      // logAnswer(question);
  
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function arraysQuizExample(){
      function arraysQuizQuestion1(){
          // Write the prompt for the question
          // Have them complete some code which will result in console.logging something
  
          // either have a return statement or a console.log for the student to be able to have the answer returned to the console
      }
  
     
  
    // logAnswer(arraysQuizQuestion2);
  // let questionsArray = [arraysQuizQuestion1(), arraysQuizQuestion2()];
  // console.log(questionsArray[1]);
  
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
    constructor(quizTopic, ...questionFunctions){
      this.quizTopic = quizTopic;
      this.numberOfQuestions = questionFunctions.length;
      this.questionsArray = questionFunctions;
    }
  
    logAllAnswers(){
      for(let i = 0; i < this.numberOfQuestions; i++){
        //console.log("The answer to question " + (this.questionsArray[i].name.toString()) + " is: ", this.questionsArray[i]());
      }
      
    }
  
    
    //quiz topic property
    //method that will console log the asnwer to a question
  
  }
  
  
  
  
  
  // let answers = new QuizSection("test", arraysQuizQuestion2());
  // answers.logAllAnswers();
  //arraysQuizExample();