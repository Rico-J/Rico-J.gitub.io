const slides = [
    ["https://youtube.com/embed/7nmfn4aSjCw?si=5X1F8M1xzZ3df7hI", "https://youtube.com/embed/CYYJalqrU_s?si=GBkSu_WlVfwzuhTm", "https://www.youtube.com/embed/5RoLAfxoUWY?si=KJTMdAn8U2orN2lC"],
    ["lifeimages/xmasfamily.jpg", "lifeimages/IMG_fam1.jpg", "lifeimages/IMG_fam2.jpg", "lifeimages/IMG_fam3.jpg"],
    ["lifeimages/concerts1.jpg", "lifeimages/IMG_con1.jpg", "lifeimages/IMG_con2.jpg", "lifeimages/IMG_con3.jpg", "lifeimages/IMG_con4.jpg", "lifeimages/IMG_con5.jpg", "lifeimages/IMG_con6.PNG", "lifeimages/IMG_con7.jpg", "lifeimages/IMG_con8.PNG"],
    ["lifeimages/adventures.jpg", "lifeimages/IMG_adv1.jpg", "lifeimages/IMG_adv2.jpg", "lifeimages/IMG_adv3.jpg", "lifeimages/IMG_adv4.jpg", "lifeimages/IMG_adv5.jpg", "lifeimages/IMG_adv6.jpg"]
];

    // arrays for each slide tracked. 
const currentIndexes = [0, 0, 0, 0];


    // Displaying the slides with a template literal expression. 
function showSlide(index) {
    const container = document.querySelector(`.slideshow[data-index="${index}"]`);
    const type = container.dataset.type;
    const currentSrc = slides[index][currentIndexes[index]];

    if (type === "video") {
      document.getElementById(`videoSlide${index}`).src = currentSrc;
    } else {
      document.getElementById(`imageSlide${index}`).src = currentSrc;
    }
  }

  // Next slide function.
  function nextSlide(index) {
    currentIndexes[index]++;
    if (currentIndexes[index] >= slides[index].length) currentIndexes[index] = 0;
    showSlide(index);
  }

  // Previous slide function.
  function prevSlide(index) {
    currentIndexes[index]--;
    if (currentIndexes[index] < 0) currentIndexes[index] = slides[index].length - 1;
    showSlide(index);
  }
  // initialize the page load for both image and video slides. 
  window.onload = function () {
    for (let i = 0; i < slides.length; i++) {
      showSlide(i);
    }
  };