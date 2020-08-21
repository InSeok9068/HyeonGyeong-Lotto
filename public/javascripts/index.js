$(function () {
  indexInit();
});

const indexInit = () => {
  $("#btnYes").click(function () {
    let numberArray = [];

    for (let i = 1; i <= 7; i++) {
      let number = randomLotto();

      while (numberArray.includes(number)) {
        number = randomLotto();
      }

      numberArray.push(number);
    }

    console.log(numberArray);
  });
};

const randomLotto = () => {
  return Math.floor(Math.random() * 45 + 1);
};
