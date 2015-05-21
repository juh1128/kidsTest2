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
            //���� ó��
            resizeContent( $.mobile.activePage.attr("id"));
            //resizeContent(ui.nextPage.attr("id"));
            //�� ������ �� �ʱ�ȭ
            initPages($(this).attr("id"));
        });
    });

    $(window).resize(function(){
        resizeContent( $.mobile.activePage.attr("id"));
    });
    //����� ��ũ�� ����
    $("body").bind("touchmove", function(e){e.preventDefault()} );

    //��Ʈ�� ����
    Intro.init();
});