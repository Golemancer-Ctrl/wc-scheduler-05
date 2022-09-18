let today = moment().format("ddd, MMM Do YYYY");
let currentHour = moment().hour();
let blocks = $('.time-block.description');
console.log(currentHour);

$("#currentDay").html(today);

const saveButton = $(".saveBtn").on("click", function () {
    console.log(this);
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
});

function timeColor () {
   
    $(".time-block").each(function() {
        let timeSlot = $(this).data("value");

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

    $(blocks[x].val(localStorage.getItem("")))

}