(function() {
  console.log('Witamy Dashboard! ');

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

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  //data: Qs.stringify(data),
  url: "https://efigence-camp.herokuapp.com/api/data/summary",
};

axios(options).then(function(response) {
  console.log('Authenticated', response);
}).catch(function(error) {
  console.log('Error on Authentication');
});


})();
