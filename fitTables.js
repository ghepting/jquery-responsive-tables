$(document).ready(function() {

	function fitTable() {
		var columns=0, rows=0, max=60, min=10;
		$('table tr:first-child th, table tr:first-child td').each(function() { columns++; });
		$('table tr').each(function() { rows++; });
		$('table tr th, table tr td').css('width',Math.floor(100/columns)+'%');
		$('table tr th, table tr td').css('height',Math.floor(100/rows)+'%');
		$('table tbody tr th, table tbody tr td').css('font-size',
			Math.min(
				Math.max(
					Math.round(
						Math.min( // smallest value of width or height
							$('table tbody tr td').outerHeight(true), // cell height
							$('table tbody tr td').outerWidth(true)/5 // keep it real with a divisor
						)/2 // divide by 2 for cell padding
					) // round to nearest whole number
				,min) // smallest allowed font size
			,max) // largest allowed font size
		+'px');
	}
	
	fitTable();
	
	$(window).on('resize', function() {
		fitTable();
	});
	
});