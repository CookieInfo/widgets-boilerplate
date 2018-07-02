'use strict';

window.LocalCookieInformation.loadSampleTemplate(window.LocalCookieInformation.getTemplatePath(), function(html, javascript) {
  (function() {
    var showBannerMethod = 'showCookieBanner';
    var hideBannerMethod = 'hideCookieBanner';
    var showDetailsText = '';
    var hideDetailsText = '';
    var website = '';
    var domains = '';
    var categories = 'cookie_cat_necessary,cookie_cat_functional,cookie_cat_statistic,cookie_cat_marketing,cookie_cat_unclassified';
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
