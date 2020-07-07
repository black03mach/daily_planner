var dailyTasks = []
var localStorage = JSON.parse(localStorage.getItem('inputs'))
var currentHour = parseInt(moment().format("HH"));
var dailyHours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeSlotId = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var militaryTime = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"];
console.log(currentHour);



// Display current time & create a dynamic variable
var displayCurrentTime = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, HH:mm:ss a');
}
setInterval(displayCurrentTime, 1000);

// Save button
$("button").on("click", function() {
    event.preventDefault();

})

// Render Color, use an if statement based on current hour compared to daily hours.
for (var i = 0 ; i < timeSlotId.length ; i++) {
    // IF the moment.js time is equal to the daily hour, color the background orange and make the input unactionable.
    if (currentHour === dailyHours) {
        document.getElementById(timeSlotId).style.backgroundColor = "#FF7F50"
        document.getElementById(timeSlotId).attr("disabled",false);
    }
    // IF the moment.js time is less than the daily hour, color the background green
    else if (currentHour < dailyHours) {
        document.getElementById(timeSlotId).style.backgroundColor = "#32CD32"
        document.getElementById(timeSlotId).attr("disabled",true);
    }
    // IF the moment.js time is less than the daily hour, color the background gray and make the input inactionable.
    else {
        document.getElementById(timeSlotId).style.backgroundColor = "#808080"
        document.getElementById(timeSlotId).attr("disabled",false);
    }
}

// Render saved cells
function renderCells(){

}