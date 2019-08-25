var jisuan = function (heimg) {
  if (heimg == null || heimg.length == 0) {
    return 0;
  } else {
    var height = 0;
    //得到每列div里的img的高，并且加在一起求出总高
    for (var i = 0; i < heimg.length; i++) {
      var img = heimg[i];
      var h = img.height;
      height += h;
    }
    return height;
  }
}
var minDiv = function () {
  var app1 = document.querySelector('#bp1');
  var app2 = document.querySelector('#bp2');
  var app3 = document.querySelector('#bp3');
  var app4 = document.querySelector('#bp4');

  var appimg1 = app1.children;
  var appimg2 = app2.children;
  var appimg3 = app3.children;
  var appimg4 = app4.children;

  var divheight1 = jisuan(appimg1);
  var divheight2 = jisuan(appimg2);
  var divheight3 = jisuan(appimg3);
  var divheight4 = jisuan(appimg4);

  var minheight = Math.min(divheight1,divheight2,divheight3,divheight4);
  if(minheight == divheight1){
    return app1;
  }
  if(minheight == divheight2){
    return app2;
  }
  if(minheight == divheight3){
    return app3;
  }
  if(minheight == divheight4){
    return app4;
  }
}
// 获取body的页面默认高度
var gundon = window.screen.height;
while(true){
  if(document.documentElement.scrollHeight >= gundon){
    break;
  }
  var mDiv = minDiv();
  //创建图片，插入
  var img = document.createElement("img");
  img.setAttribute("src","img/10.jpg");
  mDiv.appendChild(img);
}

