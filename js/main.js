// handle click move slide 
$(document).ready(function() {
    // get position of active make display none 
    var positionActive = $(".active").index();
    // get position first of .slide-show .slide
    var positionFirst = $(".slide-show .slide:first").index();
    // get position last of .slide-show .slide
    var positionLast = $(".slide-show .slide:last").index();
    // get position active current of .list-slide-show ul.list-slide li
    var positionActiveCurrent = $(".active-li").index() + 1;
    // get position first of .list-slide-show ul.list-slide li
    var firstListSlide = $(".list-slide-show ul.list-slide li:first-child").index() + 1;
    // get position last of .list-slide-show ul.list-slide li
    var lastListSlide = $(".list-slide-show ul.list-slide li:last-child").index() + 1;
    // console.log(lastListSlide)
    // ---- when click next ----
    $(".btn-slide .btn-next").click(function() {
        // delete all class 'none' of .list-slide-show ul.list-slide li when next
        for( var i = positionActiveCurrent ; i < lastListSlide ; i++ ) {
            $(".list-slide-show ul.list-slide li").eq(i).removeClass('none');
        }
        // ---- get stt img ----
        var x = positionActiveCurrent + 1;
        if( x == lastListSlide + 1 ) {
            x = 1;
        }
        $(".page-current p").text(x);
        // -------------------------
        if( positionActive == positionLast ){
            positionActive = positionFirst - 1;
            positionActiveCurrent = positionFirst;
        }
        positionActive ++ ;
        $(".slide-show .slide").removeClass('active').removeClass('go-to-left').removeClass('lost-on-left').removeClass('go-to-right').removeClass('lost-on-right');
        $(".slide-show .slide").eq(positionActive - 1).addClass('active').addClass('lost-on-left');
        $(".slide-show .slide").eq(positionActive).addClass('active').addClass('go-to-left');
        // handle add active for list img when next
        $(".list-slide-show ul.list-slide li").removeClass('active-li');
        positionActiveCurrent ++;
        $(".list-slide-show ul.list-slide li:nth-child("+(positionActiveCurrent)+")").addClass('active-li');
        // ------------------------------
    });
    // ---- end when click next ----
    // ---- when click prev ----
    $(".btn-slide .btn-prev").click(function() {
        // ---- get stt img ----
        var x = positionActiveCurrent + 1;
        if( x == firstListSlide + 1 ) {
            x = lastListSlide + 2;
        }
        x -- ;
        $(".page-current p").text(x - 1);
        // -------------------------
        if( positionActive == positionFirst ) {
            positionActive = positionLast + 1;
            positionActiveCurrent = positionLast + 2;  
        }
        positionActive --;
        $(".slide-show .slide").removeClass('active').removeClass('go-to-right').removeClass('lost-on-right').removeClass('go-to-left').removeClass('lost-on-left');
        $(".slide-show .slide").eq(positionActive + 1 ).addClass('active').addClass('lost-on-right');
        $(".slide-show .slide").eq( positionActive).addClass('active').addClass('go-to-right');
        // handle add active for list img when prev
        $(".list-slide-show ul.list-slide li").removeClass('active-li');
        positionActiveCurrent -- ;
        $(".list-slide-show ul.list-slide li:nth-child("+(positionActiveCurrent)+")").addClass('active-li');
    });
    // ---- end when click prev ----
    // handl add background color for .btn-slide span
    $(".btn-slide span").click(function() {
        $(".btn-slide span").removeClass('background');
        $(this).addClass('background');
    });
    // handle click show images
    $(".list-slide-show ul.list-slide li").click(function() {
        var positionClick = $(this).index();
        $(".page-current p").text(positionClick + 1);
        $(".list-slide-show ul.list-slide li").removeClass('active-li');
        $(this).addClass('active-li');
        $(".slide-show .slide").removeClass('active').removeClass('go-to-right').removeClass('lost-on-right').removeClass('go-to-left').removeClass('lost-on-left');
        $(".slide-show .slide").eq(positionClick).addClass('active');
        positionActive = positionClick;
        positionActiveCurrent = positionClick + 1;
    });
}); 
// ---------------------- end ----------------------


// translating the images
$(document).ready(function() {
    // add background color when .btn-slide-show span click
    $(".btn-slide-show span").click(function() {
        $(".btn-slide-show span").removeClass('background');
        $(this).addClass('background');
    });
    // handle translating images 
    var positionFirstNone = $(".list-slide-show ul.list-slide li:first-child").index();
    var positionLassNone  = $(".list-slide-show ul.list-slide li:last-child").index();
    // get position before .list-slide-show ul.list-slide li last 6 levels
    var positionBefore_6 = positionLassNone - 6;
    // console.log(positionBefore_6);
    var position = 0;
    // ---- when click next ----
    $(".btn-slide-show .btn-next").click(function() {
        $(".list-slide-show ul.list-slide li").eq(positionFirstNone).stop().addClass('none');
        positionFirstNone ++;
        // if positionFirstNone = list-slide before last list-slide 
        if( positionFirstNone == positionBefore_6 ) {
            $('.list-slide-show ul.list-slide li').removeClass('none');
            positionFirstNone = 0;
        }
    })
    // ---- end when click next ----
    // ---- when click prev ----
    $(".btn-slide-show .btn-prev").click(function() {
        $('.list-slide-show ul.list-slide li').eq(positionFirstNone - 1 ).removeClass('none');
        positionFirstNone --;
        if( positionFirstNone < 1) {
            positionFirstNone = 0;
        }
    });
    // ----- end when click prev ----
});
// ------------- end -------------