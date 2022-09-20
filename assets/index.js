let today = moment().format("ddd, MMM Do YYYY");
let currentHour = moment().hour();
let blocks = document.querySelectorAll(".time-block");
let textBoxes = document.getElementsByClassName("description");

$("#currentDay").html(today);

// saves description and time data to local storage
const saveButton = $(".saveBtn").on("click", function () {
  let time = $(this).parent().data("time");
  let text = $(this).siblings(".description").val();
  localStorage.setItem(time, text);
});

// clears description text on click so new text can be immediately entered
$(".description").on("click", function () {
  $(this).val("");
})


function timeColor() {

  $(".time-block").each(function () {
    let timeSlot = $(this).data("time");

    // depending on the timeslot's position relative to the current hour, styles are changed
    if (timeSlot === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (timeSlot < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }

  });

}

timeColor();


//when page loads, loops through time blocks
$(document).ready(function () {

  for (x = 0; x < blocks.length; x++) {


    var dataTime = $(blocks[x]).attr('data-time');


    //if a localStorage item exists with said data time, then the text is assigned to that value in local storage
    stringDataTime = dataTime.toString();

    if (localStorage.getItem(stringDataTime)) {
      $(textBoxes[x]).text(localStorage.getItem(stringDataTime));
    }
  }
})



