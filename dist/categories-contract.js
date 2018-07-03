'use strict';

window.LocalCookieInformation.loadSampleTemplate('../templates/widget-category-consent/category-consent-widget.html', function(html, javascript) {
  (function() {
    window.CookieInformation.injectCategoriesConsent(html, javascript);
  })();
});
