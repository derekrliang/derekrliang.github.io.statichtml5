$(document).ready(function() {
	
	$('.spec-tabs a').on('click', function(e){
		e.preventDefault();
		
		var index = $(this).index();
		
		if ($('.spec-tabs').attr('data-tab') == index) {
			$('.spec-tabs').attr('data-tab', -1);
			$('.spec-content').attr('data-tab', -1);
		} else {
			$('.spec-tabs').attr('data-tab', index);
			$('.spec-content').attr('data-tab', index);
		}
	});

});