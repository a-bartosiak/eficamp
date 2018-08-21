(function() {
  console.log('products!');

  function getProductsData() {
    const wallets = document.querySelector("#wallets");
    const accounts = document.querySelector("#accounts");
    const bankloans = document.querySelector("#bankloans");
    const deposits = document.querySelector("#deposits");
    const funds = document.querySelector("#funds");

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      //data: Qs.stringify(data),
      url: "https://efigence-camp.herokuapp.com/api/data/products",
    };

    //const products;

    axios(options).then(function(response) {
      console.log('Authenticated', response);
      const products = response.data.content;
      wallets.innerHTML = products[0].amount + " " + products[0].currency;
      deposits.innerHTML = products[1].amount + " " + products[1].currency;
      accounts.innerHTML = products[2].amount + " " + products[2].currency;
      funds.innerHTML = products[3].amount + " " + products[3].currency;
      bankloans.innerHTML = products[4].amount + " " + products[4].currency;
    }).catch(function(error) {
      console.log('Error on Authentication');
    });
  }
  return getProductsData();

})();
