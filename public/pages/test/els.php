<?
$p = new class extends Page {
}
?>

<hr>

<f-col>
  <s-btn go="https://db.de">db.de</s-btn>
  <s-btn icon='meh' onclick="alert('meh')"></s-btn>
  <s-btn>menu</s-btn>
  <s-btn icon='meh'>menu</s-btn>
</f-col>

<hr>

<script>
  SLG.reVars['tr'] = new ReVar(1)
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
