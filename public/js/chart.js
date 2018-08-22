(function() {
  console.log('chart!');

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  //data: Qs.stringify(data),
  url: "https://efigence-camp.herokuapp.com/api/data/chart",
};

axios(options).then(function(response) {
  console.log('Authenticated', response);
  const data = response.data.content;
  console.log(data);

  let ctx = document.getElementById("myChart").getContext('2d');
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: [data[0].date, data[1].date, data[2].date, data[3].date, data[4].date, data[5].date, data[6].date, data[7].date, data[8].date, data[9].date],
          datasets: [{
              label: 'income',
              data: [data[0].amount, data[1].amount, data[2].amount, data[3].amount, data[4].amount, data[5].amount, data[6].amount, data[7].amount, data[8].amount, data[9].amount],
              backgroundColor: [
                  'rgba(0, 198, 219, 0.2)',
              ]
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

}).catch(function(error) {
  console.log('Error on Authentication');
});





})();
