jquery-responsive-tables
================

jquery responsive tables

A jQuery plugin to create responsive tables by Gary Hepting

Watch, fork and pull from: [https://github.com/ghepting/fitTables]
Demo available at: [http://garyhepting.com/fitTables-js]



## Dependencies

**[jQuery](http://jquery.com/)**



## Usage

In the &lt;head&gt; of your document, link jQuery, fitTables.js and fitTables.css (optional)

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="./fitTables.js"></script>
<link rel="stylesheet" type="text/css" href="./fitTables.css" />
```

Configure which tables should be initialized with fitTables. You can specify by classname, tag or single table by a unique element id.

```javascript
// basic usage with no customizations
$('table').fitTable();

// custom options configured for a specific table
$('#example1').fitTable({
	max: 45,
	min: 10,
	compressor: 7,
	padding: 3,
	height: '100%',
	adjust_parents: true,
	use_styles: true
});
```



How to use
=========

Options:

`max` &mdash; maximum font size in pixels

`min` &mdash; minimum font size in pixels

`compressor` &mdash; strength of text compressor (how aggressively to shrink the font)

`padding` &mdash; padding (whole integer value -- larger number for more padding)

`height` &mdash; 'auto' to leave heights alone, percentage to apply responsive heights -- '100%' will fit tables (and containers) to viewport height

`adjust_parents` &mdash; if height option specified, force parent elements height to be 100% of viewport

`use_styles` &mdash; apply styles from fitTables.css



Changelog
---------

**Beta v0.1**

 * Public beta release
