/**
 * Created by JYH on 2015-05-20.
 */

resizeContent = function(pageId){
    var head_height, footer_height;
    if( pageId ) {
        head_height = $('#' + pageId + ' div[data-role=header]').outerHeight();
        footer_height = $('#' + pageId + ' div[data-role=footer]').outerHeight();
    }
    else{
        head_height = $('div[data-role=header]').outerHeight();
        footer_height = $('div[data-role=footer]').outerHeight();
    }

     /* 전체 화면의 높이 $(document).height() 에서 앞서 계산한 head와 footer의 높이를 뺀 공간의 높이를 계산하고 이를 content 영역의 높이로 설정 */
    var content_height= $(".ui-mobile").height() - head_height - footer_height ;

    if( pageId ) {
        $('#' + pageId + ' div[data-role=content]').css('height', content_height + 'px');
    }
    else{
        $('div[data-role=content]').css('height', content_height + 'px');
    }
}