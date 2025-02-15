<?
$p = new class extends Page {
  var $title = 'MX';
};

require_once FSL . 'util.php';
require_once FRT . 'cm/mx.php';
?>

<table>
  <? foreach (
    [
      '[b:bold]',
      '<b>bold</b>',
      '[b.tx-red:bold]',
      '[i:italic]',
      '[u:underline]',
      '[h1:heading]',
      '[a](https://afaik.it/)',
      '[a:Odkaz](https://afaik.it/)',
      '[a:https://afaik.it/]',
      '[mailto](office@afaik.it/)',
      '[mailto:Ofyce](office@afaik.it/)',
      '[mailto:office@afaik.it/]',
      '[img](/sl/assets/logo.svg)',
      '[ul:[li:item][li:item]]',
      '[ol:[li:item][li:item]]',
      'a[br]b',
      'a[hr.h hh]b',
      '[-: comment [b:b]aa]',
      '[unknown: blah [b:b]aa]',
      'quotes: "double" \'single\', escaped: \\"\\\'',
      'http://afaik.it/',
      '[ico:menu]',
      '[btn:push me]',
    ] as $mx
  ): ?>
    <tr>
      <td><?= h($mx) ?></td>
      <td><?= mx($mx) ?></td>
    </tr>
  <? endforeach ?>
</table>
