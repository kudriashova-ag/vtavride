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

