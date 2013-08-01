jquery-responsive-tables
====

A jQuery plugin to make tabular data responsive.

View the demo at [http://garyhepting.com/jquery-responsive-tables]


Installation:
----

Initialize the plugin:

```html
<script type="text/javascript">
  $(document).ready(function() {
    $('table.responsive').responsiveTables();
  });
</script>
```

Configurations can be added to the markup of each table with simple data attributes:

```html
<table class="responsive" data-min="10" data-max="30" cellpadding="0" cellspacing="0">
```

Fullscreen:

```html
<table class="responsive" data-height="100%" data-min="10" data-max="25" cellpadding="0" cellspacing="0">
```

Complete Options:

```html
<table class="responsive" data-compression="5" data-min="10" data-max="25" data-width="100%" data-height="100%" data-adjust-parents="true" data-styled="true" cellpadding="0" cellspacing="0">
```
