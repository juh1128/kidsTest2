/**
 * Created by JYH on 2015-05-20.
 */


function gotoTitle(){
    $.mobile.changePage("#titlePage", 'fade');
}

Intro = new function(){
    this.init = function(){
        //2�� �� �ΰ� �ٲٱ�
        setTimeout( function(){
            $('#logoImage').attr("src", "http://placehold.it/360x640/FFDC3C/&text=WeCreative");
            setTimeout( gotoTitle, 2500);
        }, 2000);
    }
}