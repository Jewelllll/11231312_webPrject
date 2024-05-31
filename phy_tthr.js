var opt_R = document.getElementById("opt_P");
opt_R.style.visibility = "hidden";
function cnt_tt()
{
  var V = document.getElementById("ipt_V");
  var R = document.getElementById("ipt_R");
  var P = V.valueAsNumber*V.valueAsNumber/R.valueAsNumber;
  opt_P.innerHTML = "系統電功率值為："+ Math.round(P*100)/100 +"瓦特";
  opt_P.style.visibility = "visible";
}

function returnP()
{
  location.href="physics.html";
}
