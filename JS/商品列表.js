$(function(){
    
    var a =  $($('.sell-state').children().get(0));
    var b =  $($('.sell-state').children().get(1));
    var c =  $($('.sell-state').children().get(2));
    var d =  $($('.sell-state').children().get(3));
    a.css('color','#e19410');
    $('.wait-sell').css('display','block')
    $('.released').css('display','none')
    $('.off-the-shelf').css('display','none')
    $('.sell-short').css('display','none')
    a.click(function(){
        // $('.wait-sell').css('backgroundcolor','red')
        a.css('color','#e19410');
        b.css('color','black');
        c.css('color','black');
        d.css('color','black');
         $('.wait-sell').css('display','block')
         $('.released').css('display','none')
         $('.off-the-shelf').css('display','none')
         $('.sell-short').css('display','none')
    })
    b.click(function(){
        // $('.wait-sell').css('backgroundcolor','red')
        b.css('color','#e19410');
        a.css('color','black');
        c.css('color','black');
        d.css('color','black');
        $('.wait-sell').css('display','none')
        $('.released').css('display','block')
        $('.off-the-shelf').css('display','none')
        $('.sell-short').css('display','none')
        
    })
    c.click(function(){
        // $('.wait-sell').css('backgroundcolor','red')
        c.css('color','#e19410');
        b.css('color','black');
        a.css('color','black');
        d.css('color','black');
        $('.wait-sell').css('display','none')
        $('.released').css('display','none')
        $('.off-the-shelf').css('display',' block')
        $('.sell-short').css('display','none')
        
    })
    d.click(function(){
        // $('.wait-sell').css('backgroundcolor','red')
        d.css('color','#e19410');
        b.css('color','black');
        c.css('color','black');
        a.css('color','black');
        $('.wait-sell').css('display','none')
        $('.released').css('display','none')
        $('.off-the-shelf').css('display','none')
        $('.sell-short').css('display','block')
        
    })
   
})