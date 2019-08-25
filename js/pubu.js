// 图片高度相加，算出具体的值，方便用于比较，图片出入最小的高度那列
var jisuan = function (heimg) {
  if (heimg == null || heimg.length == 0) {
    return 0;
  } else {
    var height = 0;
    //得到每列div里的img的高，并且加在一起求出总高
    for (var i = 0; i < heimg.length; i++) {
      var img = heimg[i];
      // 每个图片的高度
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
// children方法作用于元素，能以数组返回子元素
  var appimg1 = app1.children;
  var appimg2 = app2.children;
  var appimg3 = app3.children;
  var appimg4 = app4.children;
// 调用方法，得出所有图片相加的高度
  var divheight1 = jisuan(appimg1);
  var divheight2 = jisuan(appimg2);
  var divheight3 = jisuan(appimg3);
  var divheight4 = jisuan(appimg4);
// 判断哪个div的高度是最小的，并把最小的div返回出入，以便后续拿到插入图片
  var minheight = Math.min(divheight1, divheight2, divheight3, divheight4);
  if (minheight == divheight1) {
    return app1;
  }
  if (minheight == divheight2) {
    return app2;
  }
  if (minheight == divheight3) {
    return app3;
  }
  if (minheight == divheight4) {
    return app4;
  }
}
// 获取body的页面默认高度
var gundon = window.screen.height + 500;
// 让图片能按顺序生成插入
var imgindex = 0;
var initimg = function () {
  var itemr = setInterval(function () {
    if (document.documentElement.scrollHeight >= gundon) {
      clearInterval(itemr);
    }
    imgindex++;
    // 因为总共有十个图片
    if (imgindex >= 10) {
      imgindex = 1;
    }
    var mDiv = minDiv();
    //创建图片，插入
    var img = document.createElement("img");
    img.setAttribute("src", "img/" + imgindex + ".jpg");
    // 把图片插入div中
    mDiv.appendChild(img);
  }, 100)
};

window.onload = function () {
  initimg();
  //监听滚动条事件
  // document.documentElement.scrollTop页面内容向上滚动的高度
  // window.screen.height 可视窗口的高度
  // document.documentElement.scrollHeight 滚动条能滚动的最大高度
  window.document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight) {
      gundon += 500;
      initimg();
    }
  })
}




