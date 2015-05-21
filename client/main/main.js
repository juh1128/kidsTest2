/**
 * Created by JYH on 2015-05-20.
 */


Main = new function(){
    this.init = function(){
        var contentHeight = $('#mainPage div[data-role=content]').height();
        console.log(contentHeight);
        $('div#smallBlock').each( function(index){
            var resizeHeight = contentHeight*0.33;
            if(index == 0){
                resizeHeight = contentHeight*0.34;
            }
            $(this).css("height",resizeHeight);
        });
        $('div#mediumBlock').each( function(){
            var resizeHeight = contentHeight*0.5;
            $(this).css("height",resizeHeight);
        });
    }
}