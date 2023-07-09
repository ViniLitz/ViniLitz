let fator = 0;
let calculonumbers = [""];
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const raiz = document.querySelector(".raiz");
const clean = document.querySelector(".clean");
const apagar = document.querySelector(".apagar");
const porcentagem = document.querySelector(".porcentagem");
const divisao = document.querySelector(".divisao");
const multiplicacao = document.querySelector(".multiplicacao");
const mais = document.querySelector(".mais");
const menos = document.querySelector(".menos");
const calculo = document.querySelector(".calculo");
const igual = document.querySelector(".igual");

function numberbtns() {
  num1.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "1";
  });

  num2.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "2";
  });

  num3.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "3";
  });

  num4.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "4";
  });

  num5.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "5";
  });

  num6.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "6";
  });

  num7.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "7";
  });

  num8.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "8";
  });

  num9.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "9";
  });

  num0.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "0";
  });
}
numberbtns();

function specialbtns() {
  apagar.addEventListener("click", () => {
    let calculo2 = calculo.innerHTML.slice(0, -1);
    calculo.innerHTML = calculo2;
  });

  clean.addEventListener("click", () => {
    calculo.innerHTML = "";
  });

  mais.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "+";
    fator = parseInt(fator, 10) + parseInt(calculo.innerHTML, 10);
    calculo.innerHTML = "";
    console.log(fator);
  });

  menos.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "-";
    fator = parseInt(fator, 10) - parseInt(calculo.innerHTML, 10);
    calculo.innerHTML = "";
    console.log(fator);
  });

  multiplicacao.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "×";
    fator = parseInt(fator, 10) * parseInt(calculo.innerHTML, 10);
    calculo.innerHTML = "";
    console.log(fator);
  });

  divisao.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "÷";
    fator = parseInt(fator, 10) / parseInt(calculo.innerHTML, 10);
    calculo.innerHTML = "";
    console.log(fator);
  });

  igual.addEventListener("click", () => {});
}
specialbtns();
