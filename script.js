$(() => {
  $("#run-btn").on("click", displayResults);
  $("#reset-btn").on("click", resetResults);
});

const minNum = 1;
const maxNum = 100;
const textOne = "SCHEELS";
const textTwo = ".COM";
const combinedText = textOne + textTwo;

function displayResults() {
  $("#output-list").html("");

  for (let i = minNum; i <= maxNum; i++) {
    let result = "";

    if (i % 3 === 0 && i % 5 === 0) {
      result = combinedText;
    } else if (i % 3 === 0) {
      result = textOne;
    } else if (i % 5 === 0) {
      result = textTwo;
    } else {
      result = i;
    }
    $("#output-list").append(`<li>${result}</li>`);
  }
}

function resetResults() {
  $("#output-list").html("");
}
