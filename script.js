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
    var currentHour = dayjs().hour();

for (var i = 0; i < timeBlock.length; i++) {
    var blockHour = parseInt(hour.eq(i).text().trim());

    if (currentHour > blockHour) {
        textArea.eq(i).addClass("past");
    } else if (currentHour < blockHour) {
        textArea.eq(i).addClass("future");
    } else {
        textArea.eq(i).addClass("present");
    }
}

    
    //load saved events from local storage
    var savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents !== null) {
        for (var i = 0; i < savedEvents.length; i++) {
            textArea[i].value = savedEvents[i];
        }
    }
    //save events to local storage
    saveBtn.click(function () {
        var events = [];
        for (var i = 0; i < textArea.length; i++) {
            events.push(textArea[i].value);
        }
        localStorage.setItem("events", JSON.stringify(events));
    });
    //Save button click event
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        
    });


}); 







