// Smooth Scrolling
$('.nav_bar a, .btn, #footer a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Subscribe Email Input

const subscribe = document.querySelector('.emailSubmission');

subscribe.addEventListener('click', e => {
    if ('click'){
        subscribe.value = '';
    };
})
