var s=document.getElementById("suggestion");
s.style.visibility = "hidden";
var elb = document.getElementById("bmi");
bmi.style.visibility = "hidden";
function returnM()
{
  location.href="index.html";
}
function BMIcal(){
  var w=document.getElementById("weight");
  var h=document.getElementById("height");
  var al=document.getElementById("al");
  var b;
  
  b = w.valueAsNumber/((h.valueAsNumber/100)*(h.valueAsNumber/100));
  bmi.style.visibility = "visible";
  elb.innerHTML = "your BMI is: "+Math.round(b*100)/100;
  s.style.visibility = "visible";
    if(18.5>b)
    {
      s.innerHTML = "小建議：要多吃一點歐~三餐要照常吃並配合每日運動的好習慣";
    }
    else if(b>=18.5 && b<=24)
    {
      s.innerHTML = "小建議：目前健康狀況良好!要繼續保持歐";
    }
    else if(b>24)
    {
      s.innerHTML ="小建議：體重過重囉!要養成運動的好習慣!";
    }
  al.innerHTML="資料來源：衛生福利部國民健康署"
}
