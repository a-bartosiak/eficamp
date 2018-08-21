(function() {
  console.log('budget!');

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  //data: Qs.stringify(data),
  url: "https://efigence-camp.herokuapp.com/api/data/budget",
};

axios(options).then(function(response) {
  console.log('Authenticated', response);
  const budget = response;
}).catch(function(error) {
  console.log('Error on Authentication');
});

console.log(budget);
})();
