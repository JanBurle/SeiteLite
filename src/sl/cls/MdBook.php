<?

class MdBook extends Page
{
  var $tpl = 'htmlnav';
  var $nav = 'htmlnav';

  function __construct($name, $relPath)
  {
    parent::__construct();
    $this->nav = $this->tag('ol', $this->navol($this->scan($name, $relPath)));

    $this->showPage();
  }

  function scan($name, $relPath)
  {
    $res = [];

    $dir = ROOT . $relPath;
    foreach (scandir($dir) as $file) {
      if (in_array($file, ['.', '..', 'index.md']))
        continue;

      // strip prefix
      $nm = $file;
      if (false !== ($pos = strpos($nm, '.')))
        $nm = substr($nm, $pos + 1);

      if (is_dir("$dir/$file"))
        $res[] = $this->scan($nm, "$relPath/$file");
      else
        $res[] = [pathinfo($nm, PATHINFO_FILENAME), "$relPath/$file", []];
    }

    return [$name, "$relPath/index.md", $res];
  }

  function navol($val)
  {
    [$name, $relPath, $arr] = $val;
    $res = $this->tag('li', $name, "onclick=\"getPage('$relPath')\"");

    if ($arr) {
      $sub = '';
      foreach ($arr as $val)
        $sub .= $this->navol($val);
      $res .= $this->tag('ol', $sub);
    }

    return $res;
  }

  function showPage()
  {
    if ($page = $_REQUEST['page'] ?? '') {
      $file = ROOT . $page;
      if (file_exists($file)) {
        $md = new md\ParsedownExtra();
        echo $md->text(file_get_contents($file));
      }
    }
  }
}
