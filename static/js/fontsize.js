(function(){
    resize();
    function resize(){
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
           deviceWidth = 750;
        }
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }

    // 页面宽度发生变化时动态生成根字体尺寸
    window.onresize = function () {
       resize();
    }
})()