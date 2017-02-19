/**
 * @(#)Rtoaster.Popup.js
 * Copyright (c) 2016 BrainPad, Inc. All right reserved.
 * @version 2.0.0
 * @see <a href="http://www.rtoaster.com/">Rtoaster web site</a>
 */
if(typeof Rtoaster!=="undefined"&&typeof Rtoaster.Popup==="undefined"){Rtoaster.Popup={closeIconSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAaVBMVEVMaXEpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqKiovLy8rKystLSwrLCsuLi4xMTHExMQ3ODhcXFwpKSnm5uY7Oztzc3J1dHWLi4utra1OT09TUlLrlZEmAAAAEHRSTlMAP/DcmvpGKPPHQ93Yor8pA03rgQAAALxJREFUeF49j1eShDAMBTVgA2bCKtkmTbz/IVdod+iSquSu548HzhjaGNswwpf+plQM0lsPzmnI5Z88nDzTUDmgZs8lzxy5BDByofKZt1K2+WOORwhCRI+1bltdH3ZKgDaTu9fLDeUWIrl7ruvTD4owZMeVE+EiIlnu+8e75CxyhiuLmKnTVM2J8BU6ZNX3PLFO81tZsQNIzKw2tgYmL4TIbIu7aX7+auOB1Xb6tOCCNkvq4UsXznG4hM4fv0nGE4x2LSp9AAAAAElFTkSuQmCC"};(function(S){var P=S.Popup,D=window.document,A="createElement",B="absolute",C=S.Cookie,E="setProperty",F="display",G=function(e,n,v,s){if((s=e.style)[E]){s[E](n,""+v)}else{s[n]=v}},H="hasOwnProperty",I=function(e){return"rt_popup_overlay_"+e},J="position",K="offset",L=K+"Width",M="px",N=function(e){var s={},n=e[L],l=K+"Height";if(n!==0){s.w=n;s.h=e[l]}else{var k="visibility",t=e.style,p=t[J],v=t[k],d=t[F];G(e,J,B);G(e,k,"hidden");G(e,F,"block");s.w=e[L];s.h=e[l];G(e,J,p);G(e,k,v);G(e,F,d)}return s},O="object",Q="opacity",R=function(e,t){var r=t.getBoundingClientRect(),w=(e[L]-e.clientWidth)/2;G(t,"top",(r.bottom-r.top)/-2-w+M);G(t,"right",(r.right-r.left)/-2-w+M)},T={"width":"auto","height":"auto","opacity":1.0,"border":"1px solid #d9d9d9","border-radius":"5px","background-color":"#fff","box-shadow":"0 6px 15px 0 rgba(0,0,0,0.4)","padding":"15px 20px","z-index":1000},U=function(a){return(a=navigator.userAgent.toLowerCase()).indexOf("msie")===-1||parseInt(a.split("msie")[1])>9},V="getElementById",W="_rt.popup.cnt.",X=function(n){return parseInt(C.get(W+n)||0)},Y="appendChild",Z="string";P.show=function(p){var d={"overlay":0,"transit":Q,"place":"center","offset":10,"oid":I(p.id),"speed":0.2,"delay":20,"ctrl":0},e=D[V](p.id),f;for(f in T)if(T[H](f))d[f]=T[f];for(f in p)if(p[H](f))d[f]=p[f];for(f in T)if(T[H](f))G(e,f,d[f]);G(e,J,"fixed");var a="place",b="speed",c="currentPlace",g="margin-",h="50%",i,l="left",m=/^(top|bottom)(left|right)$/.exec(d[a]),n=d.size=N(e),r=P.closeIconSrc,s="movingStyle",t="top",x,y,z;d[s]=m?m[2]:d[a];if(m){G(e,m[1],d[K]+M);G(e,m[2],d[K]+M)}else{switch(d[a]){case"left":case"right":G(e,d[a],d[K]+M);G(e,t,h);G(e,g+t,(-1/2*n.h)+M);break;case"top":case"bottom":G(e,d[a],d[K]+M);G(e,l,h);G(e,g+l,(-1/2*n.w)+M);break;default:G(e,t,h);G(e,l,h);G(e,g+t,(-1/2*n.h)+M);G(e,g+l,(-1/2*n.w)+M)}}switch(d.transit){case"slidein":x=function(e,d){switch(d[s]){case"left":case"right":d[c]=-3/2*n.w;break;case"top":case"bottom":d[c]=-3/2*n.h;break;default:return}G(e,d[s],d[c]+M)},y=function(e,d){switch(d[s]){case"left":case"right":case"top":case"bottom":d[c]*=1.0-d[b];G(e,d[s],(d[c]+d[K])+M);return Math.abs(d[c])>2}},z=function(e,d){switch(d[s]){case"left":case"right":case"top":case"bottom":G(e,d[s],d[K]+M)}};break;default:x=function(e,d){G(e,Q,0.0)},y=function(e,d,f){G(e,Q,(f=parseFloat)(e.style[Q])+d[b]);return f(e.style[Q])<d[Q]-d[b]},z=function(e,d){G(e,Q,d[Q])}}if(d.overlay){var o=D[A]("div"),p="z-index";o.id=d.oid;D.body[Y](o);G(o,p,d[p]-10);G(o,J,"fixed");G(o,t,0);G(o,l,0);G(o,"width","100%");G(o,"height","150%");G(o,"background-color","#666");G(o,Q,"0.5");o.onclick=function(){P.close({"id":e.id,"oid":d.oid})}}if(r){i=D[A]("img");i.src=r;e[Y](i);G(i,F,"block");G(i,J,B);G(i,"cursor","pointer");i.onclick=function(){P.close({"id":e.id,"oid":d.oid})};S.observe(function(){R(e,i)},"resize")}x(e,d);G(e,F,"block");var v=setTimeout,w=function(){if(y(e,d))v(w,20);else{z(e,d);if(!d.ctrl)C.set({"key":W+d.id,"value":X(d.id)+1,"path":"/","expires":new Date(new Date().getTime()+31622400000).toUTCString()})}if(i)R(e,i)};v(w,d.delay)};P.register=function(p){if(U()){if(typeof p===Z)p={"id":p};if(typeof p===O){if(!p.limit)p.limit=1;if(X(p.id)<p.limit){var b=D.body,e=D[V](p.id);if(b&&!e){e=D[A]("div");e.id=p.id;G(e,F,"none");b[Y](e)}S.listen(p.id,function(e,o,i){if(typeof o===O){for(i in o)if(o[H](i))p[i]=o[i];p.ctrl=1}P.show(p)})}}}};P.close=function(p){if(U()){if(typeof p===Z)p={"id":p};if(typeof p===O&&typeof p.id===Z){var e=D[V](p.id),n="parentNode",r="removeChild";if(e){e[n][r](e);var o=D[V](p.oid||I(p.id));if(o)o[n][r](o)}}}}})(Rtoaster)}