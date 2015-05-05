<h1>Simple Lightbox / Modal</h1>

<p>
Just a simple Jquery plugin for making one or more Modal / Lightbox windows in your project. Nothing fancy :D
</p>

<h2>INSTRUCTIONS:</h2>

<p>
Insert Jquery and the two files of this project, modal.css and modal.js, in the HEAD tag of your HTML
</p>

<p>
```
	<link rel="stylesheet" href="modal.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="modal.js"></script>
```
</p>

<p>
```
	<script>
		(function($) {
			$(document).ready(function(){

					//Example use. Add funcitonality to element that opens window and select target Modal
					$('#open_modal').lightbox({modalWindow:'#modal'});

					//Example use 2. Add extra styles to the modal window. It's wise to center if we change size, padding or something in that order
					$('#open_modal_2').lightbox({ modalWindow:'#modal_2', customStyle: {'color':'#ccc', 'padding':'30px'}, center: true });

					//Example use 3. Add size to window and center programatically rather than using the CSS file
					$('#open_modal_3').lightbox({ modalWindow:'#modal_3', width: 1000, height: '30em', center: true });

			});
		})(jQuery);
	</script>
```
</p>
