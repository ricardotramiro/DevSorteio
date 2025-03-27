function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  if (min >= max) {
    alert("O valor minimo tem que ser Menor que o valor máximo");
  } else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
  }
}
