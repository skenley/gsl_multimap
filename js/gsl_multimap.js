(function($){
$(document).ready(function() {

  $('.locator-tab').click(function() {
		if ($(this).hasClass('tab-z')) {
			$('.locator-tab').addClass('tab-z');
			$('.locator-tab').removeClass('tab-x');
			$(this).removeClass('tab-z');
			$(this).addClass('tab-x');
			var tabID = $(this).attr('id');
			var contentID = tabID.concat('-content');
			$('.tab-content').removeClass('tab-active');
			$('#'.concat(contentID)).addClass('tab-active');
		}
	});
});
})(jQuery);
