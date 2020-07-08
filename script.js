var dailyTasks = []
var localStorage = JSON.parse(localStorage.getItem('inputs'))
var currentHour = parseInt(moment().format("HH")) - 8;
var dailyHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeSlotId = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var militaryTime = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"];
var saveButton = document.querySelector('#saveButton');

// Display current time & create a dynamic variable
var displayCurrentTime = function () {
    document.getElementById("datetime")
        .innerHTML = moment().format('MMMM Do YYYY, HH:mm:ss a');
}
setInterval(displayCurrentTime, 1000);

// Save button
$('.saveButton').on('click', saveActivity)

function saveActivity(event) {

    for (var j = 0; j < timeSlotId.length; j++) {
        var helpfulMath = j + 8
        var inputVal = $('#' + helpfulMath).val();
        console.log($('#' + helpfulMath).val())
        localStorage.setItem(helpfulMath + "", JSON.stringify(inputVal));
    }
}

// Render Color, use an if statement based on current hour compared to daily hours.
for (var i = 0; i < timeSlotId.length; i++) {
    //console.log(currentHour)
    // console.log(dailyHours[i])
    // console.log((currentHour == dailyHours[i]))
    // console.log(currentHour < dailyHours[i]);
    // console.log(i)
    var helpfulMath = i + 8
    // IF the moment.js time is equal to the daily hour, color the background orange and make the input unactionable.
    if (currentHour == dailyHours[i]) {
        $('#' + helpfulMath).addClass('now');
        $('#' + helpfulMath).prop('disabled', true);
    }
    // IF the moment.js time is less than the daily hour, color the background green

    else if (currentHour < dailyHours[i]) {
        $('#' + helpfulMath).addClass('forward');
        $('#' + helpfulMath).prop('enabled', true);
    }
    // IF the moment.js time is less than the daily hour, color the background gray and make the input inactionable.
    else {
        $('#' + helpfulMath).addClass('before');
        $('#' + helpfulMath).prop('disabled', true);
    }
}


// Render saved cells
for (var k = 0; k < timeSlotId.length; k++) {
    var helpfulMath = k + 8
    var dataStored = (localStorage.getItem(helpfulMath + ""));
    console.log(dataStored)
    // this code leaves quotes.
    //var newValue = dataStored.replace('"', '');
    trimmedValue = dataStored.slice(1,-1);
    $('#' + helpfulMath).val(trimmedValue);
}

