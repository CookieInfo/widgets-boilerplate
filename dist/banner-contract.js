'use strict';

window.LocalCookieInformation.loadSampleTemplate(window.LocalCookieInformation.getTemplatePath(), function(html, javascript) {
  (function() {
    var showBannerMethod = 'showCookieBanner';
    var hideBannerMethod = 'hideCookieBanner';
    var showDetailsText = '';
    var hideDetailsText = '';
    var website = '';
    var domains = '';
    var categories = '';
    window.CookieInformation.initializeBanner(
      html,
      javascript,
      showBannerMethod,
      hideBannerMethod,
      showDetailsText,
      hideDetailsText,
      website,
      domains,
      categories
    );
  })();
});
