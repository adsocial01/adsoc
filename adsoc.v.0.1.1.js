// ==UserScript==
// @name                    adsoc
// @namespace               zadrotCenter
// @version                 0.1.1
// @update                  https://gist.githubusercontent.com/ronen-210/cee5d551f82dddd5dbba4988acfca943/raw/e18dc58a4ff707283edaa7c66c9aaae7a99ee753/adsoc.js
// @download                https://gist.githubusercontent.com/ronen-210/cee5d551f82dddd5dbba4988acfca943/raw/e18dc58a4ff707283edaa7c66c9aaae7a99ee753/adsoc.js
// @author                  ronen210
// @require                 https://code.jquery.com/jquery-2.2.3.min.js
// @resource    logins      http://tampermonkey.net/favicon.ico
// @include                 http://ad-social.org*
// @include                 https://www.instagram.com/accounts/login*
// @grant                   none
// ==/UserScript==

(function () {
    loginInsta();
})();

function loginInsta() {
    if (window.location.href === "http://ad-social.org/") {
        var instaLoginHref = $("a[href^='/in']:first").attr('href');
        window.location.href = window.location.href + instaLoginHref;
    }
    var instaLoginPageRegex = /^https:\/\/www\.instagram\.com\/accounts\/login/;
    if (instaLoginPageRegex.test(window.location.href)) {
        $('input[name=username]').val('vladislav.iscenco');
        $('input[name=password]').val('Poc29268596712');
        $("#login-form").submit();
    }
}