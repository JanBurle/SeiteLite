<?

class Site // the base class for all pages
{
  // default values
  var $title  = 'SeiteLite';          // title
  var $tpl    = 'html';               // template name
  var $lang   = 'en';                 // language
  var $logo   = SLU . 'img/logo.svg'; // logo/icon
  var $css    = SLU . 'css/main.css'; // main css
  var $js     = SLU . 'js/main.js';   // main js

  // meta tags
  var $description  = '';
  var $robots       = 'index, follow';

  // theme etc.
  var $theme = SLU . 'theme/light.css';
}
