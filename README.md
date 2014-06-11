jquery-smartscroller-js
=======================

__A jQuery Plugin to scroll smoothly__

## Demo

- [Demo Page](https://dl.dropboxusercontent.com/u/21601359/140611_smartscrollerjs/index.html)

## Usage

```html
<head>
<script src="jquery.sj"></script>
<script src="jquery.smartscroller.js"></script>
<script>
$(function() {
	$('.smartscroll').smartscroller();
});
</script>
</head>
<body>
	<p><a href="#section01">Smartscroll</a></p>
	.
	.
	.
	<div id="section01">HogeHoge</div>
</body>
```

## Options

- `easing`[string]: Easing name. (require [jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/))
- `offsetMinus`[number]: 指定したpx分だけスクロール位置を上にずらす
- `speed`[number]: Scroll speed.
- `completeScroll`[function]: A function is called after scrolling.

## Depends

- jQuery.js

## Browser Support

- IE8+
- Google Chrome(win/mac)
- Firefox(win/mac)
- Safari(win)

## License

MIT License.

## Copyright

©Sato Daiki. ([@Satoh_D](https://twitter.com/Satoh_D))
