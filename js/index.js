$(function(){
		$(".val").mouseover(function(){
		$(this).children(".val_down").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).css({"border-left":"1px solid #ccc","border-right":"1px solid #ccc","background":"#fff"})
	})

	$(".val").mouseout(function(){
		$(this).children(".val_down").css("display","none");
		$(this).css({"border-left":"1px solid #f1f1f1","border-right":"1px solid #f1f1f1","background":"#f1f1f1"})
	})
	
	

	// $(".B-left .jydq").mouseover(function(){
	// 	$(this).children(".items").css("display","block");
	// 	$(this).css("background","#fff")
	// })
	
	// $(".B-left .jydq").mouseout(function(){
	// 	$(this).children(".items").css("display","none");
	// 	$(this).css({"background":"rgba(51,51,51,0.8)"})
	// })
	
	$(".B-left .jydq").mouseover(function(){
		var index=$(this).index();
		$(".items").eq(index).css("display","block");
		$(this).css("background","#fff")
	})
	
	$(".B-left .jydq").mouseout(function(){
		var index=$(this).index();
		$(".items").eq(index).css("display","none");
		$(this).css({"background":"rgba(51,51,51,0.8)"})
	})



	// 关闭顶部图片
	$(document).ready(function(){
	    var close=$(".Pic .close")[0];
	    close.onclick=function() {
	      $(".Pic").remove()
	    }
	})

	// 搜索轮播
	$(document).ready(function(){
	    var Rollhd=$(".Rollhd")[0];
	    var hdtj=$(".hdscroll .hdtj");   
	    var height=$(".Rollhd").height();
	    var up=$(".Rollbtn .up")[0];
	    var down=$(".Rollbtn .down")[0];

	    var t=setInterval(run,2000);
	    var now=0;
	    var next=0;

	    function run(){
	        next=now+1;
	        if(next>=hdtj.length){
	                next=0;
	        }
	        
	        hdtj.eq(next).css("top",height+"px").end().eq(now).animate({top:-height}).end().eq(next).animate({top:0});
	        now=next;
	    }

	    Rollhd.onmouseover=function(){
	        clearInterval(t);
	    }
	    Rollhd.mouseout=function(){
	            t=setInterval(run,2000);
	    }
	    down.onclick=function(){
	        next=now-1;
	        if(next<0){
	            next=hdtj.length-1;
	        }

	        hdtj.eq(next).css("top",-height+"px").end().eq(now).animate({top:height}).end().eq(next).animate({top:0});
	        now=next;
	    }
	    up.onclick=function(){
	        run();
	    }

	})

	

	// 猜你喜欢
	$(document).ready(function(){
	    var guess=$(".top")[0];
	    var change=$(".tRight")[0];
	    var guess_main=$(".Dright");
	    var now=0;
	    var next=0;
	    var flag=true;
	    change.onclick=function(){
	    	if(!flag){
				return false;
			}
			flag=false;
	        next=now+1;
	        if(next>=guess_main.length){
	            next=0;
	        }
	        guess_main.eq(next).animate({opacity:1}).siblings(".Dright").animate({opacity:0},function(){
					flag=true;
				});
	        now=next;
	    }

	})



	// banner轮播
		$(document).ready(function(){
			var flag=true;
			var n=0;
			var width=$('.two-tp').width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				n++;
				if(n>=$('.two-tp .tp').length){
					n=0;
				};
				$('.two-tp .uls .lis').removeClass("lis-first").eq(n).addClass("lis-first");
				$('.two-tp .tp').eq(n).animate({opacity:1},800,function(){
					flag=true;
				});
				$('.two-tp .tp').eq(n).siblings(".tp").animate({opacity:0});
			}
			var t=setInterval(tu,2000);
			$('.two-tp').mouseover(function(){
				// var index=(this).index;
				clearInterval(t);
				// $('.bannerLeft').eq(index).animate({opacity:1})
				// $('.bannerRight').eq(index).animate({opacity:1})
			}).mouseout(function(){
				t=setInterval(tu,2000);
				// $('.bannerLeft').eq(index).animate({opacity:0})
				// $('.bannerRight').eq(index).animate({opacity:0})
			});
		    $('.two-tp .bannerLeft').click(function(){
		    	n-=1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(n<0){
					n=$('.two-tp .tp').length-1;
				};
		    	$('.two-tp .uls .lis').removeClass("lis-first").eq(n).addClass("lis-first")
				$('.two-tp .tp').eq(n).animate({opacity:1},800,function(){
					flag=true;
				});
				$('.two-tp .tp').eq(n).siblings(".tp").animate({opacity:0});
		    })
		    $('.two-tp .bannerRight').click(function(){
		    	tu();
		    })


		 var index=$(".two-tp .uls .lis").index();
	     $(".two-tp .uls .lis").hover(function(){
	     	 var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0},500);
			 $(".two-tp .tp").eq(index).animate({opacity:1},500,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0});
			 $(".two-tp .tp").eq(index).animate({opacity:1},function(){
			 	flag=true;
			 })
         	 };
         	$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
	    },function(){
	    	var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0});
			 $(".two-tp .tp").eq(index).animate({opacity:1},function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0});
			 $(".two-tp .tp").eq(index).animate({opacity:1},function(){
			 	flag=true;
			 })
         	 };
         	$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
	    })


	})
	
})




// 盒子里面的两个小轮播

$.extend({
		lunbo:function(obj,img){
			obj.hover(function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			},function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			})
		}
})
$(document).ready(function(){
	$.lunbo($(".lis:nth-child(1) .nth div"),$(".two-tp .tp:nth-child(1) img"))
	$.lunbo($(".lis:nth-child(2) .nth div"),$(".two-tp .tp:nth-child(2) img"))
	$.lunbo($(".lis:nth-child(3) .nth div"),$(".two-tp .tp:nth-child(3) img"))
	$.lunbo($(".lis:nth-child(4) .nth div"),$(".two-tp .tp:nth-child(4) img"))
	$.lunbo($(".lis:nth-child(5) .nth div"),$(".two-tp .tp:nth-child(5) img"))
	$.lunbo($(".lis:nth-child(6) .nth div"),$(".two-tp .tp:nth-child(6) img"))
	$.lunbo($(".lis:nth-child(7) .nth div"),$(".two-tp .tp:nth-child(7) img"))
	$.lunbo($(".lis:nth-child(8) .nth div"),$(".two-tp .tp:nth-child(8) img"))
	$.lunbo($(".lis:nth-child(9) .nth div"),$(".two-tp .tp:nth-child(9) img"))
	$.lunbo($(".lis:nth-child(10) .nth div"),$(".two-tp .tp:nth-child(10) img"))
})




// floor轮播
// box：大盒子；
// tp：轮播图；
// lis：轮播图下方选项；
// left：向左按钮；
// right：向右按钮；

$.extend({
	banner:function(box,tp,lis,left,right){
		$(document).ready(function(){
			var flag=true;
			var n=0;
			var next=0;
			var width=box.width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=tp.length){
					next=0;
				};
				lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(next).css("left",width).end().eq(n).animate({left:-width},1000).end().eq(next).animate({left:0},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			box.mouseover(function(){
				clearInterval(t);
				right.animate({width:30},0)
				left.animate({width:30},0)
			}).mouseout(function(){
				t=setInterval(tu,2500);
				right.animate({width:0},0)
				left.animate({width:0},0)
			});
		    left.click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=tp.length){
					next=0;
				};
		    	lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(next).css("left",-width).end().eq(n).animate({left:width},1000).end().eq(next).animate({left:0},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    right.click(function(){
		    	tu();
		    })
		     var index=lis.index();
		     lis.click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 tp.eq(index).css("left",width)
				 tp.eq(n).animate({left:-width},1000);
				 tp.eq(index).animate({left:0},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         		tp.eq(index).css("left",-width)
				 tp.eq(n).animate({left:width},1000);
				 tp.eq(index).animate({left:0},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	lis.removeClass("lis1-first").eq(index).addClass("lis1-first")
	         n=index;
	         next=index;
		     })
		})
	}
})

$(document).ready(function(){
	$.banner($(".five:eq(0) .lunbo"),$(".five:eq(0) .lunbo .lunbotu"),$(".five:eq(0) .lunbo .uls1 .lis1"),$(".five:eq(0) .lunbo .lunbo-left"),$(".five:eq(0) .lunbo .lunbo-right"))
	$.banner($(".five:eq(1) .lunbo"),$(".five:eq(1) .lunbo .lunbotu"),$(".five:eq(1) .lunbo .uls1 .lis1"),$(".five:eq(1) .lunbo .lunbo-left"),$(".five:eq(1) .lunbo .lunbo-right"))
	$.banner($(".five:eq(2) .lunbo"),$(".five:eq(2) .lunbo .lunbotu"),$(".five:eq(2) .lunbo .uls1 .lis1"),$(".five:eq(2) .lunbo .lunbo-left"),$(".five:eq(2) .lunbo .lunbo-right"))
	$.banner($(".five:eq(3) .lunbo"),$(".five:eq(3) .lunbo .lunbotu"),$(".five:eq(3) .lunbo .uls1 .lis1"),$(".five:eq(3) .lunbo .lunbo-left"),$(".five:eq(3) .lunbo .lunbo-right"))
	$.banner($(".five:eq(4) .lunbo"),$(".five:eq(4) .lunbo .lunbotu"),$(".five:eq(4) .lunbo .uls1 .lis1"),$(".five:eq(4) .lunbo .lunbo-left"),$(".five:eq(4) .lunbo .lunbo-right"))
})



// 选项卡
// obj：选项；
// tp：选项下方内容；

$.extend({
		xxk:function(obj,tp,left){
			obj.hover(function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
				console.log(index)
			},function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
			})
			var n=0;
			var next=0;
			left.click(function(){
				next=n+1;    	
				if(next>=obj.length){
					next=0;
				};
		    	obj.removeClass("first").eq(next).addClass("first")
				tp.removeClass("first").eq(next).addClass("first");
				n=next;
			})
		}
})
$(document).ready(function(){
	$.xxk($(".five:eq(0) .five-two .ft-right .bt"),$(".five:eq(0) .five-three .fthree-right"),$(".five:eq(0) .five-three .five-threeRight"));
	$.xxk($(".five:eq(1) .five-two .ft-right .bt"),$(".five:eq(1) .five-three .fthree-right"),$(".five:eq(1) .five-three .five-threeRight"));
	$.xxk($(".five:eq(2) .five-two .ft-right .bt"),$(".five:eq(2) .five-three .fthree-right"),$(".five:eq(2) .five-three .five-threeRight"));
	$.xxk($(".five:eq(3) .five-two .ft-right .bt"),$(".five:eq(3) .five-three .fthree-right"),$(".five:eq(3) .five-three .five-threeRight"));
	$.xxk($(".five:eq(4) .five-two .ft-right .bt"),$(".five:eq(4) .five-three .fthree-right"),$(".five:eq(4) .five-three .five-threeRight"));
})

//楼层跳转
$(document).ready(function(){
    var cheight=document.documentElement.clientHeight;
    var cwidth=document.documentElement.clientWidth;
    var floor=$('.five');
    var floor_lis=$('.etitle');
    var floor_nav=$('.floor-nav')[0];
    var nheight;
    var zsj=$(".zsj");
    var now;
    var flag=true;
    var flag2=true;
    for(var i=0;i<floor.length;i++){
        floor[i].h=floor[i].offsetTop;
    }
    window.onscroll=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var top=obj.scrollTop;
        if(top>=floor[0].h-300){
            floor_nav.style.display='block';
            nheight=floor_nav.offsetHeight;
            floor_nav.style.top=(cheight-nheight)/2+'px';
            if(flag==true){
                flag=false;
            }flag=true;
        }
        if(top<floor[0].h-300){
            floor_nav.style.display='none';
            if(flag2==true){
                flag2=false;
            }flag2=true;
        }
        // 出现对应的颜色
        for(var i=0;i<floor.length;i++){
            if(top>=floor[i].h-200){
                for(var j=0;j<floor_lis.length;j++){
                    // floor_lis[j].style.color='#625351';
                    floor_lis.eq(j).css("color","#625351")
                    zsj.eq(j).css("display","none")
                }
                // floor_lis[i].style.color='#C81576'
                floor_lis.eq(i).css("color","#C81623")
                zsj.eq(i).css("display","block")
                now=i;
            }
        }

        // 点击返回对应的楼层
        for(var i=0;i<floor_lis.length;i++){
            floor_lis[i].index=i;

            floor_lis[i].onclick=function(){

                // animate(document.body,{scrollTop:floor[this.index].h});
                $('html,body').animate({scrollTop:floor[this.index].h});
                now=this.index;
            }
            floor_lis[i].onmouseover=function(){
                if(this.index==now){
                    return;
                }
                this.style.color='#c81623'
            }
            floor_lis[i].onmouseout=function(){
                if(this.index==now){
                    return;
                }

                this.style.color='#625351'
                
            }
        }
    }
})