const image = document.getElementById('girl1');
const hoverImage = new Image();
hoverImage.src = 'web1_2.png';

image.addEventListener('mouseover', function() {
  image.src = hoverImage.src;
	image.style.zIndex = '99';
	document.getElementById("pagename").innerHTML = "About Me";
	document.getElementById("pagename").style.fontSize = "40px";
	
});

image.addEventListener('mouseout', function() {
  image.src = 'web1_1.png';
	image.style.zIndex = '999';
	document.getElementById("pagename").innerHTML = "Go to ...";
	document.getElementById("pagename").style.fontSize = "1.5em";
});

image.addEventListener('click', function() {
  window.location.href = '#a';
});// JavaScript Document



const teddyimg = document.getElementById('teddy1');
const hoverteddyimg = new Image();
hoverteddyimg.src = 'web2_2.png';

teddyimg.addEventListener('mouseover', function() {
  teddyimg.src = hoverteddyimg.src;
	teddyimg.style.zIndex = '999';
	document.getElementById("pagename").innerHTML = "Extra-curricular <br> Activity";
	document.getElementById("pagename").style.fontSize = "35px";
	
});

teddyimg.addEventListener('mouseout', function() {
  teddyimg.src = 'web2_1.png';
	teddyimg.style.zIndex = '999';
	document.getElementById("pagename").innerHTML = "Go to ...";
	document.getElementById("pagename").style.fontSize = "1.5em";
});

teddyimg.addEventListener('click', function() {
  window.location.href = '#d';
});// JavaScript Document




const hatimg = document.getElementById('hat1');
const hoverhatimg = new Image();
hoverhatimg.src = 'web3_2.png';

hatimg.addEventListener('mouseover', function() {
  hatimg.src = hoverhatimg.src;
	hatimg.style.transform = 'scale(1.1) translateY(-10px)';
	hatimg.style.zIndex = '999';
	document.getElementById("pagename").innerHTML = "Education";
	document.getElementById("pagename").style.fontSize = "40px";
	
});

hatimg.addEventListener('mouseout', function() {
  hatimg.src = 'web3.png';
	hatimg.style.transform = 'scale(1) translateY(0px)';
	hatimg.style.zIndex = '999';
	document.getElementById("pagename").innerHTML = "Go to ...";
	document.getElementById("pagename").style.fontSize = "1.5em";
});

hatimg.addEventListener('click', function() {
  window.location.href = '#b';
});// JavaScript Document



const bookImage = document.getElementById('book');
bookImage.addEventListener('mouseover', function() {
      bookImage.style.transform = 'scale(1.2) translateY(-10px)';
	document.getElementById("pagename").innerHTML = "Experience";
	document.getElementById("pagename").style.fontSize = "40px";
      
    });

    bookImage.addEventListener('mouseout', function() {
      bookImage.style.transform = 'scale(1) translateY(0px)';
		document.getElementById("pagename").innerHTML = "Go to ...";
	document.getElementById("pagename").style.fontSize = "1.5em";
      
    });

bookImage.addEventListener('click', function() {
  window.location.href = '#c';
});


const drawimg = document.getElementById('draw');
const hoverdrawimg = new Image();
hoverdrawimg.src = 'web5.png';

drawimg.addEventListener('mouseover', function() {
  drawimg.src = hoverdrawimg.src;
	drawimg.style.transform = 'scale(1.1) translateY(-10px)';
	document.getElementById("pagename").innerHTML = "My Work";
	document.getElementById("pagename").style.fontSize = "40px";
	
	
});

drawimg.addEventListener('mouseout', function() {
  drawimg.src = 'web5_1.png';
	 drawimg.style.transform = 'scale(1) translateY(0px)';
	document.getElementById("pagename").innerHTML = "Go to ...";
	document.getElementById("pagename").style.fontSize = "1.5em";
});

drawimg.addEventListener('click', function() {
  window.location.href = '#f';
});// JavaScript Document



(function () {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselContainer = carousel.querySelector('.carousel-container');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const dots = carousel.querySelectorAll('.dot');

    let translateX = 0;
    let step = carouselContainer.clientWidth;
    const totalSlides = carouselContainer.children.length;
    let currentSlide = 0;

    function slideToSlide(slideIndex) {
      if (slideIndex < 0 || slideIndex >= totalSlides) return;

      translateX = -slideIndex * step;
      carouselContainer.style.transform = `translateX(${translateX}px)`;

      dots.forEach((dot) => {
        dot.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');

      currentSlide = slideIndex;
    }

    function slidePrev() {
      if (currentSlide === 0) {
        slideToSlide(totalSlides - 1);
      } else {
        slideToSlide(currentSlide - 1);
      }
    }

    function slideNext() {
      if (currentSlide === totalSlides - 1) {
        slideToSlide(0);
      } else {
        slideToSlide(currentSlide + 1);
      }
    }

    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', function () {
        slideToSlide(index);
      });
    });

    // Resize the carousel on window resize
    window.addEventListener('resize', () => {
      step = carouselContainer.clientWidth;
      slideToSlide(currentSlide);
    });
  });
})();