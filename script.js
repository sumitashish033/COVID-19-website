fetch('https://api.covid19api.com/summary')
    .then((apidata) => {
        return apidata.json();
        //console.log(apidata);
    })

    .then((actualdata) => {

            console.log(actualdata);
            //confirm
            const mydata = actualdata.Countries[76].TotalConfirmed;
            document.getElementById('conin').innerHTML = mydata;
            //new cases
             const newcondata = actualdata.Countries[76].NewConfirmed;
            document.getElementById('coninew').innerHTML = newcondata;


            //recover
            const recdata = actualdata.Countries[76].TotalRecovered;
            document.getElementById('revin').innerHTML = recdata;
            //recovered today
            const newrecdata = actualdata.Countries[76].NewRecovered;
            document.getElementById('nrevin').innerHTML = newrecdata;

            //deaths
            const detdata = actualdata.Countries[76].TotalDeaths;
            document.getElementById('detin').innerHTML = detdata;
            //death today
            const newcdetdata = actualdata.Countries[76].NewDeaths;
            document.getElementById('ndetin').innerHTML = newcdetdata;

            //global data 

            const globco = actualdata.Global.TotalConfirmed;
            document.getElementById('globco').innerHTML = globco;
            const newglobco = actualdata.Global.NewConfirmed;
            document.getElementById('newglobco').innerHTML = newglobco;


            //global recover
            const globro = actualdata.Global.TotalRecovered;
            document.getElementById('globro').innerHTML = globro;
            const nglobro = actualdata.Global.NewRecovered;
            document.getElementById('nglobro').innerHTML = nglobro;
            //global deaths

            const globdo = actualdata.Global.TotalDeaths;
            document.getElementById('globdo').innerHTML = globdo;
            const nglobdo = actualdata.Global.NewDeaths;
            document.getElementById('nglobdo').innerHTML = nglobdo;
        })





    
    .catch((error) => {
        console.log(`the error: ${error}`);
    });


/*const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';

const getData = async () => {
  const response = await fetch(`${api}`);
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(response.status);
  }
};

const result = getData();
result
  .then((data) => {
    let date = Object.keys(data.cases);
    let total = Object.values(data.cases);
    let deaths = Object.values(data.deaths);
    let recovered = Object.values(data.recovered);

    var ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'Total Cases',
            data: total,
            borderColor: 'rgba(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false,
          },
          {
            label: 'Deaths',
            data: deaths,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Numbers in Thousands',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date(DD/MM/YYYY)',
              },
            },
          ],
        },
        
      },
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });*/




  //SCROLL OPTIONS















    $(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});