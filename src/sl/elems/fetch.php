<?
$elems = json_decode(file_get_contents('php://input'));

$root = $_SERVER['DOCUMENT_ROOT'];

$tps = []; // templates
$jss = []; // classes

foreach ($elems as $elem) {
  $tpl = "$root$elem.php"; // template
  $cls = "$root$elem.js"; // class

  ob_start();
  file_exists($tpl) && include $tpl; // evaluate
  $tps[] = ob_get_clean();

  $jss[] = file_exists($cls) ? file_get_contents($cls) : '';
}

echo json_encode([$tps, $jss]);
