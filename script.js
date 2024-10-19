function shopNow() {
    // alert("Shop Now button clicked! Redirecting to the shop...");
    window.location.href = 'Medicines.html';
    // You can redirect to the shop page or perform another action here.
}
const imageWrapper = document.getElementById('image-wrapper');
const scrollLeftBtn = document.getElementById('scroll-left-btn');
const scrollRightBtn = document.getElementById('scroll-right-btn');

// Width of one image + margin
const imageWidth = document.querySelector('.slider-image').clientWidth + 20;
let scrollPosition = 0;

// Scroll Left Button Event
scrollLeftBtn.addEventListener('click', function() {
    scrollPosition = Math.min(scrollPosition + imageWidth, 0);
    imageWrapper.style.transform = `translateX(${scrollPosition}px)`;
});

// Scroll Right Button Event
scrollRightBtn.addEventListener('click', function() {
    const maxScroll = -(imageWrapper.scrollWidth - imageWrapper.clientWidth);
    scrollPosition = Math.max(scrollPosition - imageWidth, maxScroll);
    imageWrapper.style.transform = `translateX(${scrollPosition}px)`;
});
