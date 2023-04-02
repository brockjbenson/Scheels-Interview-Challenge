$(() => {
  $("#run-btn").on("click", displayResults);
  $("#reset-btn").on("click", resetResults);
});

const minNum = 1;
const maxNum = 100;
const textOne = "SCHEELS";
const textTwo = ".COM";
const combinedText = textOne + textTwo;
const url =
  "https://www.scheels.com/?gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWc2AFPJ9OKAAwqPkEvgLbPChHBF6gyrt1ILmjktadCpt-rXzkOdtwaAplXEALw_wcB";

function displayResults() {
  $("#output-list").html("");

  for (let i = minNum; i <= maxNum; i++) {
    let result = "";

    if (i % 3 === 0 && i % 5 === 0) {
      result = combinedText;
      $("#output-list").append(
        `<li>
          <a target="_blank" class="combined" href=${url}>${result}</a>
        </li>`
      );
    } else if (i % 3 === 0) {
      result = textOne;
      $("#output-list").append(`<li class="SCHEELS">${result}</li>`);
    } else if (i % 5 === 0) {
      result = textTwo;
      $("#output-list").append(`<li class="COM">${result}</li>`);
    } else {
      result = i;
      $("#output-list").append(`<li class="number">${result}</li>`);
    }
  }
}

function resetResults() {
  $("#output-list").html("");
}
