/*
jQuery fitTables: https://github.com/ghepting/fitTables
Author: Gary Hepting
*/

(function($){
	$.fn.fitTable = function(opts) {
		_opts = { // defaults
			max: 60, // maximum font size
			min: 10, // minimum font size
			compressor: 5, // strength of text compressor
			padding: 2, // padding (whole integer value -- larger number for more padding)
			height: 'auto', // '100%' will fit tables (and containers) to viewport height as well
			adjust_parents: true, // if height specified, force parent elements to be height 100%
			use_styles: true // apply styles from fitTables.css
		};
		
		opts = $.extend(_opts, opts);
		
		var columns=0, rows=0;
		
		return this.each(function(){
			
			// Store the object
			var $this = $(this);
			
			var fitTables = function(columns,rows) {
				if(!$this.hasClass('fitTable') && opts.use_styles) {
					$this.addClass('fitTable');
				}
				if(opts.height != 'auto') {
					if(opts.adjust_parents) {
						$this.parents().each(function() {
							$(this).css('height','100%');
						});
					}
					$this.css('height',opts.height);
				}
				$('tr:first-child th, tr:first-child td', $this).each(function() { columns++; }); // count columns
				$('tr', $this).each(function() { rows++; }); // count rows
				$('tr th, tr td', $this).css('width',Math.floor(100/columns)+'%'); // set column widths
				$('tr th, tr td', $this).css('height',Math.floor(100/rows)+'%'); // set row heights
				$('tbody tr th, tbody tr td', $this).css('font-size',
					Math.min(
						Math.max(
							Math.round(
								Math.min( // get smallest value of width or height
									$('tbody tr td', $this).outerHeight(true), // get cell height
									$('tbody tr td', $this).outerWidth(true)/opts.compressor // get row width, but keep it real with a divisor
								)/opts.padding // divide by 2 to maintain some cell padding
							) // round to nearest whole number
						,opts.min) // constrain to smallest allowed font size
					,opts.max) // constrain to largest allowed font size
				+'px');
			};
			
			// initialize
			fitTables(columns, rows);
			
			// adjust on viewport resize
			$(window).on('resize', fitTables);
			
		});
	};
})(jQuery);