(function(){
    console.log('Witamy na Campie 2018! ');

    const button = document.querySelector("#button");
    const input = document.querySelector(".clientNo");
    const result = document.querySelector("#result");
    const password = document.querySelector(".clientPassword");
    const closeButton = document.querySelector('.close');
    const passwordButton = document.querySelector('.buttonPassword');

    button.addEventListener("click", (event) => {
      event.preventDefault();
      result.innerText = input.value;
      input.style.display = "none";
      button.style.display = "none";
      result.style.display = "block";
      password.style.display = "block";
      closeButton.style.display = "block";
      passwordButton.style.display = "block";
    })


    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      button.style.display = "block";
      input.style.display = "block";
      closeButton.style.display = "none";
      password.style.display = "none";
      result.style.display = "none";
      passwordButton.style.display = "none";
      input.value = "";
    })


})();
