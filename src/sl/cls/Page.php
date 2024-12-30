<?

class Page extends Site
{
  var $body = '';

  function __construct()
  {
    ob_start();
  }

  function __destruct()
  {
    $this->body = ob_get_clean();
    require TPL . $this->tpl . '.php';
  }

  function tag($tag, $content, $extra = '')
  {
    $extra && $extra = " $extra";
    return "<$tag$extra>$content</$tag>";
  }
}
