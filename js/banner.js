function auto(){
 	// 获取第一个图片 节点对象 
    var firstImg = $('#slide li').first().clone(); 
    // 放在 ul 的最后 
    $('#slide').append(firstImg).width($('#slide li').length*$('#slide img').width()); 
  
    var i = 0;
    var timer;
    autoPlay();
  
    // 下一张 
    $('#next').click(function(){ 
        i++; 
        moveImg(i); 
    });
  
    // 上一张 
    $('#prev').click(function(){ 
        i--; 
        moveImg(i); 
    });

    function autoPlay(){ 
        timer = setInterval(function(){ 
            i++; 
            moveImg(i); 
        }, 1000); 
    } 
  
    function moveImg(num){ 
        // 如果是最后一张图片怎么办 
        if(i==$('#slide li').length){ 
            i = 1; 
            $('#slide').css({left:0}); 
        }
  
        // 是第一张 
        if(i==-1){ 
            i=$('#slide li').length-2; 
            $('#slide').css({left:($('#slide li').length-1)*-1267}); 
        }
  
        // 移动图片 
        $('#slide').stop().animate({left:i*-1267},400);  
  
        // 换小点的标记 
        if(i==($('#slide li').length-1)){ 
            $('#list li').eq(0).addClass('active').siblings().removeClass('active'); 
        }else{ 
            $('#list li').eq(i).addClass('active').siblings().removeClass('active'); 
        } 
    } 
    
    $('#banner').mouseover(function(){
//      $('#prev').show(); 
//      $('#next').show(); 
        clearInterval(timer); 
    });
    $('#banner').mouseout(function(){
//      $('#prev').hide(); 
//      $('#next').hide(); 
        autoPlay(); 
    });

    // 点击小图标 跳转到指定的页面 
    $('#list li').mouseover(function(){ 
        i = $(this).index();     
        moveImg(i); 
    });
 }