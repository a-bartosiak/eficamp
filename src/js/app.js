(function(){
    console.log('Witamy na Campie 2018! ');

    const button = document.querySelector("#button");
    const input = document.querySelector(".clientNo");
    const result = document.querySelector(".result");
    const loginFirstStep = document.querySelector("#loginFirstStep");
    const loginSecondStep = document.querySelector("#loginSecondStep");
    const closeButton = document.querySelector('.close');

    button.addEventListener("click", (event) => {
      event.preventDefault();
      result.innerText = input.value;
      loginSecondStep.style.display = "block";
      loginFirstStep.style.display = "none";
    })


    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      loginSecondStep.style.display = "none";
      loginFirstStep.style.display = "flex";
      input.value = "";
    })


})();
