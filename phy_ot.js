var x=document.getElementById("x");
x.style.visibility = "hidden";

function cnt_oo()
{
  var a=document.getElementById("a");
  var v=document.getElementById("v");
  var t=document.getElementById("t");
  var xc= v.valueAsNumber*t.valueAsNumber+0.5*(a.valueAsNumber*t.valueAsNumber*t.valueAsNumber);
  x.innerHTML = "位移為: "+Math.round(xc*100)/100+"公尺";
  x.style.visibility = "visible";
}

function returnP()
{
  location.href="physics.html";
}
