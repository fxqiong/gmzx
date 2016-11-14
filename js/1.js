$(function(){







// 回到顶部
	var obj=document.body.scrollTop?
			document.body:document.documentElement;
	var back=$(".backDing")[0];
	back.onclick=function(){			
		animate(document.body,{scrollTop:0},100);
		animate(document.documentElement,{scrollTop:0},100);
	}





// 回到顶部动画
	var topImg=$(".topImg");
	for(var i=0;i<topImg.length;i++){
		hover(topImg[i],function(){
			var width=this.offsetWidth;
			this.style.background="#B1191A";
			this.style.overflow="inherit";
			var ul=$(".tab-text",this)[0];
			animate(ul,{width:80},300);
		},function(){
			var that=this;
			that.style.background="#7A6E6E";
			that.style.overflow="hidden";
			var ul=$(".tab-text",this)[0];
			animate(ul,{width:0},100);
		})
	}







  //热门晒单
	  var readall=$(".read")[0]
	  var reads=$(".read1");

	  console.log(reads)
	  reads[0].style.top=0;
	  reads[1].style.top=123+"px";
	  for(var i=0;i<reads.length;i++){
	    if(i>1){
	      reads[i].style.top=-123+"px";
	    }
	  }

	  var nowday=0;
	  var front;
	  var nextday=0;
	  var ct=setInterval(xiabo,2000)
	  readall.onmouseover=function(){
	    clearInterval(ct)
	  }
	  readall.onmouseout=function(){
	    ct=setInterval(xiabo,2000)
	  }
	  function xiabo(){
	    front=nowday-1
	    nextday=nowday+1
	    if(front<0)
	    {
	      front=reads.length-1
	    }
	    if(nextday==reads.length)
	    {
	      nextday=0;
	    }
	    reads[front].style.top=-123+"px";
	    animate(reads[nowday],{top:123})
	    animate(reads[front],{top:0})
	    animate(reads[nextday],{top:246})
	    nowday=front;
	    nextday=nowday;
	  }

})