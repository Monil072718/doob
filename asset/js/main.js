// slider-js-start


// slider-js-end

// header-sticky-start
$(window).scroll(function () {
    if (scrollY > 100) {
        $(".scroll-top").fadeIn(1000);
        $(".scroll-top").click(function () {
            $(window).scrollTop(0);
        });
        $("header").addClass("head-active");

    } else {
        $("header").removeClass("head-active");
        $(".scroll-top").fadeOut();
    }
});

// header-sticky-end


// color-switch-start
$('.color-btn').click(function () {
    $('.fa-gear').toggleClass('rotate');
    $('.switch').slideToggle(1000);
    $('.switch').css('.rotate')
});
$(".color1").click(function () {
    $(":root").css("--primary-gradient", "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)");

});

$(".color2").click(function () {
    $(":root").css("--primary-gradient", "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)");
});
$(".color3").click(function () {
    $(":root").css("--primary-gradient", "linear-gradient(to right, #00416a, #799f0c, #ffe000)");
});
$(".color4").click(function () {
    $(":root").css("--primary-gradient", "linear-gradient(90deg, #d53369 0%, #daae51 100%)");
});
$('.head-icon').click(function () {
    $('.logoo').attr('src', './asset/images/logo-dark.png')
    $('.head-icon').css('display', 'none')
    $('.head-iconn').css('display', 'block')
    $(':root').css('--color-black', '#fff')
    $(':root').css('--color-grey', '#000')
    $(':root').css('--color-whiteeee', '#000')
});
$('.head-iconn').click(function () {
    $('.logoo').attr('src', './asset/images/logo.png')
    $('.head-iconn').css('display', 'none')
    $('.head-icon').css('display', 'block')
    $(':root').css('--color-black', '#000')
    $(':root').css('--color-grey', '#fff')
});
// color-switch-end

// counter js start
$('.counting').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {

            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});
// counter js end

// pointer js start

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// pointer js end

// particle js start
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#f00",
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 6,
        random: {
          enable: true,
          minimumValue: 3
        },
        animation: {
          enable: true,
          speed: 5,
          minimumValue: 3,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        warp: true
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        resize: true
      }
    },
    retina_detect: true,
    background: {
      color: "#000"
    }
  });
    // particle js end