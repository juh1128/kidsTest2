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

     /* ��ü ȭ���� ���� $(document).height() ���� �ռ� ����� head�� footer�� ���̸� �� ������ ���̸� ����ϰ� �̸� content ������ ���̷� ���� */
    var content_height= $(".ui-mobile").height() - head_height - footer_height ;

    if( pageId ) {
        $('#' + pageId + ' div[data-role=content]').css('height', content_height + 'px');
    }
    else{
        $('div[data-role=content]').css('height', content_height + 'px');
    }
}