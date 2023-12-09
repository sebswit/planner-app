//Pseudo code

//Display current date and time
// Import for dayjs library
$(document).ready(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm A"));


    //Create time blocks
    var timeBlock = $(".time-block");
    var hour = $(".hour-display");
    var textArea = $(".description");
    var saveBtn = $(".saveBtn");

    

    //check if time block is in the past, present or future
    for (var i = 0; i < timeBlock.length; i++) {
        
        if (dayjs().hour() > timeBlock[i].id) {
            textArea[i].classList.add("past");
        } else if (dayjs().hour() < timeBlock[i].id) {
            textArea[i].classList.add("future");
        } else {
            textArea[i].classList.add("present");
        }
    }
}); 


//Create time blocks
// use loop to create time blocks
//check if time block is in the past, present or future
//load saved events from local storage
//save events to local storage

// create time blocks
//Save button click event