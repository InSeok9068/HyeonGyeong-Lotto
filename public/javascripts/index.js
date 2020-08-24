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

    $(".tube").fadeOut("slow");
    $("#numberDiv").css("margin-top", "0px");
    $("#numberDiv").fadeIn(5000);
  });
};

const randomLotto = () => {
  return Math.floor(Math.random() * 45 + 1);
};
