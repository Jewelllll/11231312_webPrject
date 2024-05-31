var opt_P = document.getElementById("opt_P");
opt_P.style.visibility = "hidden";
function cnt_tt()
{
  var I = document.getElementById("ipt_I");
  var V = document.getElementById("ipt_V");
  var P = V.valueAsNumber*I.valueAsNumber;
  opt_P.innerHTML = "系統電功率值為："+ Math.round(P*100)/100 +"瓦特";
  opt_P.style.visibility = "visible";
}

function returnP()
{
  location.href="physics.html";
}
