(function() {
  console.log('products!');

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  //data: Qs.stringify(data),
  url: "https://efigence-camp.herokuapp.com/api/data/products",
};

axios(options).then(function(response) {
  console.log('Authenticated', response);
}).catch(function(error) {
  console.log('Error on Authentication');
});


})();
