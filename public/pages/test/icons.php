<?
$p = new class extends Page {
}
?>

<?
$icons = [];

foreach (scandir(FSL . 'assets/icons/') as $file)
  if (str_ends_with($file, '.svg'))
    $icons[] = substr($file, 0, -4);
?>

<table>
  <? foreach ($icons as $name): ?>
    <tr>
      <td><?= $name ?></td>
      <td>
        <s-ico <?= $name ?>></s-ico>
      </td>
    </tr>
  <? endforeach ?>
</table>
