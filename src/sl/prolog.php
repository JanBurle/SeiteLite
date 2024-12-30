<?
// Are we developing?
function isDev(): bool
{
  return ini_get('display_errors');
}

// Run-time error checking
class CheckException extends Exception {}

function check($expr, $msg = '')
{
  if (!$expr)
    if (isDev())
      throw new CheckException($msg);
    else {
      error_log($msg);
      die;
    }
}

// local paths
define('ROOT', $_SERVER['DOCUMENT_ROOT'] . '/');  // root dir
define('SL',   __DIR__ . '/');                    // SeiteLite (this) dir

define('CLS', SL   . 'cls/');                     // autoloaded SL classes
define('PGS', ROOT . 'pages/');                   // autoloaded page classes

define('TPL', SL   . 'tpl/');                     // html templates

// url paths
check(0 === strpos(SL, ROOT));
define('SLU', '/' . substr(SL, strlen(ROOT)));    // SeiteLite url

// include file if exists
function incFile(string $file, $tag = ''): bool
{
  if (!file_exists($file))
    return false;

  $tag && print("<$tag>");
  require $file;
  $tag && print("</$tag>");

  return true;
}


// autoload classes
spl_autoload_register(function (string $cls) {
  $file = str_replace('\\', '/', $cls) . '.php'; // namespace to path
  incFile(CLS . $file) or incFile(PGS . $file);
});
