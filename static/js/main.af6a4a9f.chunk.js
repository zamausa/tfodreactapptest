(this.webpackJsonpreactapptestausa=this.webpackJsonpreactapptestausa||[]).push([[0],{246:function(e,t,n){e.exports=n(289)},251:function(e,t,n){},257:function(e,t){},258:function(e,t){},266:function(e,t){},276:function(e,t){},277:function(e,t){},278:function(e,t){},279:function(e,t){},287:function(e,t){},288:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(63),a=n.n(r),o=n(221),c=n.n(o),i=(n(251),n(5)),u=n.n(i),s=n(11),l=n(90),d=n(244),f=n.n(d),h=(n(288),n(4)),g={1:{name:"person",color:"red"},2:{name:"ThumbsDown",color:"yellow"},3:{name:"ThankYou",color:"lime"},4:{name:"LiveLong",color:"blue"}},m=function(e,t,n,r,a,o,c){for(var i=0;i<=e.length;i++)if(e[i]&&t[i]&&n[i]>r){var u=Object(h.a)(e[i],4),s=u[0],l=u[1],d=u[2],f=u[3],m=t[i];c.strokeStyle=g[m].color,c.lineWidth=5,c.fillStyle="white",c.font="30px Arial",c.beginPath(),c.fillText(g[m].name+" - "+Math.round(100*n[i])/100,l*a,s*o-10),c.rect(l*a,s*o,f*a/2,d*o/2),c.stroke()}};var p=function(){var e,t,n,o,c,i,d,h=Object(r.useRef)(null),g=Object(r.useRef)(null),p=!1,v=new Image,b=function(){var e=Object(s.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d("https://testtfodausa.s3.eu-de.cloud-object-storage.appdomain.cloud/model.json");case 2:n=e.sent,setInterval((function(){x(n)}),16.7),t||(console.log(t),t=setInterval((function(){w()}),5e3),console.log(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(){if(p){var t=document.createElement("canvas");t.width=640,t.height=480;var r=t.getContext("2d");v&&n&&o&&c&&i&&(r.drawImage(v,0,0),console.log("funzione",n,o,c,i)),e=t.toDataURL("image/jpeg"),document.getElementById("screenshot").src=e,p=!1}}var x=function(){var e=Object(s.a)(u.a.mark((function e(t){var r,a,s,f,v,b,w,x,y,E,j,k,A;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof h.current||null===h.current||4!==h.current.video.readyState){e.next=32;break}return r=h.current.video,a=h.current.video.videoWidth,s=h.current.video.videoHeight,h.current.video.width=a,h.current.video.height=s,g.current.width=a,g.current.height=s,f=l.a.fromPixels(r),v=l.c.resizeBilinear(f,[640,480]),b=v.cast("int32"),w=b.expandDims(0),e.next=14,t.executeAsync(w);case 14:return x=e.sent,e.next=17,x[1].array();case 17:return y=e.sent,e.next=20,x[0].array();case 20:return E=e.sent,e.next=23,x[4].array();case 23:j=e.sent,k=g.current.getContext("2d"),requestAnimationFrame((function(){m(y[0],E[0],j[0],.7,a,s,k)})),j[0][0]>.7&&(A=new Image,p=!0,console.log("gg"),n=y[0][0][0],o=y[0][0][1],c=y[0][0][2]-y[0][0][0],i=y[0][0][3]-y[0][0][1],console.log("sdrogo",n,o,c,i),d=h.current.video.getScreenshot(),A.src=d,console.log("webcam aggiornata")),l.b(f),l.b(v),l.b(b),l.b(w),l.b(x);case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(f.a,{ref:h,id:"webcam",muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),a.a.createElement("canvas",{ref:g,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}}),a.a.createElement("img",{id:"screenshot",alt:"Screenshot",style:{width:680,height:480}})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.af6a4a9f.chunk.js.map