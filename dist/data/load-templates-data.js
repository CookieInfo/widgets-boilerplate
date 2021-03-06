'use strict';

window.LocalCookieInformation = (function() {
  var _templatePath = null;

  function loadSampleTemplate(pathToTemplate, callback) {

    var templateAjax = new XMLHttpRequest();

    templateAjax.open('GET', pathToTemplate);
    templateAjax.send();
    templateAjax.onreadystatechange = function(data) {
      if (templateAjax.readyState === 4 && (templateAjax.status === 200 || templateAjax.status === 0)) {
        var template, jsElement, js, html;
        var tempElement = document.createElement('div');
        template = templateAjax.responseText;
        tempElement.innerHTML = template;
        jsElement = tempElement.getElementsByTagName('script')[0];
        js = jsElement ? jsElement.innerHTML : '';

        html = window.Handlebars.compile(template)(getTemplateData());
        callback(html, js);
      }
    };
  }

  function getTemplateData() {
    return {
      accept_cookies_button: 'I agree',
      decline_cookies_button: 'Only necessary cookies',
      banner_heading: 'This website uses cookies',
      banner_main_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, \n    scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac \n    diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \n    sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus \n    leo non est. Etiam sit amet lectus quis est congue mollis.',
      translations: {
        show_details: 'Show details',
        hide_details: 'Hide details',
        cookies_overview: 'Cookie declaration',
        category_consent_header: 'Cookie category consent settings',
        about_cookies: 'About cookies',
        iab_info: 'IAB',
        cookie_name_header: 'Name',
        cookie_provider_header: 'Provider',
        cookie_purpose_header: 'Purpose',
        cookie_expiry_header: 'Expiry',
        update_consent_button: 'Update consent',
        multiaccept: 'Select all',
        domain_list_explanation: 'Your consent applies to the following domains: ',
      },
      last_updated: 'Last scan was performed at:',
      last_scan_date: '15.06.2018',
      website_domains: 'test.example.com, another.example.com, subdomain.example.com, test.example.com, fun.example.com, list.example.com',
      cookie_categories: [{
        is_necessary: true,
        is_unclassified: false,
        cookie_type_name: 'Necessary',
        cookie_type_label: 'cookie_cat_necessary',
        cookie_type_description: generateRandomCookieData().description,
        cookie_type_count: 9,
        cookie_type_results: [generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData()],
      }, {
        is_necessary: false,
        is_unclassified: false,
        cookie_type_name: 'Functional',
        cookie_type_label: 'cookie_cat_functional',
        cookie_type_description: generateRandomCookieData().description,
        cookie_type_count: 5,
        cookie_type_results: [generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData()],
      }, {
        is_necessary: false,
        is_unclassified: false,
        cookie_type_name: 'Statistics',
        cookie_type_label: 'cookie_cat_statistic',
        cookie_type_description: generateRandomCookieData().description,
        cookie_type_count: 3,
        cookie_type_results: [generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData()],
      }, {
        is_necessary: false,
        is_unclassified: false,
        cookie_type_name: 'Marketing',
        cookie_type_label: 'cookie_cat_marketing',
        cookie_type_description: generateRandomCookieData().description,
        cookie_type_count: 4,
        cookie_type_results: [generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData(), generateRandomCookieData()],
      }, {
        is_necessary: false,
        is_unclassified: true,
        cookie_type_name: 'Unclassified',
        cookie_type_label: 'cookie_cat_unclassified',
        cookie_type_description: generateRandomCookieData().description,
        cookie_type_count: 2,
        cookie_type_results: [generateRandomCookieData(), generateRandomCookieData()],
      }],
      cookie_declaration_text: '\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra faucibus suscipit. Curabitur lobortis dui in diam iaculis\n        blandit. Vestibulum sagittis feugiat purus, vulputate pretium sem. Aliquam egestas vehicula mollis. Vivamus sit amet\n        arcu sed augue mattis vestibulum. Pellentesque sit amet efficitur nibh. Donec lacinia malesuada mi, ac bibendum mauris\n        maximus vel. Suspendisse dignissim commodo feugiat. Aliquam erat volutpat. Vivamus dolor sapien, imperdiet non laoreet\n        in, viverra a eros. Pellentesque molestie, ligula sed ultrices laoreet, est urna ultricies massa, in pellentesque dolor\n        risus in risus. Suspendisse potenti. Nam id hendrerit diam, finibus placerat sem. Phasellus sollicitudin velit vel\n        neque hendrerit suscipit. Vivamus in nunc euismod, imperdiet sapien eu, elementum elit. Donec eu sem ac eros pretium\n        faucibus at eget nisl. Suspendisse tincidunt magna eros, vitae iaculis libero interdum id. Morbi dictum, neque blandit\n        dictum tristique, mi urna pretium nibh, eu tempus odio lectus ac lorem. Aliquam imperdiet accumsan pretium. Ut maximus\n        blandit sem eu dapibus. Phasellus eget tortor ut tortor blandit lacinia non nec enim. Fusce ut massa molestie, tincidunt\n        ante at, congue nisi. In tincidunt erat quis lorem posuere blandit. Sed in sapien imperdiet, consequat metus at, laoreet\n        purus.\n      </p>\n      <p>\n        Nullam eu dictum ipsum. Curabitur id ante sed mauris efficitur tincidunt eget efficitur metus. Phasellus vel nibh sed risus\n        fringilla tincidunt a ut mauris. Mauris scelerisque quis eros vitae gravida. Nullam et molestie dolor, eu gravida ipsum.\n        Fusce porta, ligula at viverra venenatis, dolor tellus aliquet nulla, vel blandit lacus arcu vel ligula. Fusce non\n        massa velit. Vestibulum non ante id lectus sagittis scelerisque vitae nec ante. Duis sit amet ligula dui. Phasellus\n        sit amet augue pretium, mattis felis fringilla, tristique lectus. In in volutpat metus, in sodales nisl. Nunc vitae\n        justo libero. Cras sed pretium orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus\n        mus. Vestibulum a tellus elit. Aenean a est ipsum. Donec nec nibh ut sapien rhoncus laoreet. Class aptent taciti sociosqu\n        ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in risus ipsum. Vestibulum lacinia viverra nibh,\n        ac dignissim ligula vehicula id. Quisque odio libero, lacinia sed leo et, eleifend cursus sem. Morbi molestie semper\n        volutpat. Proin sed sapien eu nisl mollis auctor nec gravida ligula. Suspendisse sit amet odio tortor. Nullam laoreet\n        mi in velit cursus iaculis. Nullam eget enim purus. Donec nisl urna, malesuada quis neque eu, tristique eleifend urna.\n        Maecenas ut lobortis tortor, ac commodo ipsum. Nullam ullamcorper purus sed lorem varius, et pellentesque purus placerat.\n        Morbi tincidunt quam sit amet nulla commodo luctus. Nullam dapibus lectus ante, eget finibus tortor viverra sed. Curabitur\n        rutrum ligula eu elit mollis consequat. Vestibulum tincidunt, lorem id volutpat fringilla, diam lectus volutpat mauris,\n        a laoreet mi nunc a odio. Aenean vel pulvinar nulla. Donec ut dolor viverra, scelerisque libero vitae, cursus elit.\n        Nullam sodales, libero sed fermentum consectetur, nulla orci commodo orci, nec tristique libero leo at massa. Nunc\n        vel lectus tempor, eleifend libero quis, maximus felis.\n      </p>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra faucibus suscipit. Curabitur lobortis dui in diam iaculis\n        blandit. Vestibulum sagittis feugiat purus, vulputate pretium sem. Aliquam egestas vehicula mollis. Vivamus sit amet\n        arcu sed augue mattis vestibulum. Pellentesque sit amet efficitur nibh. Donec lacinia malesuada mi, ac bibendum mauris\n        maximus vel. Suspendisse dignissim commodo feugiat. Aliquam erat volutpat. Vivamus dolor sapien, imperdiet non laoreet\n        in, viverra a eros. Pellentesque molestie, ligula sed ultrices laoreet, est urna ultricies massa, in pellentesque dolor\n        risus in risus. Suspendisse potenti. Nam id hendrerit diam, finibus placerat sem. Phasellus sollicitudin velit vel\n        neque hendrerit suscipit. Vivamus in nunc euismod, imperdiet sapien eu, elementum elit. Donec eu sem ac eros pretium\n        faucibus at eget nisl. Suspendisse tincidunt magna eros, vitae iaculis libero interdum id. Morbi dictum, neque blandit\n        dictum tristique, mi urna pretium nibh, eu tempus odio lectus ac lorem. Aliquam imperdiet accumsan pretium. Ut maximus\n        blandit sem eu dapibus. Phasellus eget tortor ut tortor blandit lacinia non nec enim. Fusce ut massa molestie, tincidunt\n        ante at, congue nisi. In tincidunt erat quis lorem posuere blandit. Sed in sapien imperdiet, consequat metus at, laoreet\n        purus.\n      </p>\n      <p>\n        Nullam eu dictum ipsum. Curabitur id ante sed mauris efficitur tincidunt eget efficitur metus. Phasellus vel nibh sed risus\n        fringilla tincidunt a ut mauris. Mauris scelerisque quis eros vitae gravida. Nullam et molestie dolor, eu gravida ipsum.\n        Fusce porta, ligula at viverra venenatis, dolor tellus aliquet nulla, vel blandit lacus arcu vel ligula. Fusce non\n        massa velit. Vestibulum non ante id lectus sagittis scelerisque vitae nec ante. Duis sit amet ligula dui. Phasellus\n        sit amet augue pretium, mattis felis fringilla, tristique lectus. In in volutpat metus, in sodales nisl. Nunc vitae\n        justo libero. Cras sed pretium orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus\n        mus. Vestibulum a tellus elit. Aenean a est ipsum. Donec nec nibh ut sapien rhoncus laoreet. Class aptent taciti sociosqu\n        ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in risus ipsum. Vestibulum lacinia viverra nibh,\n        ac dignissim ligula vehicula id. Quisque odio libero, lacinia sed leo et, eleifend cursus sem. Morbi molestie semper\n        volutpat. Proin sed sapien eu nisl mollis auctor nec gravida ligula. Suspendisse sit amet odio tortor. Nullam laoreet\n        mi in velit cursus iaculis. Nullam eget enim purus. Donec nisl urna, malesuada quis neque eu, tristique eleifend urna.\n        Maecenas ut lobortis tortor, ac commodo ipsum. Nullam ullamcorper purus sed lorem varius, et pellentesque purus placerat.\n        Morbi tincidunt quam sit amet nulla commodo luctus. Nullam dapibus lectus ante, eget finibus tortor viverra sed. Curabitur\n        rutrum ligula eu elit mollis consequat. Vestibulum tincidunt, lorem id volutpat fringilla, diam lectus volutpat mauris,\n        a laoreet mi nunc a odio. Aenean vel pulvinar nulla. Donec ut dolor viverra, scelerisque libero vitae, cursus elit.\n        Nullam sodales, libero sed fermentum consectetur, nulla orci commodo orci, nec tristique libero leo at massa. Nunc\n        vel lectus tempor, eleifend libero quis, maximus felis.\n      </p>',
    };
  }

  function generateRandomCookieData() {
    var lengthOfText = Math.random() * 200 + 20;
    var sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra faucibus suscipit. Curabitur lobortis dui in diam iaculis\n    blandit. Vestibulum sagittis feugiat purus, vulputate pretium sem. Aliquam egestas vehicula mollis. Vivamus sit amet\n    arcu sed augue mattis vestibulum';
    return {
      name: 'ASP.NET_SessionId',
      domain: 'www.example.org',
      description: sampleText.slice(0, lengthOfText),
      expiration: Math.ceil(Math.random() * 100) + ' days',
    };
  }

  function setTemplatePath(templatePath) {
    _templatePath = templatePath;
  }

  function getTemplatePath() {
    if (_templatePath === null) {
      throw new Error('No template path defined');
    }
    return _templatePath;
  }

  return {
    loadSampleTemplate: loadSampleTemplate,
    getTemplateData: getTemplateData,
    setTemplatePath: setTemplatePath,
    getTemplatePath: getTemplatePath,
  };
})();
