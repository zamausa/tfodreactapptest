(this.webpackJsonpreactapptestausa=this.webpackJsonpreactapptestausa||[]).push([[0],{202:function(e,t){function o(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=202},227:function(e,t,o){e.exports=o(252)},232:function(e,t,o){},237:function(e,t){},238:function(e,t){},246:function(e,t){},248:function(e,t){},249:function(e,t){},250:function(e,t){},251:function(e,t,o){},252:function(e,t,o){"use strict";o.r(t);var n=o(41),a=o.n(n),c=o(203),i=o.n(c),l=(o(232),o(58)),s=o(42),r=o(225),d=o.n(r);o(251),o(201);const g={1:{name:"person",color:"red"},2:{name:"cartellino",color:"yellow"},3:{name:"ThankYou",color:"lime"},4:{name:"LiveLong",color:"blue"}},u=(e,t,o,n,a,c,i,l)=>{for(let r=0;r<=e.length;r++)if(e[r]&&t[r]&&o[r]>n){const[n,d,u,h]=e[r];var s=t[r];1!==s||l?1===s&&l&&(console.log("cartellino"),console.log(e[r]),s=2,i.strokeStyle=g[s].color,i.lineWidth=2,console.log("provaprovaprova"),i.fillStyle="white",i.font="30px Arial",console.log(i.lineWidth),i.beginPath(),i.fillText(g[s].name+" - "+Math.round(100*o[r])/100,d*a,n*c-10),i.rect(d*a,n*c,(h-d)*a,(u-n)*c),i.stroke()):(console.log("persona"),i.strokeStyle=g[s].color,i.lineWidth=5,i.fillStyle="white",i.font="30px Arial",i.beginPath(),i.fillText(g[s].name+" - "+Math.round(100*o[r])/100,d*a,n*c-10),i.rect(d*a,n*c,(h-d)*a,(u-n)*c),i.stroke())}};var h=[],m=[];var p=function(){const e=Object(n.useRef)(null),t=Object(n.useRef)(null),[c,i]=Object(n.useState)("webcam");var[r,g]=Object(n.useState)({width:1440,height:1080});const p=o(201);var f,w,v,b,y,x,E,C=!1,j=(new Image,[]),k=[],O=[],I=[],L=[],N=[],A=0,D=new Set;const R=document.createElement("li");var S,U;R.id="lista immagini",R.style.display="block",document.createElement("div").style.display="block";var M=[];async function T(e,t,o){const n=A++,a=new Image(640,480);a.src=e.src,a.id=t,a.onload=await(async function(){const e=await Promise.all(["Elon Musk","Marco","Obama"].map(async e=>{var t=[];for(E=1;E<=8;E++){const o=await l.g("/tfodreactapptest"+"/labels/".concat(e,"/").concat(E,".jpeg")),n=await l.e(o).withFaceLandmarks().withFaceDescriptor();t.push(n.descriptor)}return new l.b(e,t)})),t=new l.a(e),c=l.c(a),i={width:640,height:480};l.h(c,i);const s=await l.d(a).withFaceLandmarks().withFaceDescriptors(),r=l.j(s,i),d=r.map(e=>t.findBestMatch(e.descriptor));console.log(d.length);var g=0;if(0!==d.length){if(r.length>=1){const e=t.findBestMatch(r[0].descriptor),i=r[0].detection.box,s=new l.f.DrawBox(i,{label:e});console.log(e),console.log(i),console.log(s),console.log(n),c.width=640,c.height=480,c.style.zIndex=10,c.id="ritaglio";const d=c.getContext("2d"),u=document.createElement("div");u.style.display="flex";let p=!0;console.log("prima "+n),!D.has(a.src)&&p&&!("undefined"===typeof a)&!("undefined"===typeof a.src)&&(console.log("dentro "+n),await d.drawImage(a,0,0),await s.draw(c),document.body.append(R),u.appendChild(c),g=document.createTextNode(a.id+" "),console.log(g),u.appendChild(g),u.id=g.textContent,u.className="immagini",R.appendChild(u),console.log("container "+n),p=!1,D.add(a.src),h.push(c.toDataURL()),console.log(h.length),m.push(a.id),console.log(h),console.log(D.size),console.log(a.src),console.log("seconda chiamata if"),await B(a,o,c,u)),console.log("dopo "+n)}}else{c.width=640,c.height=480,c.style.zIndex=10,c.id="ritaglio";const e=c.getContext("2d"),t=document.createElement("div");t.style.display="flex",t.setAttribute("name","No");let i=!0;console.log("ggggggg"),!D.has(a.src)&&i&&!("undefined"===typeof a)&!("undefined"===typeof a.src)&&(console.log("dentro "+n),await e.drawImage(a,0,0),document.body.append(R),t.appendChild(c),g=document.createTextNode(a.id+" "),console.log(g),t.appendChild(g),t.id=g.textContent,t.className="immagini",R.appendChild(t),console.log("container "+n),i=!1,D.add(a.src),console.log(t),await B(a,o,c,t),console.log("seconda chiamta else"))}})}async function B(e,t,o,n){console.log("inizio seconda detect"),console.log(n),console.log(t);const a=await s.a.fromPixels(e),c=await s.c.resizeBilinear(a,[640,480]),i=await c.cast("int32"),l=await i.expandDims(0),r=await t.executeAsync(l),d=await r[2].array(),g=await r[0].array(),h=await r[4].array();console.log(d[0]);const m=o.getContext("2d");if(u(d[0],g[0],h[0],.5,e.width,e.height,m,!0),h[0][0]>.5){var p=100*h[0][0].toFixed(2);console.log(p);var f=document.createTextNode("Cartellino RILEVATO: "+p+"%");console.log(f),console.log(n),n.appendChild(f),n.setAttribute("perc",p)}else{null!==p&&"undefined"!==typeof p||(p=0),console.log(p);f=document.createTextNode("Cartellino NON rilevato: "+p+"%");n.appendChild(f),n.setAttribute("perc",p)}return console.log("fine seconda detect"),s.b(a),s.b(c),s.b(i),s.b(l),s.b(r),p}async function z(e,t,o,n,a,c,i){if(e&&t&&o&&n&&a&&c){var l=document.createElement("canvas");l.width=640,l.height=480;var s=l.getContext("2d"),r=new Image(640,480);r.src=e,r.onload=async function(){await s.drawImage(r,640*t,480*o,640*n,480*a,0,0,640*n,480*a),f=await l.toDataURL("image/png"),document.getElementById("screenshot").src=f,C=!1;document.getElementById("screenshot");var e=document.createElement("img");e.src=await f,M.push(e),console.log("face recognition"),await async function(e,t,o){for(var n=0;n<e.length;n++){var a=e[n];await T(a,t,o)}}(M.slice(),c.slice(),i)}}}async function F(e,t,o,n,a,c,i,l){if(e&&i&&c&&t&&o&&n&&a)for(var s=0;s<i.length;s++)await z(i[s],t[s],o[s],n[s],a[s],c[s],l)}navigator.mediaDevices.enumerateDevices().then(e=>console.log(e));const P=async(o,n)=>{var a=document.getElementById("webcam");if("undefined"!==typeof e.current&&null!==e.current&&4===e.current.video.readyState){console.log("Pausing the webcam stream..."),e.current.video.pause(),U=((S=new Date).getHours()<10?"0"+S.getHours():S.getHours())+":"+(S.getMinutes()<10?"0"+S.getMinutes():S.getMinutes())+":"+(S.getSeconds()<10?"0"+S.getSeconds():S.getSeconds());var c=a.currentTime;console.log(c),console.log("Webcam stream paused.");const i=e.current.video,l=e.current.video.srcObject,r=e.current.video.videoWidth,d=e.current.video.videoHeight;e.current.video.width=r,e.current.video.height=d,t.current.width=r,t.current.height=d;const g=await s.a.fromPixels(i),h=await s.c.resizeBilinear(g,[640,480]),m=await h.cast("int32"),p=await m.expandDims(0),f=await o.executeAsync(p),E=await f[1].array(),A=await f[0].array(),D=await f[4].array(),R=t.current.getContext("2d");j=[],k=[],N=[],L=[],O=[],I=[],M=[],await async function(){for(var t=0;t<D[0].length;t++)if(D[0][t]>.4&&1==A[0][t])x=await e.current.getScreenshot(),j.push(x),k.push(U),C=!0,w=E[0][t][1],O.push(w),v=E[0][t][0],I.push(v),b=E[0][t][3]-E[0][t][1],L.push(b),y=E[0][t][2]-E[0][t][0],N.push(y);else if(C){await F(C,O.slice(),I.slice(),L.slice(),N.slice(),k.slice(),j.slice(),n);break}}(),console.log(E[0][0]);u(E[0],A[0],D[0],.4,r,d,R,!1),34.48===c&&(c=0),e.current.video.srcObject=null,a.currentTime=await c,e.current.video.srcObject=await l,s.b(g),s.b(h),s.b(m),s.b(p),s.b(f)}return x};return Object(n.useEffect)(()=>{(async()=>{const e=await s.d("https://testtfodausa.s3.eu-de.cloud-object-storage.appdomain.cloud/model.json"),t=await s.d("https://testtfodappcartellino.s3.eu-de.cloud-object-storage.appdomain.cloud/model.json");Promise.all([l.i.ssdMobilenetv1.loadFromUri("/tfodreactapptest/models"),l.i.faceLandmark68Net.loadFromUri("/tfodreactapptest/models"),l.i.faceRecognitionNet.loadFromUri("/tfodreactapptest/models")]),setInterval(()=>{P(e,t)},5e3)})()},[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(d.a,{ref:e,videoConstraints:r,id:"webcam",muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),a.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}}),a.a.createElement("img",{id:"screenshot",alt:"Screenshot",style:{width:640,height:480}})),a.a.createElement("button",{onClick:function(){var t=document.getElementById("webcam");e.current.video.srcObject&&(e.current.video.pause(),e.current.video.srcObject=null,t.src="/tfodreactapptest/video/alley.mp4",t.width=640,t.height=480,t.style.width="640px",t.style.height="480px",t.style.aspectRatio="4 / 3",t.play())}},"Test video 1"),a.a.createElement("button",{onClick:function(){var t=e.current.video;if(!t.srcObject){const e={video:{width:1440,height:1080}};navigator.mediaDevices.getUserMedia(e).then(e=>{t.srcObject=e,t.width=1440,t.height=1080,t.play(),i("webcam")}).catch(e=>{console.error("Error accessing webcam:",e)})}}},"Attiva Webcam"),a.a.createElement("button",{onClick:function(){const e=h;console.log(e),console.log(e.length),console.log(m.length),console.log(m);const t=new p,o=[];e.forEach((e,n)=>{const a=new Image;a.src=e;const c=new Promise(e=>{a.onload=function(){const o=document.createElement("canvas"),c=o.getContext("2d");o.width=a.width,o.height=a.height,c.drawImage(a,0,0);const i=o.toDataURL("image/png");console.log(n),console.log(m[n]),t.file("".concat(m[n].replace(/:/g,"-"),"(").concat(n,").png"),i.split(",")[1],{base64:!0}),e()}});o.push(c)}),Promise.all(o).then(()=>{t.generateAsync({type:"blob"}).then((function(e){const t=new Blob([e]),o=URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download="images.zip",n.click(),URL.revokeObjectURL(o)}))})}},"Scarica risultati"))};function f(){i.a.render(a.a.createElement(p,null),document.getElementById("root"))}f(),window.onload=function(){f()}}},[[227,1,2]]]);
//# sourceMappingURL=main.3d30aaf3.chunk.js.map