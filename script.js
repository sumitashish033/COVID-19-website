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