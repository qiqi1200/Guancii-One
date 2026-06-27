---
title: 'deepseek灰度测试'
description: '昨天晚上灰度到了dsv4.1,用他写了个代码，很不错期待一手☺️'
date: 2026-06-27
tags: ['AI']
draft: false
---
代码如下：
<canvas id=c>
<script>
let w,h,X,Y,Mx,My,P=[],i,N=450,t=0,c=document.getElementById('c'),C=c.getContext('2d');
onresize=_=>{w=c.width=innerWidth;h=c.height=innerHeight;X=w/2;Y=h/2;Mx=X;My=Y};
onmousemove=e=>{Mx=e.clientX;My=e.clientY};
onresize();
for(i=N;i--;)P[i]=[Math.random()*6.28,Math.random()*2-1,Math.random()*9];
draw=_=>{
  t+=.02;
  C.globalCompositeOperation='source-over';
  C.fillStyle='rgba(0,0,0,.18)';
  C.fillRect(0,0,w,h);
  C.globalCompositeOperation='lighter';
  let cx=X+(Mx-X)*.12, cy=Y+(My-Y)*.12;
  for(i=N;i--;){
    let[a,r,d]=P[i];
    let aa=a+t*r*.35;
    let si=Math.sin(aa);
    let hx=16*si*si*si;
    let hy=13*Math.cos(aa)-5*Math.cos(2*aa)-2*Math.cos(3*aa)-Math.cos(4*aa);
    let sc=6.5+4.5*Math.sin(t*.6+d);
    let px=cx+hx*sc;
    let py=cy-hy*sc+7*Math.sin(t*1.4+d);
    let hue=(a*180/Math.PI+t*90+d*30)%360;
    C.beginPath();
    C.arc(px,py,1.6+Math.sin(t*2.2+d)*.9,0,7);
    C.fillStyle='hsl('+hue+',90%,65%)';
    C.fill();
  }
  requestAnimationFrame(draw);
}
draw();
</script>
