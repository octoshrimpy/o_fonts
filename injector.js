var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};

//////////////////////////////////////////

var users = {
  "351479285845852162": "comic",
  "337479296157351947": "crayon"
}

window.setInterval(
  function o_fonts(){

    // users.forEach(function(id, font) {
    for(var [user, font] of Object.entries(users)){
      var selector = `[user_by_bdfdb='${CSS.escape(user)}']:not(.found)`;
      var elements = document.querySelectorAll(selector);
      // console.log(elements)
      elements.forEach(function (item) {
      item.classList.add('found');
      var wrap = getClosest(item, '.da-container');
      var messages = wrap.querySelectorAll('[aria-disabled="false"] .da-content')
      // console.log(messages)
      messages.forEach(function(message) {
        message.classList.add('o_fonts');
        message.classList.add(`${font}`);
        console.log(message)
      })
    });
  };
}
, 10);





// add styling

// var url  = 'https://gitcdn.xyz/repo/octoshrimpy/o_fonts/master/o_fonts.css';
var url  = "https://raw.githubusercontent.com/octoshrimpy/o_fonts/master/o_fonts.css";
var head = document.getElementsByTagName('head')[0];
var css  = document.createElement('link');
css.rel  = 'stylesheet';
css.src  = url;
head.append(css)
