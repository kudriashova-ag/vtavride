var myCollapsible = document.getElementById('main-menu')
myCollapsible.addEventListener('show.bs.collapse', function () {
  const parentNav = myCollapsible.closest('nav');
  parentNav.classList.remove('navbar-dark');
  parentNav.classList.add('bg-light', 'navbar-light');
});
myCollapsible.addEventListener('hide.bs.collapse', function () {
  const parentNav = myCollapsible.closest('nav');
  parentNav.classList.remove('bg-light', 'navbar-light');
  parentNav.classList.add('navbar-dark');
});



function owlInitialize() {
  if ($(window).width() > 992) {
    $('header .navbar').addClass('navbar-dark').removeClass('bg-light navbar-light')
    $('header .navbar-toggler').addClass('collapsed');
    $('header .navbar-collapse').removeClass('show');
    $('.search-text').attr('placeholder', 'Курорт, город, адрес, номер объекта')
  }
  else { 
    $('.search-text').attr('placeholder', 'Начните вводить')
  }

  if ($(window).width() < 768) {
    $('.advantage').addClass("owl-carousel advantage-slider");
    $('.advantage-slider').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      dots: false,
      items: 1,
      autoWidth: true
    });
  } else {
    $('.advantage-slider').owlCarousel('destroy');
    $('.advantage').removeClass("owl-carousel advantage-slider");
  }

  if ($(window).width() < 1200) {
    $('.owl-offer').addClass("owl-carousel offer-slider");
    $('.offer-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      items: 1,
      centerMode: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        768: {
          items: 3,
        }
      }
    });
  } else {
    $('.offer-slider').owlCarousel('destroy');
    $('.owl-offer').removeClass("owl-carousel offer-slider");
  }

  newsSlider();
  reviewsSlider();


}

$(document).ready(function (e) {
  owlInitialize();
});

$(window).resize(function () {
  owlInitialize();
});


$(document).ready(function (e) {
  $('.owl-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1,
  });
});


$(document).ready(function (e) {




});




function newsSlider() {
  if ($(window).width() < 768) {
    $('.news-slider').addClass("owl-carousel");
    $('.news-slider').owlCarousel({
      items: 1,
      margin: 20,
    });
  }
  else if ($(window).width() > 1200) {
    $('.news-slider').addClass("owl-carousel");
    $('.news-slider').owlCarousel({
      items: 3,
      margin: 20,
      dots: false
    });

    let owl = $('.news-slider');
    owl.owlCarousel();
    $('.news .slider-nav .next').click(function (e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })
    $('.news .slider-nav .prev').click(function (e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
  }
  else {
    $('.news-slider').owlCarousel('destroy');
    $('.news-slider').removeClass("owl-carousel");
  }
}


function reviewsSlider() {

  $('.reviews-slider').owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      768: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 4,
        margin: 20,
      }
    }

  });


  let owl = $('.reviews-slider');
  owl.owlCarousel();
  $('.reviews .slider-nav .next').click(function (e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  })
  $('.reviews .slider-nav .prev').click(function (e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel', [300]);
  })
}