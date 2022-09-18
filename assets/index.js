let today = moment().format("ddd, MMM Do YYYY");
let currentHour = moment().hour();

$("#currentDay").html(today);

const saveButton = $(".saveBtn").on("click", function () {
    console.log(this);
    let time = $(this).parent().attr("id");
    let text = $(this).siblings("description").val();
});

function timeColor () {
   
    $(".time-block").each(function () {
        let blockTime = parseInt($(this).attr("data-value").parseInt());
      
        if (blockTime === currentTime) {
          $(this).addClass("present");
          $(this).removeClass("future");
          $(this).removeClass("past");
        } else if (blockTime < currentTime) {
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

// local storage