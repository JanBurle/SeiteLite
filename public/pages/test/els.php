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

<f-row>
  <button onclick="chgVal(-0.3)"> - </button>
  <s-rating val='3.1'></s-rating>
  <button onclick="chgVal(0.4)"> + </button>
</f-row>

<script>
  let val = 3.1
  let rating = doc.qSel('s-rating')

  let chgVal = (d) => {
    val = (val + d).clamp(0, 5)
    rating.setAttr('val', val)
  }
</script>

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
