$(window).scroll(function(){
    var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
    totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
    if($(document).height() <= totalheight  && pageindex != pagecount) {
        pageindex++;
        Search(pageindex);
    }
});