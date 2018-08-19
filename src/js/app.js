(function() {
  console.log('Witamy na Campie 2018! ');

  const button = document.querySelector("#button");
  const input = document.querySelector(".clientNo");
  const result = document.querySelector(".result");
  const loginFirstStep = document.querySelector("#loginFirstStep");
  const loginSecondStep = document.querySelector("#loginSecondStep");
  const closeButton = document.querySelector('.close');
  const selectOther = document.querySelector('.selectOther');
  const passwordInput = document.querySelector('.clientPassword');
  const buttonPassword = document.querySelector('.buttonPassword');

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

  selectOther.addEventListener("click", (event) => {
    event.preventDefault();
    loginSecondStep.style.display = "none";
    loginFirstStep.style.display = "flex";
    input.value = "";
  })


buttonPassword.addEventListener("click", (event) => {
  event.preventDefault();

  const data = {
    login: input.value,
    password: passwordInput.value
  }

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(data),
    url: "https://efigence-camp.herokuapp.com/api/login",
  };

  // axios(options).then((res) => {
  //   console.log(res)
  // });

  axios(options).then(function(response) {
    console.log('Authenticated');
    window.location.href = "/dashboard.html";
  }).catch(function(error) {
    console.log('Error on Authentication');
  });
  });

  
})();
