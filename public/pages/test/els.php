<?
$p = new class extends Page {
}
?>

<hr>

<s-btn icon='meh'>menu</s-btn>

<hr>

<script>
  window.$reVars['tr'] = new ReVar(1)
</script>
<f-row>
  <f-col>
    <test-react clr='red' id="red" $='tr'></test-react>
    <button onclick="doc.getElementById('red').setAttr('clr','green')">Green</button>
  </f-col>
  <test-react $='tr'></test-react>
  <test-react $='tr'></test-react>
  <test-react $='tr'></test-react>
  <test-react $='tr'></test-react>
  <test-react $='tr'></test-react>
</f-row>
