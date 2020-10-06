
// Reset animations on page: body.preload
setTimeout(() => document.body.className='' ,500);

// Remove all :hover stylesheets on mobile
function hasTouch() {
	return 'ontouchstart' in document.documentElement
			|| navigator.maxTouchPoints > 0
			|| navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { 
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) {}
}

// Navigation

	// Navigation Selector
	const navSelector = '.nav-icon, #menu, #blackover-nav, body';

	// Toggle navigation function
	function toggleNav(){
		document.querySelectorAll(navSelector).forEach( e => e.classList.toggle('active') );
	}

	// Close navigation function
	function closeNav(){
		document.querySelectorAll(navSelector).forEach( e => e.classList.remove('active') );
	}

	// Toggle navigation when clicked .nav-icon
	document.querySelector('.nav-icon').addEventListener('click', toggleNav);

	// Close navigation when clicked .blackover (Black background)
	document.getElementById('blackover-nav').addEventListener('click', closeNav);

	// Close navigation when keyup escape
	document.addEventListener("keyup", e => e.keyCode == 27 && closeNav() );

// Search
{% if site.search == true %}
	// Toggle search
	document.querySelector('.show-search').addEventListener('click', () => {
		document.querySelector('.bd-search').classList.toggle('search--show');
	});

	// Active search.js wen clic in input
	document.getElementById('lunrsearch').addEventListener('click', function(){
		loadScript('{{ site.baseurl }}/assets/js/search.js');
	});
{% endif %}

{% if site.disqus %}
	// Comments
	const btnShowComments = document.querySelector('.show-comments');
	function loadComments(){
		// Waiting load icon
		var clock = document.getElementById('disqus_thread').insertAdjacentHTML('beforeend', `<img style='height:20em;width:100%' src="data:image/svg+xml,%3Csvg%20width='100%'%20height='100%'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin%202s%20linear%20infinite%7Dpath:nth-child%283%29%7Banimation:spin%20calc%282s%20%2A%2012%29%20linear%20infinite%7D%40keyframes%20spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg%20fill='none'%20stroke='gray'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%3E%3Ccircle%20cx='8'%20cy='8'%20r='7.5'/%3E%3Cpath%20d='M8%203%20V8'/%3E%3Cpath%20d='M8%208%20L10%2010'/%3E%3C/g%3E%3C/svg%3E">`);
		var d = document, s1 = d.createElement('script'), s2 = d.createElement('script');
		// Load disqus script 1
		s1.src = 'https://{{site.disqus}}.disqus.com/count.js';
		s1.id = 'dsq-count-scr';
		d.head.appendChild(s1);
		// Load disqus script 2
		/* var disqus_config = function () { */
				/* this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable */
				/* this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable */
		/* }; */
		s2.src = 'https://{{site.disqus}}.disqus.com/embed.js';
		s2.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s2);
	}
	function toggleComments(){
		document.getElementById('comments').classList.toggle('comments--show');
	}
{% endif %}

{% if site.lazy-load-comments %}
	// Lazy-Load show comments
	scrollShot(
		'0px',
		'0px',
		'.comments',
		() => {
			loadComments();
			toggleComments();
		},
		() => {
			btnShowComments.remove();
		}
	);
{% else %}
	// Clic toggle comments
	btnShowComments && btnShowComments.addEventListener('click', () => {
		if (!document.getElementById('dsq-count-scr')){
			loadComments();
		}
		toggleComments();
	});
{% endif %}