var opt_R = document.getElementById("opt_R");
opt_R.style.visibility = "hidden";
function cnt_tt()
{
  var I = document.getElementById("ipt_I");
  var V = document.getElementById("ipt_V");
  var R = V.valueAsNumber/I.valueAsNumber;
  opt_R.innerHTML = "系統電阻值為："+ Math.round(R*100)/100 +"歐姆";
  opt_R.style.visibility = "visible";
}

function returnP()
{
  location.href="physics.html";
}
