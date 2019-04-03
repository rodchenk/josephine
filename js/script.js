
document.addEventListener('DOMContentLoaded', function() {

	var options = {
		constrainWidth: false
	};
	var today = new Date();
	var tommorow = today;
	tommorow.setDate(today.getDate() + 1);

	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems, options);
	
	var selectes = document.querySelectorAll('select');
	var instances = M.FormSelect.init(selectes, {
		classes: 'browser-default small-select'
	})
	$('#date-range').daterangepicker({
		startDate: 	today,
			minDate: 	today,
			endDate: 	tommorow,
		autoApply: 	true,
		 locale: {
            format: 'D. MMMM'
        }
	});
	$('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true
	});

	});