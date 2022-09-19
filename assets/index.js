let today = moment().format("ddd, MMM Do YYYY");
let currentHour = moment().hour();
let blocks = $(".time-block");
let textBoxes = document.getElementsByClassName("description");
console.log(currentHour);

$("#currentDay").html(today);

const saveButton = $(".saveBtn").on("click", function () {
    
    let time = $(this).parent().data("time");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
    console.log(time, text);
});

$(".description").on("click", function() {
    $(this).val("");
})
    

function timeColor () {
   
    $(".time-block").each(function() {
        let timeSlot = $(this).data("time");

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

for (x = 0; x < blocks.length; x++) {

    $(blocks).eq(x).text(localStorage.content);

}