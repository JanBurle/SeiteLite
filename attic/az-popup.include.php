<?
// hidden popup dialog in the page, ready to use
?>
<az-popup id="azPopup"></az-popup>
<script>
  let pop = (anchor, html) =>
    qSel('#azPopup').open(anchor, html)
</script>
