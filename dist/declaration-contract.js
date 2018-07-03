'use strict';

window.LocalCookieInformation.loadSampleTemplate('../templates/widget-cookie-declaration/consent-cookie-declaration.html', function(
  html,
  javascript
) {
  (function() {
    window.CookieInformationCookiesDeclaration.injectCookieDeclaration(html);
  })();
});
