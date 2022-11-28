//calculate function is assigned a const variable
const calculate = () => {

   //assign ttotal and gardes a let variable
    let ttotal = document.querySelector("#ttotal").value;
    let grades = "";
    
    //total grades assigned a let variable
    let totalgrades =
        parseFloat(ttotal) ;
    
    //percentage to equal total grades
    let percentage = totalgrades ;
    //A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
    if (percentage <= 100 && percentage >= 79) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 49) {
        grades = "C";
    } else if (percentage <= 49 && percentage >= 40) {
        grades = "D";
    } else if (percentage <= 40 && percentage >= 0) {
        grades = "E";
    } else {
        grades = "Invalid Mark";
    }
    //ensures the place holder is not empty
    if (ttotal == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
        //place holder for displaying your grade
    document.querySelector(
        "#showdata"
    ).innerHTML =
        ` Out of 100 your total is ${totalgrades}
        and percentage is ${percentage}%. <br>
        Your grade is ${grades}.`;
        
    
    }
    };

    

    