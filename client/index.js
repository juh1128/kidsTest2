/**
 * Created by JYH on 2015-05-20.
 */

function initPages(pageId){
    switch( pageId ){
        case 'titlePage':
            console.log("title Init");
            break;
        case 'mainPage':
            Main.init();
            break;
    }
}

$(document).ready( function(){
    resizeContent();

    $('div[data-role="page"]').each( function(){
        $(this).bind('pageshow', function(e,ui){
            //공통 처리
            resizeContent( $.mobile.activePage.attr("id"));
            //resizeContent(ui.nextPage.attr("id"));
            //각 페이지 별 초기화
            initPages($(this).attr("id"));
        });
    });

    $(window).resize(function(){
        resizeContent( $.mobile.activePage.attr("id"));
    });
    //모바일 스크롤 금지
    $("body").bind("touchmove", function(e){e.preventDefault()} );

    //인트로 시작
    Intro.init();
});