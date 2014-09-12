console.log("script.js");

var devTCMap = {};
var devTitles = document.getElementsByClassName('dev-title');
var devContents = document.getElementsByClassName('dev-content');

for (var i = 0; i < devTitles.length; i++) {
	devTCMap[devTitles[i].getAttribute("hash")] = devContents[i];
	devTitles[i].addEventListener('click', function() {
		if (devTCMap[this.getAttribute("hash")].classList.contains("hide-content")) {
			// Reset the other ones
			for (var j = 0; j < devTitles.length; ++j) {
				var title = devTitles[j];
				if (title == this) {
					this.className = "dev-title dev-title-active";
					devTCMap[this.getAttribute("hash")].className = "dev-content show-content"
				}
				else {
					title.className = "dev-title";
					devTCMap[title.getAttribute("hash")].className = "dev-content hide-content"
				}
			}
		}
		else if (devTCMap[this.getAttribute("hash")].classList.contains("show-content")) {
			this.className = "dev-title";
			devTCMap[this.getAttribute("hash")].className = "dev-content hide-content";
		}
	});
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});