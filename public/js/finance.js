(function() {
  console.log('Witamy finance!');

  // const data = {
  //   code: '12345'
  // }
  //
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded'
  //   },
  //   data: Qs.stringify(data),
  //   url: "https://efigence-camp.herokuapp.com/api/enter",
  // };
  //
  // axios(options).then((res) => {
  //   console.log(res)
  // });

  function getFinanceData() {
      const balance = document.querySelector("#balance");
      const availableFunds = document.querySelector("#availableFunds");
      const scheduledPayments = document.querySelector("#scheduledPayments");


    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      //data: Qs.stringify(data),
      url: "https://efigence-camp.herokuapp.com/api/data/summary",
    };

    const finance = {};

    axios(options).then(function(response) {
      console.log('Authenticated', response);
      const finance = response.data.content[0];
      balance.innerHTML = finance.balance;
      availableFunds.innerHTML = finance.funds;
      scheduledPayments.innerHTML = finance.payments;
      //console.log(finance);
    }).catch(function(error) {
      console.log('Error on Authentication');
    });
  }
  return getFinanceData();


})();
