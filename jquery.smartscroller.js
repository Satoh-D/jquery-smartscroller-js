/**
 * jQeury Smartscroller
 *
 * jQuery Plugin to scroll smoothly
 *
 * @category    jQuery Plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2014 Sato Daiki
 * @author      Daiki Sato <sato.dik@gmail.com>
 * @link        http://orememo-v2.tumblr.com
 * @version     1.0
 * @since       2014.06.11
 */

;(function($, window, document, undefined) {

	var pluginName = 'smartscroller',
			defaults = {
				easing: 'swing',
				offsetMinus: 0,
				speed: 400,
				completeScroll: function() {}
			},
			$body;

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function() {
		var self = this;

		$body = isWebkit() ? $('body') : $('html');
		self.$element = $(self.element);

		self.$element.on('click keypress', function(e) {
			e.preventDefault();

			self.$target = $(self.$element.attr('href'));
			self.targetOffset = self.$target.offset().top;

			self.pageScroll(self.targetOffset - self.settings.offsetMinus);
		});
	}

	Plugin.prototype.pageScroll = function(toTop) {
		var self = this;

		$body.stop().animate({
			scrollTop: toTop
		}, {
			duration: self.settings.duration,
			easing: self.settings.easing,
			done: function(animation, goToEnd) {
				// goToEnd === undefined: アニメーションが自然に終了した場合
				if(typeof goToEnd === 'undefined') self.settings.completeScroll();
			}
		});
	}

	// webkitか判定
	function isWebkit() {
		if('WebkitAppearance' in document.documentElement.style) return true;
		return false;
	}

	$.fn[pluginName] = function(options) {
		this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});

		return this;
	}

})(jQuery, window, document, undefined);