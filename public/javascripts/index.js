$(function () {
  indexInit();
});

const indexInit = () => {
  $("#btnYes").click(function () {
    let numberArray = [];
    $("#numberDiv").empty();

    for (let i = 1; i <= 7; i++) {
      let number = randomLotto();

      while (numberArray.includes(number)) {
        number = randomLotto();
      }

      numberArray.push(number);
    }

    numberArray.forEach(function (number) {
      numberHtml = `<p class="numberClass"><font>${number}</p>`;

      $("#numberDiv").append(numberHtml);
    });

    // p#number1.numberClass 1
    // p#number2.numberClass 2
    // p#number3.numberClass 3
    // p#number4.numberClass 4
    // p#number5.numberClass 5
    // p#number6.numberClass 6
    // p#number7.numberClass 7

    $(".tube").fadeOut("slow");
    $("#numberDiv").css("margin-top", "0px");
    $("#numberDiv").fadeIn(5000);
  });
};

const randomLotto = () => {
  return Math.floor(Math.random() * 45 + 1);
};
