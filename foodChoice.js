function returnM()
{
  location.href="index.html";
}

var s = document.getElementById("small");
var bi = document.getElementById("big");
var foodImage = document.querySelector("img");
var m = document.getElementById("meal");
m.style.visibility = "hidden";

function chooseMeal(){
   m.style.visibility = "visible";
  if(s.checked)
  {
    let ran1=getRandom(1,9);
    if(ran1==1)
    {
      foodImage.setAttribute("src", "foodImages/小熱/5-漢堡.png");
      m.innerHTML = "!!漢堡!!" ;
    }
    else if(ran1==2)
    {
      foodImage.setAttribute("src", "foodImages/小熱/6-卡拉雞加吐司.png");
      m.innerHTML = "!!巧克力卡拉雞!!" ;
    }
    else if(ran1==3)
    {
      foodImage.setAttribute("src", "foodImages/小熱/8-蛋包飯.png");
      m.innerHTML = "!!蛋包飯!!" ;
    }
    else if(ran1==4)
    {
      foodImage.setAttribute("src", "foodImages/小熱/9-水餃.png");
      m.innerHTML = "!!水餃!!" ;
    }
    else if(ran1==5)
    {
      foodImage.setAttribute("src", "foodImages/小熱/10-小綠特餐乾麵.png");
      m.innerHTML = "!!小綠特餐!!" ;
    }
    else if(ran1==6)
    {
      foodImage.setAttribute("src", "foodImages/小熱/11-乾麵.png");
      m.innerHTML = "!!各種乾麵!!" ;
    }
    else if(ran1==7)
    {
      foodImage.setAttribute("src", "foodImages/小熱/13-滑蛋肉片飯.png");
      m.innerHTML = "!!滑蛋肉片飯!!" ;
    }
    else if(ran1==8)
    {
      foodImage.setAttribute("src", "foodImages/小熱/14-蛋吐司抹醬吐司.png");
      m.innerHTML = "!!蛋吐司/抹醬吐司!!" ;
    }
    else if(ran1==9)
    {
      foodImage.setAttribute("src", "foodImages/小熱/15-義大利麵.png");
      m.innerHTML = "!!義大利麵!!" ;
    }
  }
  else if(bi.checked)
  {
    let ran2=getRandom(1,7);
    if(ran2==1)
     {
        foodImage.setAttribute("src", "foodImages/1-鍋燒.png");
        m.innerHTML = "!!鍋燒麵!!" ;
      }
      else if(ran2==2)
      {
        foodImage.setAttribute("src", "foodImages/2-滷味.png");
        m.innerHTML = "!!滷味!!" ;
      }
      else if(ran2==3)
      {
        foodImage.setAttribute("src", "foodImages/3-炒飯.png");
        m.innerHTML = "!!炒飯!!" ;
      }
      else if(ran2==4)
      {
        foodImage.setAttribute("src", "foodImages/4-燴飯.png");
        m.innerHTML = "!!燴飯!!" ;
      }
      else if(ran2==5)
      {
        foodImage.setAttribute("src", "foodImages/7-涼麵.png");
        m.innerHTML = "!!涼麵!!" ;
      }
      else if(ran2==6)
      {
        foodImage.setAttribute("src", "foodImages/12-自助餐.png");
        m.innerHTML = "!!自助餐!!" ;
      }
      else if(ran2==7)
      {
        foodImage.setAttribute("src", "foodImages/16-蛋餅.png");
        m.innerHTML = "!!蛋餅!!" ;
      }
  }
  
}

function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};
