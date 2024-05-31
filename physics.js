function returnM()
{
  location.href="index.html";
}

var oo= document.getElementById("oone");
var ot= document.getElementById("otwo");
var to= document.getElementById("tone");
var tt= document.getElementById("ttwo");
var tthr= document.getElementById("tthree");
var tf= document.getElementById("tfour");


function cnt()
{
  if(oo.selected)
  {
    location.href="phy_oo.html";
  }
  else if(ot.selected)
  {
    location.href="phy_ot.html";
  }
  else if(to.selected)
  {
    location.href="phy_to.html";
  }
  else if(tt.selected)
  {
    location.href="phy_tt.html";
  }
  else if(tthr.selected)
    {
      location.href="phy_tthr.html";
    }
  else if(tf.selected)
    {
      location.href="phy_tf.html";
    }
}
