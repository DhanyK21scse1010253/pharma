// Get the button and the hidden "more" information section
const moreBtn = document.getElementById('moreBtn');
const moreInfo = document.getElementById('moreInfo');

// Add event listener to the button
moreBtn.addEventListener('click', function() {
    // Toggle the visibility of the "more" information
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        moreBtn.innerText = 'Read Less';  // Change button text
    } else {
        moreInfo.classList.add('hidden');
        moreBtn.innerText = 'Read More';  // Change button text
    }
});
