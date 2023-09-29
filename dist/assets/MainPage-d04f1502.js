import{o as tt,r as br,g as wi,j as R}from"./index-81a41ec9.js";var Q=function(){return Q=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Q.apply(this,arguments)};function $t(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var H="-ms-",Qe="-moz-",P="-webkit-",yn="comm",_t="rule",vr="decl",$i="@import",bn="@keyframes",Si="@layer",ki=Math.abs,wr=String.fromCharCode,ir=Object.assign;function Ci(e,t){return Y(e,0)^45?(((t<<2^Y(e,0))<<2^Y(e,1))<<2^Y(e,2))<<2^Y(e,3):0}function vn(e){return e.trim()}function ye(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,r){return e.replace(t,r)}function pt(e,t){return e.indexOf(t)}function Y(e,t){return e.charCodeAt(t)|0}function ze(e,t,r){return e.slice(t,r)}function ue(e){return e.length}function wn(e){return e.length}function Xe(e,t){return t.push(e),e}function ji(e,t){return e.map(t).join("")}function Hr(e,t){return e.filter(function(r){return!ye(r,t)})}var It=1,Ne=1,$n=0,ne=0,G=0,Ve="";function Tt(e,t,r,n,i,s,a,l){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:It,column:Ne,length:a,return:"",siblings:l}}function ve(e,t){return ir(Tt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Pe(e){for(;e.root;)e=ve(e.root,{children:[e]});Xe(e,e.siblings)}function _i(){return G}function Ii(){return G=ne>0?Y(Ve,--ne):0,Ne--,G===10&&(Ne=1,It--),G}function ce(){return G=ne<$n?Y(Ve,ne++):0,Ne++,G===10&&(Ne=1,It++),G}function _e(){return Y(Ve,ne)}function ft(){return ne}function At(e,t){return ze(Ve,e,t)}function or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ti(e){return It=Ne=1,$n=ue(Ve=e),ne=0,[]}function Ai(e){return Ve="",e}function Yt(e){return vn(At(ne-1,sr(e===91?e+2:e===40?e+1:e)))}function Ri(e){for(;(G=_e())&&G<33;)ce();return or(e)>2||or(G)>3?"":" "}function Pi(e,t){for(;--t&&ce()&&!(G<48||G>102||G>57&&G<65||G>70&&G<97););return At(e,ft()+(t<6&&_e()==32&&ce()==32))}function sr(e){for(;ce();)switch(G){case e:return ne;case 34:case 39:e!==34&&e!==39&&sr(G);break;case 40:e===41&&sr(e);break;case 92:ce();break}return ne}function Li(e,t){for(;ce()&&e+G!==47+10;)if(e+G===42+42&&_e()===47)break;return"/*"+At(t,ne-1)+"*"+wr(e===47?e:ce())}function Ei(e){for(;!or(_e());)ce();return At(e,ne)}function Bi(e){return Ai(ht("",null,null,null,[""],e=Ti(e),0,[0],e))}function ht(e,t,r,n,i,s,a,l,u){for(var p=0,g=0,x=a,y=0,h=0,$=0,C=1,B=1,j=1,f=0,v="",T=i,w=s,k=n,m=v;B;)switch($=f,f=ce()){case 40:if($!=108&&Y(m,x-1)==58){pt(m+=_(Yt(f),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:m+=Yt(f);break;case 9:case 10:case 13:case 32:m+=Ri($);break;case 92:m+=Pi(ft()-1,7);continue;case 47:switch(_e()){case 42:case 47:Xe(Hi(Li(ce(),ft()),t,r,u),u);break;default:m+="/"}break;case 123*C:l[p++]=ue(m)*j;case 125*C:case 59:case 0:switch(f){case 0:case 125:B=0;case 59+g:j==-1&&(m=_(m,/\f/g,"")),h>0&&ue(m)-x&&Xe(h>32?Nr(m+";",n,r,x-1,u):Nr(_(m," ","")+";",n,r,x-2,u),u);break;case 59:m+=";";default:if(Xe(k=zr(m,t,r,p,g,i,l,v,T=[],w=[],x,s),s),f===123)if(g===0)ht(m,t,k,k,T,s,x,l,w);else switch(y===99&&Y(m,3)===110?100:y){case 100:case 108:case 109:case 115:ht(e,k,k,n&&Xe(zr(e,k,k,0,0,i,l,v,i,T=[],x,w),w),i,w,x,l,n?T:w);break;default:ht(m,k,k,k,[""],w,0,l,w)}}p=g=h=0,C=j=1,v=m="",x=a;break;case 58:x=1+ue(m),h=$;default:if(C<1){if(f==123)--C;else if(f==125&&C++==0&&Ii()==125)continue}switch(m+=wr(f),f*C){case 38:j=g>0?1:(m+="\f",-1);break;case 44:l[p++]=(ue(m)-1)*j,j=1;break;case 64:_e()===45&&(m+=Yt(ce())),y=_e(),g=x=ue(v=m+=Ei(ft())),f++;break;case 45:$===45&&ue(m)==2&&(C=0)}}return s}function zr(e,t,r,n,i,s,a,l,u,p,g,x){for(var y=i-1,h=i===0?s:[""],$=wn(h),C=0,B=0,j=0;C<n;++C)for(var f=0,v=ze(e,y+1,y=ki(B=a[C])),T=e;f<$;++f)(T=vn(B>0?h[f]+" "+v:_(v,/&\f/g,h[f])))&&(u[j++]=T);return Tt(e,t,r,i===0?_t:l,u,p,g,x)}function Hi(e,t,r,n){return Tt(e,t,r,yn,wr(_i()),ze(e,2,-2),0,n)}function Nr(e,t,r,n,i){return Tt(e,t,r,vr,ze(e,0,n),ze(e,n+1,-1),n,i)}function Sn(e,t,r){switch(Ci(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Qe+e+H+e+e;case 5936:switch(Y(e,t+11)){case 114:return P+e+H+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+H+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+H+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+H+e+e;case 6165:return P+e+H+"flex-"+e+e;case 5187:return P+e+_(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return P+e+H+"flex-item-"+_(e,/flex-|-self/g,"")+(ye(e,/flex-|baseline/)?"":H+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return P+e+H+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+H+_(e,"shrink","negative")+e;case 5292:return P+e+H+_(e,"basis","preferred-size")+e;case 6060:return P+"box-"+_(e,"-grow","")+P+e+H+_(e,"grow","positive")+e;case 4554:return P+_(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!ye(e,/flex-|baseline/))return H+"grid-column-align"+ze(e,t)+e;break;case 2592:case 3360:return H+_(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,ye(n.props,/grid-\w+-end/)})?~pt(e+(r=r[t].value),"span")?e:H+_(e,"-start","")+e+H+"grid-row-span:"+(~pt(r,"span")?ye(r,/\d+/):+ye(r,/\d+/)-+ye(e,/\d+/))+";":H+_(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ye(n.props,/grid-\w+-start/)})?e:H+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ue(e)-1-t>6)switch(Y(e,t+1)){case 109:if(Y(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Qe+(Y(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pt(e,"stretch")?Sn(_(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,a,l,u,p){return H+i+":"+s+p+(a?H+i+"-span:"+(l?u:+u-+s)+p:"")+e});case 4949:if(Y(e,t+6)===121)return _(e,":",":"+P)+e;break;case 6444:switch(Y(e,Y(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(Y(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+H+"$2box$3")+e;case 100:return _(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function St(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function zi(e,t,r,n){switch(e.type){case Si:if(e.children.length)break;case $i:case vr:return e.return=e.return||e.value;case yn:return"";case bn:return e.return=e.value+"{"+St(e.children,n)+"}";case _t:if(!ue(e.value=e.props.join(",")))return""}return ue(r=St(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ni(e){var t=wn(e);return function(r,n,i,s){for(var a="",l=0;l<t;l++)a+=e[l](r,n,i,s)||"";return a}}function Oi(e){return function(t){t.root||(t=t.return)&&e(t)}}function Di(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case vr:e.return=Sn(e.value,e.length,r);return;case bn:return St([ve(e,{value:_(e.value,"@","@"+P)})],n);case _t:if(e.length)return ji(r=e.props,function(i){switch(ye(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pe(ve(e,{props:[_(i,/:(read-\w+)/,":"+Qe+"$1")]})),Pe(ve(e,{props:[i]})),ir(e,{props:Hr(r,n)});break;case"::placeholder":Pe(ve(e,{props:[_(i,/:(plac\w+)/,":"+P+"input-$1")]})),Pe(ve(e,{props:[_(i,/:(plac\w+)/,":"+Qe+"$1")]})),Pe(ve(e,{props:[_(i,/:(plac\w+)/,H+"input-$1")]})),Pe(ve(e,{props:[i]})),ir(e,{props:Hr(r,n)});break}return""})}}var Mi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$r=typeof window<"u"&&"HTMLElement"in window,Fi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Rt=Object.freeze([]),De=Object.freeze({});function Gi(e,t,r){return r===void 0&&(r=De),e.theme!==r.theme&&e.theme||t||r.theme}var kn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yi=/(^-|-$)/g;function Or(e){return e.replace(Wi,"-").replace(Yi,"")}var Ui=/(a)(d)/gi,Dr=function(e){return String.fromCharCode(e+(e>25?39:97))};function ar(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Dr(t%52)+r;return(Dr(t%52)+r).replace(Ui,"$1-$2")}var Ut,Be=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Cn=function(e){return Be(5381,e)};function Vi(e){return ar(Cn(e)>>>0)}function Ki(e){return e.displayName||e.name||"Component"}function Vt(e){return typeof e=="string"&&!0}var jn=typeof Symbol=="function"&&Symbol.for,_n=jn?Symbol.for("react.memo"):60115,qi=jn?Symbol.for("react.forward_ref"):60112,Zi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ji=((Ut={})[qi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ut[_n]=In,Ut);function Mr(e){return("type"in(t=e)&&t.type.$$typeof)===_n?In:"$$typeof"in e?Ji[e.$$typeof]:Zi;var t}var Qi=Object.defineProperty,eo=Object.getOwnPropertyNames,Fr=Object.getOwnPropertySymbols,to=Object.getOwnPropertyDescriptor,ro=Object.getPrototypeOf,Gr=Object.prototype;function Tn(e,t,r){if(typeof t!="string"){if(Gr){var n=ro(t);n&&n!==Gr&&Tn(e,n,r)}var i=eo(t);Fr&&(i=i.concat(Fr(t)));for(var s=Mr(e),a=Mr(t),l=0;l<i.length;++l){var u=i[l];if(!(u in Xi||r&&r[u]||a&&u in a||s&&u in s)){var p=to(t,u);try{Qi(e,u,p)}catch{}}}}return e}function Me(e){return typeof e=="function"}function Sr(e){return typeof e=="object"&&"styledComponentId"in e}function Ce(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wr(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function rt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cr(e,t,r){if(r===void 0&&(r=!1),!r&&!rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=cr(e[n],t[n]);else if(rt(t))for(var n in t)e[n]=cr(e[n],t[n]);return e}function kr(e,t){Object.defineProperty(e,"toString",{value:t})}function st(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var no=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw st(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,a=i;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),mt=new Map,kt=new Map,Kt=1,lt=function(e){if(mt.has(e))return mt.get(e);for(;kt.has(Kt);)Kt++;var t=Kt++;return mt.set(e,t),kt.set(t,e),t},io=function(e,t){mt.set(e,t),kt.set(t,e)},oo="style[".concat(Oe,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),so=new RegExp("^".concat(Oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ao=function(e,t,r){for(var n,i=r.split(","),s=0,a=i.length;s<a;s++)(n=i[s])&&e.registerName(t,n)},co=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],s=0,a=n.length;s<a;s++){var l=n[s].trim();if(l){var u=l.match(so);if(u){var p=0|parseInt(u[1],10),g=u[2];p!==0&&(io(g,p),ao(e,g,u[3]),e.getTag().insertRules(p,i)),i.length=0}else i.push(l)}}};function lo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var An=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Oe,"]")));return u[u.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(Oe,"active"),n.setAttribute("data-styled-version","6.0.8");var a=lo();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},uo=function(){function e(t){this.element=An(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var a=n[i];if(a.ownerNode===r)return a}throw st(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),po=function(){function e(t){this.element=An(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yr=$r,ho={isServer:!$r,useCSSOMInjection:!Fi},Rn=function(){function e(t,r,n){t===void 0&&(t=De),r===void 0&&(r={});var i=this;this.options=Q(Q({},ho),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&$r&&Yr&&(Yr=!1,function(s){for(var a=document.querySelectorAll(oo),l=0,u=a.length;l<u;l++){var p=a[l];p&&p.getAttribute(Oe)!=="active"&&(co(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),kr(this,function(){return function(s){for(var a=s.getTag(),l=a.length,u="",p=function(x){var y=function(j){return kt.get(j)}(x);if(y===void 0)return"continue";var h=s.names.get(y),$=a.getGroup(x);if(h===void 0||$.length===0)return"continue";var C="".concat(Oe,".g").concat(x,'[id="').concat(y,'"]'),B="";h!==void 0&&h.forEach(function(j){j.length>0&&(B+="".concat(j,","))}),u+="".concat($).concat(C,'{content:"').concat(B,'"}').concat(`/*!sc*/
`)},g=0;g<l;g++)p(g);return u}(i)})}return e.registerId=function(t){return lt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Q(Q({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new fo(i):n?new uo(i):new po(i)}(this.options),new no(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(lt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(lt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(lt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mo=/&/g,go=/^\s*\/\/.*$/gm;function Pn(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Pn(r.children,t)),r})}function xo(e){var t,r,n,i=e===void 0?De:e,s=i.options,a=s===void 0?De:s,l=i.plugins,u=l===void 0?Rt:l,p=function(y,h,$){return $===r||$.startsWith(r)&&$.endsWith(r)&&$.replaceAll(r,"").length>0?".".concat(t):y},g=u.slice();g.push(function(y){y.type===_t&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(mo,r).replace(n,p))}),a.prefix&&g.push(Di),g.push(zi);var x=function(y,h,$,C){h===void 0&&(h=""),$===void 0&&($=""),C===void 0&&(C="&"),t=C,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var B=y.replace(go,""),j=Bi($||h?"".concat($," ").concat(h," { ").concat(B," }"):B);a.namespace&&(j=Pn(j,a.namespace));var f=[];return St(j,Ni(g.concat(Oi(function(v){return f.push(v)})))),f};return x.hash=u.length?u.reduce(function(y,h){return h.name||st(15),Be(y,h.name)},5381).toString():"",x}var yo=new Rn,lr=xo(),Ln=tt.createContext({shouldForwardProp:void 0,styleSheet:yo,stylis:lr});Ln.Consumer;tt.createContext(void 0);function Ur(){return br.useContext(Ln)}var bo=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=lr);var a=n.name+s.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,kr(this,function(){throw st(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lr),this.name+t.hash},e}(),vo=function(e){return e>="A"&&e<="Z"};function Vr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;vo(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var En=function(e){return e==null||e===!1||e===""},Bn=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!En(s)&&(Array.isArray(s)&&s.isCss||Me(s)?n.push("".concat(Vr(i),":"),s,";"):rt(s)?n.push.apply(n,$t($t(["".concat(i," {")],Bn(s),!1),["}"],!1)):n.push("".concat(Vr(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Mi||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Ie(e,t,r,n){if(En(e))return[];if(Sr(e))return[".".concat(e.styledComponentId)];if(Me(e)){if(!Me(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Ie(i,t,r,n)}var s;return e instanceof bo?r?(e.inject(r,n),[e.getName(n)]):[e]:rt(e)?Bn(e):Array.isArray(e)?Array.prototype.concat.apply(Rt,e.map(function(a){return Ie(a,t,r,n)})):[e.toString()]}function wo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Me(r)&&!Sr(r))return!1}return!0}var $o=Cn("6.0.8"),So=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&wo(t),this.componentId=r,this.baseHash=Be($o,r),this.baseStyle=n,Rn.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Ce(i,this.staticRulesId);else{var s=Wr(Ie(this.rules,t,r,n)),a=ar(Be(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}i=Ce(i,a),this.staticRulesId=a}else{for(var u=Be(this.baseHash,n.hash),p="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")p+=x;else if(x){var y=Wr(Ie(x,t,r,n));u=Be(u,y+g),p+=y}}if(p){var h=ar(u>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(p,".".concat(h),void 0,this.componentId)),i=Ce(i,h)}}return i},e}(),Hn=tt.createContext(void 0);Hn.Consumer;var qt={};function ko(e,t,r){var n=Sr(e),i=e,s=!Vt(e),a=t.attrs,l=a===void 0?Rt:a,u=t.componentId,p=u===void 0?function(v,T){var w=typeof v!="string"?"sc":Or(v);qt[w]=(qt[w]||0)+1;var k="".concat(w,"-").concat(Vi("6.0.8"+w+qt[w]));return T?"".concat(T,"-").concat(k):k}(t.displayName,t.parentComponentId):u,g=t.displayName;g===void 0&&function(v){return Vt(v)?"styled.".concat(v):"Styled(".concat(Ki(v),")")}(e);var x=t.displayName&&t.componentId?"".concat(Or(t.displayName),"-").concat(t.componentId):t.componentId||p,y=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(n&&i.shouldForwardProp){var $=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;h=function(v,T){return $(v,T)&&C(v,T)}}else h=$}var B=new So(r,x,n?i.componentStyle:void 0);function j(v,T){return function(w,k,m){var fe=w.attrs,Nt=w.componentStyle,Ot=w.defaultProps,Dt=w.foldedComponentIds,Mt=w.styledComponentId,Ft=w.target,Gt=tt.useContext(Hn),Wt=Ur(),$e=w.shouldForwardProp||Wt.shouldForwardProp,V=function(me,se,ge){for(var ae,X=Q(Q({},se),{className:void 0,theme:ge}),ke=0;ke<me.length;ke+=1){var xe=Me(ae=me[ke])?ae(X):ae;for(var q in xe)X[q]=q==="className"?Ce(X[q],xe[q]):q==="style"?Q(Q({},X[q]),xe[q]):xe[q]}return se.className&&(X.className=Ce(X.className,se.className)),X}(fe,k,Gi(k,Gt,Ot)||De),he=V.as||Ft,oe={};for(var K in V)V[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?oe.as=V.forwardedAs:$e&&!$e(K,he)||(oe[K]=V[K]));var Ze=function(me,se){var ge=Ur(),ae=me.generateAndInjectStyles(se,ge.styleSheet,ge.stylis);return ae}(Nt,V),Se=Ce(Dt,Mt);return Ze&&(Se+=" "+Ze),V.className&&(Se+=" "+V.className),oe[Vt(he)&&!kn.has(he)?"class":"className"]=Se,oe.ref=m,br.createElement(he,oe)}(f,v,T)}var f=tt.forwardRef(j);return f.attrs=y,f.componentStyle=B,f.shouldForwardProp=h,f.foldedComponentIds=n?Ce(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=x,f.target=n?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(T){for(var w=[],k=1;k<arguments.length;k++)w[k-1]=arguments[k];for(var m=0,fe=w;m<fe.length;m++)cr(T,fe[m],!0);return T}({},i.defaultProps,v):v}}),kr(f,function(){return".".concat(f.styledComponentId)}),s&&Tn(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Kr(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var qr=function(e){return Object.assign(e,{isCss:!0})};function Co(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Me(e)||rt(e)){var n=e;return qr(Ie(Kr(Rt,$t([n],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ie(i):qr(Ie(Kr(i,t)))}function ur(e,t,r){if(r===void 0&&(r=De),!t)throw st(1,t);var n=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,Co.apply(void 0,$t([i],s,!1)))};return n.attrs=function(i){return ur(e,t,Q(Q({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return ur(e,t,Q(Q({},r),i))},n}var zn=function(e){return ur(ko,e)},M=zn;kn.forEach(function(e){M[e]=zn(e)});const jo=M.div`
  position: absolute;
  top: -123px;
  right: 20px;
  z-index: 10;
`,_o=M.div`
  padding: 235px 0 100px 0;
  position: relative;
`,Io=M.div`
  text-align: center;
  margin-bottom: 90px;
`,To=M.tr`
  display: contents;
  & h4 {
    color: #93989a;
  }
`;M.td`
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;M.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;M.div`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  & div {
    border-radius: 50%;
  }
`;M.div`
  & h5 {
    color: #141416;
    font-weight: 700;
  }
`;M.div`
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;M.div``;const Ao=M.table`
  overflow: hidden;
  width: 100%;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(400px, 1fr) minmax(168px, 1fr) minmax(168px, 1fr) minmax(168px, 1fr)
    minmax(168px, 1fr) minmax(168px, 1fr);
  @media (max-width: 1240px) {
    grid-template-columns:
      minmax(300px, 1fr) minmax(168px, 1fr) minmax(168px, 1fr) minmax(168px, 1fr)
      minmax(168px, 1fr) minmax(168px, 1fr);
  }
  @media (max-width: 890px) {
    grid-template-columns:
      minmax(150px, 1fr) minmax(70px, 1fr) minmax(70px, 1fr) minmax(70px, 1fr)
      minmax(70px, 1fr) minmax(70px, 1fr);
  }
`,Ro=M.thead`
  display: contents;
`;M.tbody`
  display: contents;
`;const Po=M.tbody`
  display: contents;
`;var Nn={exports:{}},Pt={},On={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=Symbol.for("react.element"),Lo=Symbol.for("react.portal"),Eo=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),Ho=Symbol.for("react.profiler"),zo=Symbol.for("react.provider"),No=Symbol.for("react.context"),Oo=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Mo=Symbol.for("react.memo"),Fo=Symbol.for("react.lazy"),Zr=Symbol.iterator;function Go(e){return e===null||typeof e!="object"?null:(e=Zr&&e[Zr]||e["@@iterator"],typeof e=="function"?e:null)}var Dn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mn=Object.assign,Fn={};function Ke(e,t,r){this.props=e,this.context=t,this.refs=Fn,this.updater=r||Dn}Ke.prototype.isReactComponent={};Ke.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ke.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gn(){}Gn.prototype=Ke.prototype;function Cr(e,t,r){this.props=e,this.context=t,this.refs=Fn,this.updater=r||Dn}var jr=Cr.prototype=new Gn;jr.constructor=Cr;Mn(jr,Ke.prototype);jr.isPureReactComponent=!0;var Xr=Array.isArray,Wn=Object.prototype.hasOwnProperty,_r={current:null},Yn={key:!0,ref:!0,__self:!0,__source:!0};function Un(e,t,r){var n,i={},s=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Wn.call(t,n)&&!Yn.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:at,type:e,key:s,ref:a,props:i,_owner:_r.current}}function Wo(e,t){return{$$typeof:at,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ir(e){return typeof e=="object"&&e!==null&&e.$$typeof===at}function Yo(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Jr=/\/+/g;function Zt(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yo(""+e.key):t.toString(36)}function gt(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case at:case Lo:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Zt(a,0):n,Xr(i)?(r="",e!=null&&(r=e.replace(Jr,"$&/")+"/"),gt(i,t,r,"",function(p){return p})):i!=null&&(Ir(i)&&(i=Wo(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Jr,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Xr(e))for(var l=0;l<e.length;l++){s=e[l];var u=n+Zt(s,l);a+=gt(s,t,r,u,i)}else if(u=Go(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=n+Zt(s,l++),a+=gt(s,t,r,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ut(e,t,r){if(e==null)return e;var n=[],i=0;return gt(e,n,"","",function(s){return t.call(r,s,i++)}),n}function Uo(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var J={current:null},xt={transition:null},Vo={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:xt,ReactCurrentOwner:_r};A.Children={map:ut,forEach:function(e,t,r){ut(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ut(e,function(){t++}),t},toArray:function(e){return ut(e,function(t){return t})||[]},only:function(e){if(!Ir(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Ke;A.Fragment=Eo;A.Profiler=Ho;A.PureComponent=Cr;A.StrictMode=Bo;A.Suspense=Do;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vo;A.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Mn({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=_r.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Wn.call(t,u)&&!Yn.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];n.children=l}return{$$typeof:at,type:e.type,key:i,ref:s,props:n,_owner:a}};A.createContext=function(e){return e={$$typeof:No,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zo,_context:e},e.Consumer=e};A.createElement=Un;A.createFactory=function(e){var t=Un.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Oo,render:e}};A.isValidElement=Ir;A.lazy=function(e){return{$$typeof:Fo,_payload:{_status:-1,_result:e},_init:Uo}};A.memo=function(e,t){return{$$typeof:Mo,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=xt.transition;xt.transition={};try{e()}finally{xt.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return J.current.useCallback(e,t)};A.useContext=function(e){return J.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return J.current.useDeferredValue(e)};A.useEffect=function(e,t){return J.current.useEffect(e,t)};A.useId=function(){return J.current.useId()};A.useImperativeHandle=function(e,t,r){return J.current.useImperativeHandle(e,t,r)};A.useInsertionEffect=function(e,t){return J.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return J.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return J.current.useMemo(e,t)};A.useReducer=function(e,t,r){return J.current.useReducer(e,t,r)};A.useRef=function(e){return J.current.useRef(e)};A.useState=function(e){return J.current.useState(e)};A.useSyncExternalStore=function(e,t,r){return J.current.useSyncExternalStore(e,t,r)};A.useTransition=function(){return J.current.useTransition()};A.version="18.2.0";On.exports=A;var Re=On.exports;const nt=wi(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Re,qo=Symbol.for("react.element"),Zo=Symbol.for("react.fragment"),Xo=Object.prototype.hasOwnProperty,Jo=Ko.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qo={key:!0,ref:!0,__self:!0,__source:!0};function Vn(e,t,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Xo.call(t,n)&&!Qo.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:qo,type:e,key:s,ref:a,props:i,_owner:Jo.current}}Pt.Fragment=Zo;Pt.jsx=Vn;Pt.jsxs=Vn;Nn.exports=Pt;var o=Nn.exports,ee=function(){return ee=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},ee.apply(this,arguments)};function it(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var z="-ms-",et="-moz-",L="-webkit-",Kn="comm",Lt="rule",Tr="decl",es="@import",qn="@keyframes",ts="@layer",rs=Math.abs,Ar=String.fromCharCode,dr=Object.assign;function ns(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function Zn(e){return e.trim()}function be(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,r){return e.replace(t,r)}function yt(e,t){return e.indexOf(t)}function U(e,t){return e.charCodeAt(t)|0}function Fe(e,t,r){return e.slice(t,r)}function de(e){return e.length}function Xn(e){return e.length}function Je(e,t){return t.push(e),e}function is(e,t){return e.map(t).join("")}function Qr(e,t){return e.filter(function(r){return!be(r,t)})}var Et=1,Ge=1,Jn=0,ie=0,W=0,qe="";function Bt(e,t,r,n,i,s,a,l){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:Et,column:Ge,length:a,return:"",siblings:l}}function we(e,t){return dr(Bt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Le(e){for(;e.root;)e=we(e.root,{children:[e]});Je(e,e.siblings)}function os(){return W}function ss(){return W=ie>0?U(qe,--ie):0,Ge--,W===10&&(Ge=1,Et--),W}function le(){return W=ie<Jn?U(qe,ie++):0,Ge++,W===10&&(Ge=1,Et++),W}function Te(){return U(qe,ie)}function bt(){return ie}function Ht(e,t){return Fe(qe,e,t)}function pr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function as(e){return Et=Ge=1,Jn=de(qe=e),ie=0,[]}function cs(e){return qe="",e}function Xt(e){return Zn(Ht(ie-1,fr(e===91?e+2:e===40?e+1:e)))}function ls(e){for(;(W=Te())&&W<33;)le();return pr(e)>2||pr(W)>3?"":" "}function us(e,t){for(;--t&&le()&&!(W<48||W>102||W>57&&W<65||W>70&&W<97););return Ht(e,bt()+(t<6&&Te()==32&&le()==32))}function fr(e){for(;le();)switch(W){case e:return ie;case 34:case 39:e!==34&&e!==39&&fr(W);break;case 40:e===41&&fr(e);break;case 92:le();break}return ie}function ds(e,t){for(;le()&&e+W!==47+10;)if(e+W===42+42&&Te()===47)break;return"/*"+Ht(t,ie-1)+"*"+Ar(e===47?e:le())}function ps(e){for(;!pr(Te());)le();return Ht(e,ie)}function fs(e){return cs(vt("",null,null,null,[""],e=as(e),0,[0],e))}function vt(e,t,r,n,i,s,a,l,u){for(var p=0,g=0,x=a,y=0,h=0,$=0,C=1,B=1,j=1,f=0,v="",T=i,w=s,k=n,m=v;B;)switch($=f,f=le()){case 40:if($!=108&&U(m,x-1)==58){yt(m+=I(Xt(f),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:m+=Xt(f);break;case 9:case 10:case 13:case 32:m+=ls($);break;case 92:m+=us(bt()-1,7);continue;case 47:switch(Te()){case 42:case 47:Je(hs(ds(le(),bt()),t,r,u),u);break;default:m+="/"}break;case 123*C:l[p++]=de(m)*j;case 125*C:case 59:case 0:switch(f){case 0:case 125:B=0;case 59+g:j==-1&&(m=I(m,/\f/g,"")),h>0&&de(m)-x&&Je(h>32?tn(m+";",n,r,x-1,u):tn(I(m," ","")+";",n,r,x-2,u),u);break;case 59:m+=";";default:if(Je(k=en(m,t,r,p,g,i,l,v,T=[],w=[],x,s),s),f===123)if(g===0)vt(m,t,k,k,T,s,x,l,w);else switch(y===99&&U(m,3)===110?100:y){case 100:case 108:case 109:case 115:vt(e,k,k,n&&Je(en(e,k,k,0,0,i,l,v,i,T=[],x,w),w),i,w,x,l,n?T:w);break;default:vt(m,k,k,k,[""],w,0,l,w)}}p=g=h=0,C=j=1,v=m="",x=a;break;case 58:x=1+de(m),h=$;default:if(C<1){if(f==123)--C;else if(f==125&&C++==0&&ss()==125)continue}switch(m+=Ar(f),f*C){case 38:j=g>0?1:(m+="\f",-1);break;case 44:l[p++]=(de(m)-1)*j,j=1;break;case 64:Te()===45&&(m+=Xt(le())),y=Te(),g=x=de(v=m+=ps(bt())),f++;break;case 45:$===45&&de(m)==2&&(C=0)}}return s}function en(e,t,r,n,i,s,a,l,u,p,g,x){for(var y=i-1,h=i===0?s:[""],$=Xn(h),C=0,B=0,j=0;C<n;++C)for(var f=0,v=Fe(e,y+1,y=rs(B=a[C])),T=e;f<$;++f)(T=Zn(B>0?h[f]+" "+v:I(v,/&\f/g,h[f])))&&(u[j++]=T);return Bt(e,t,r,i===0?Lt:l,u,p,g,x)}function hs(e,t,r,n){return Bt(e,t,r,Kn,Ar(os()),Fe(e,2,-2),0,n)}function tn(e,t,r,n,i){return Bt(e,t,r,Tr,Fe(e,0,n),Fe(e,n+1,-1),n,i)}function Qn(e,t,r){switch(ns(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 4789:return et+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+et+e+z+e+e;case 5936:switch(U(e,t+11)){case 114:return L+e+z+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+z+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+z+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return L+e+z+e+e;case 6165:return L+e+z+"flex-"+e+e;case 5187:return L+e+I(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return L+e+z+"flex-item-"+I(e,/flex-|-self/g,"")+(be(e,/flex-|baseline/)?"":z+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return L+e+z+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return L+e+z+I(e,"shrink","negative")+e;case 5292:return L+e+z+I(e,"basis","preferred-size")+e;case 6060:return L+"box-"+I(e,"-grow","")+L+e+z+I(e,"grow","positive")+e;case 4554:return L+I(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4200:if(!be(e,/flex-|baseline/))return z+"grid-column-align"+Fe(e,t)+e;break;case 2592:case 3360:return z+I(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,be(n.props,/grid-\w+-end/)})?~yt(e+(r=r[t].value),"span")?e:z+I(e,"-start","")+e+z+"grid-row-span:"+(~yt(r,"span")?be(r,/\d+/):+be(r,/\d+/)-+be(e,/\d+/))+";":z+I(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return be(n.props,/grid-\w+-start/)})?e:z+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(de(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+et+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yt(e,"stretch")?Qn(I(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,a,l,u,p){return z+i+":"+s+p+(a?z+i+"-span:"+(l?u:+u-+s)+p:"")+e});case 4949:if(U(e,t+6)===121)return I(e,":",":"+L)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+L+(U(e,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+z+"$2box$3")+e;case 100:return I(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ms(e,t,r,n){switch(e.type){case ts:if(e.children.length)break;case es:case Tr:return e.return=e.return||e.value;case Kn:return"";case qn:return e.return=e.value+"{"+Ct(e.children,n)+"}";case Lt:if(!de(e.value=e.props.join(",")))return""}return de(r=Ct(e.children,n))?e.return=e.value+"{"+r+"}":""}function gs(e){var t=Xn(e);return function(r,n,i,s){for(var a="",l=0;l<t;l++)a+=e[l](r,n,i,s)||"";return a}}function xs(e){return function(t){t.root||(t=t.return)&&e(t)}}function ys(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Tr:e.return=Qn(e.value,e.length,r);return;case qn:return Ct([we(e,{value:I(e.value,"@","@"+L)})],n);case Lt:if(e.length)return is(r=e.props,function(i){switch(be(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Le(we(e,{props:[I(i,/:(read-\w+)/,":"+et+"$1")]})),Le(we(e,{props:[i]})),dr(e,{props:Qr(r,n)});break;case"::placeholder":Le(we(e,{props:[I(i,/:(plac\w+)/,":"+L+"input-$1")]})),Le(we(e,{props:[I(i,/:(plac\w+)/,":"+et+"$1")]})),Le(we(e,{props:[I(i,/:(plac\w+)/,z+"input-$1")]})),Le(we(e,{props:[i]})),dr(e,{props:Qr(r,n)});break}return""})}}var bs={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rr=typeof window<"u"&&"HTMLElement"in window,vs=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),zt=Object.freeze([]),Ye=Object.freeze({});function ws(e,t,r){return r===void 0&&(r=Ye),e.theme!==r.theme&&e.theme||t||r.theme}var ei=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$s=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ss=/(^-|-$)/g;function rn(e){return e.replace($s,"-").replace(Ss,"")}var ks=/(a)(d)/gi,nn=function(e){return String.fromCharCode(e+(e>25?39:97))};function hr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=nn(t%52)+r;return(nn(t%52)+r).replace(ks,"$1-$2")}var Jt,He=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ti=function(e){return He(5381,e)};function ri(e){return hr(ti(e)>>>0)}function Cs(e){return e.displayName||e.name||"Component"}function Qt(e){return typeof e=="string"&&!0}var ni=typeof Symbol=="function"&&Symbol.for,ii=ni?Symbol.for("react.memo"):60115,js=ni?Symbol.for("react.forward_ref"):60112,_s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Is={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ts=((Jt={})[js]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt[ii]=oi,Jt);function on(e){return("type"in(t=e)&&t.type.$$typeof)===ii?oi:"$$typeof"in e?Ts[e.$$typeof]:_s;var t}var As=Object.defineProperty,Rs=Object.getOwnPropertyNames,sn=Object.getOwnPropertySymbols,Ps=Object.getOwnPropertyDescriptor,Ls=Object.getPrototypeOf,an=Object.prototype;function si(e,t,r){if(typeof t!="string"){if(an){var n=Ls(t);n&&n!==an&&si(e,n,r)}var i=Rs(t);sn&&(i=i.concat(sn(t)));for(var s=on(e),a=on(t),l=0;l<i.length;++l){var u=i[l];if(!(u in Is||r&&r[u]||a&&u in a||s&&u in s)){var p=Ps(t,u);try{As(e,u,p)}catch{}}}}return e}function Ue(e){return typeof e=="function"}function Pr(e){return typeof e=="object"&&"styledComponentId"in e}function je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mr(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ot(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gr(e,t,r){if(r===void 0&&(r=!1),!r&&!ot(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=gr(e[n],t[n]);else if(ot(t))for(var n in t)e[n]=gr(e[n],t[n]);return e}function Lr(e,t){Object.defineProperty(e,"toString",{value:t})}function ct(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Es=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw ct(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,a=i;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),wt=new Map,jt=new Map,er=1,dt=function(e){if(wt.has(e))return wt.get(e);for(;jt.has(er);)er++;var t=er++;return wt.set(e,t),jt.set(t,e),t},Bs=function(e,t){wt.set(e,t),jt.set(t,e)},Hs="style[".concat(We,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),zs=new RegExp("^".concat(We,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ns=function(e,t,r){for(var n,i=r.split(","),s=0,a=i.length;s<a;s++)(n=i[s])&&e.registerName(t,n)},Os=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],s=0,a=n.length;s<a;s++){var l=n[s].trim();if(l){var u=l.match(zs);if(u){var p=0|parseInt(u[1],10),g=u[2];p!==0&&(Bs(g,p),Ns(e,g,u[3]),e.getTag().insertRules(p,i)),i.length=0}else i.push(l)}}};function Ds(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ai=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(We,"]")));return u[u.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(We,"active"),n.setAttribute("data-styled-version","6.0.8");var a=Ds();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},Ms=function(){function e(t){this.element=ai(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var a=n[i];if(a.ownerNode===r)return a}throw ct(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Fs=function(){function e(t){this.element=ai(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Gs=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),cn=Rr,Ws={isServer:!Rr,useCSSOMInjection:!vs},ci=function(){function e(t,r,n){t===void 0&&(t=Ye),r===void 0&&(r={});var i=this;this.options=ee(ee({},Ws),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Rr&&cn&&(cn=!1,function(s){for(var a=document.querySelectorAll(Hs),l=0,u=a.length;l<u;l++){var p=a[l];p&&p.getAttribute(We)!=="active"&&(Os(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),Lr(this,function(){return function(s){for(var a=s.getTag(),l=a.length,u="",p=function(x){var y=function(j){return jt.get(j)}(x);if(y===void 0)return"continue";var h=s.names.get(y),$=a.getGroup(x);if(h===void 0||$.length===0)return"continue";var C="".concat(We,".g").concat(x,'[id="').concat(y,'"]'),B="";h!==void 0&&h.forEach(function(j){j.length>0&&(B+="".concat(j,","))}),u+="".concat($).concat(C,'{content:"').concat(B,'"}').concat(`/*!sc*/
`)},g=0;g<l;g++)p(g);return u}(i)})}return e.registerId=function(t){return dt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ee(ee({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Gs(i):n?new Ms(i):new Fs(i)}(this.options),new Es(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(dt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(dt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(dt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ys=/&/g,Us=/^\s*\/\/.*$/gm;function li(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=li(r.children,t)),r})}function Vs(e){var t,r,n,i=e===void 0?Ye:e,s=i.options,a=s===void 0?Ye:s,l=i.plugins,u=l===void 0?zt:l,p=function(y,h,$){return $===r||$.startsWith(r)&&$.endsWith(r)&&$.replaceAll(r,"").length>0?".".concat(t):y},g=u.slice();g.push(function(y){y.type===Lt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Ys,r).replace(n,p))}),a.prefix&&g.push(ys),g.push(ms);var x=function(y,h,$,C){h===void 0&&(h=""),$===void 0&&($=""),C===void 0&&(C="&"),t=C,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var B=y.replace(Us,""),j=fs($||h?"".concat($," ").concat(h," { ").concat(B," }"):B);a.namespace&&(j=li(j,a.namespace));var f=[];return Ct(j,gs(g.concat(xs(function(v){return f.push(v)})))),f};return x.hash=u.length?u.reduce(function(y,h){return h.name||ct(15),He(y,h.name)},5381).toString():"",x}var Ks=new ci,xr=Vs(),ui=nt.createContext({shouldForwardProp:void 0,styleSheet:Ks,stylis:xr});ui.Consumer;nt.createContext(void 0);function ln(){return Re.useContext(ui)}var di=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=xr);var a=n.name+s.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Lr(this,function(){throw ct(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xr),this.name+t.hash},e}(),qs=function(e){return e>="A"&&e<="Z"};function un(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;qs(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var pi=function(e){return e==null||e===!1||e===""},fi=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!pi(s)&&(Array.isArray(s)&&s.isCss||Ue(s)?n.push("".concat(un(i),":"),s,";"):ot(s)?n.push.apply(n,it(it(["".concat(i," {")],fi(s),!1),["}"],!1)):n.push("".concat(un(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in bs||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Ae(e,t,r,n){if(pi(e))return[];if(Pr(e))return[".".concat(e.styledComponentId)];if(Ue(e)){if(!Ue(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Ae(i,t,r,n)}var s;return e instanceof di?r?(e.inject(r,n),[e.getName(n)]):[e]:ot(e)?fi(e):Array.isArray(e)?Array.prototype.concat.apply(zt,e.map(function(a){return Ae(a,t,r,n)})):[e.toString()]}function Zs(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ue(r)&&!Pr(r))return!1}return!0}var Xs=ti("6.0.8"),Js=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Zs(t),this.componentId=r,this.baseHash=He(Xs,r),this.baseStyle=n,ci.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=je(i,this.staticRulesId);else{var s=mr(Ae(this.rules,t,r,n)),a=hr(He(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}i=je(i,a),this.staticRulesId=a}else{for(var u=He(this.baseHash,n.hash),p="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")p+=x;else if(x){var y=mr(Ae(x,t,r,n));u=He(u,y+g),p+=y}}if(p){var h=hr(u>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(p,".".concat(h),void 0,this.componentId)),i=je(i,h)}}return i},e}(),hi=nt.createContext(void 0);hi.Consumer;var tr={};function Qs(e,t,r){var n=Pr(e),i=e,s=!Qt(e),a=t.attrs,l=a===void 0?zt:a,u=t.componentId,p=u===void 0?function(v,T){var w=typeof v!="string"?"sc":rn(v);tr[w]=(tr[w]||0)+1;var k="".concat(w,"-").concat(ri("6.0.8"+w+tr[w]));return T?"".concat(T,"-").concat(k):k}(t.displayName,t.parentComponentId):u,g=t.displayName;g===void 0&&function(v){return Qt(v)?"styled.".concat(v):"Styled(".concat(Cs(v),")")}(e);var x=t.displayName&&t.componentId?"".concat(rn(t.displayName),"-").concat(t.componentId):t.componentId||p,y=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(n&&i.shouldForwardProp){var $=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;h=function(v,T){return $(v,T)&&C(v,T)}}else h=$}var B=new Js(r,x,n?i.componentStyle:void 0);function j(v,T){return function(w,k,m){var fe=w.attrs,Nt=w.componentStyle,Ot=w.defaultProps,Dt=w.foldedComponentIds,Mt=w.styledComponentId,Ft=w.target,Gt=nt.useContext(hi),Wt=ln(),$e=w.shouldForwardProp||Wt.shouldForwardProp,V=function(me,se,ge){for(var ae,X=ee(ee({},se),{className:void 0,theme:ge}),ke=0;ke<me.length;ke+=1){var xe=Ue(ae=me[ke])?ae(X):ae;for(var q in xe)X[q]=q==="className"?je(X[q],xe[q]):q==="style"?ee(ee({},X[q]),xe[q]):xe[q]}return se.className&&(X.className=je(X.className,se.className)),X}(fe,k,ws(k,Gt,Ot)||Ye),he=V.as||Ft,oe={};for(var K in V)V[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?oe.as=V.forwardedAs:$e&&!$e(K,he)||(oe[K]=V[K]));var Ze=function(me,se){var ge=ln(),ae=me.generateAndInjectStyles(se,ge.styleSheet,ge.stylis);return ae}(Nt,V),Se=je(Dt,Mt);return Ze&&(Se+=" "+Ze),V.className&&(Se+=" "+V.className),oe[Qt(he)&&!ei.has(he)?"class":"className"]=Se,oe.ref=m,Re.createElement(he,oe)}(f,v,T)}var f=nt.forwardRef(j);return f.attrs=y,f.componentStyle=B,f.shouldForwardProp=h,f.foldedComponentIds=n?je(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=x,f.target=n?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(T){for(var w=[],k=1;k<arguments.length;k++)w[k-1]=arguments[k];for(var m=0,fe=w;m<fe.length;m++)gr(T,fe[m],!0);return T}({},i.defaultProps,v):v}}),Lr(f,function(){return".".concat(f.styledComponentId)}),s&&si(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function dn(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var pn=function(e){return Object.assign(e,{isCss:!0})};function Er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ue(e)||ot(e)){var n=e;return pn(Ae(dn(zt,it([n],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ae(i):pn(Ae(dn(i,t)))}function yr(e,t,r){if(r===void 0&&(r=Ye),!t)throw ct(1,t);var n=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,Er.apply(void 0,it([i],s,!1)))};return n.attrs=function(i){return yr(e,t,ee(ee({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return yr(e,t,ee(ee({},r),i))},n}var mi=function(e){return yr(Qs,e)},c=mi;ei.forEach(function(e){c[e]=mi(e)});function ea(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=mr(Er.apply(void 0,it([e],t,!1))),i=ri(n);return new di(i,n)}var d=(e=>(e.enum_H1Text="h1",e.enum_H2Text="h2",e.enum_H3Text="h3",e.enum_H4Text="h4",e.enum_H5Text="h5",e.enum_H6Text="h6",e.enum_aText="a",e))(d||{});const E={[d.enum_H1Text]:{fontSize:"75px",fontStyle:"normal",fontWeight:600,lineHeight:"120%"},[d.enum_H2Text]:{fontSize:"45px",fontStyle:"normal",fontWeight:600,lineHeight:"120%"},[d.enum_H3Text]:{fontSize:"36px",fontStyle:"normal",fontWeight:600,lineHeight:"120%"},[d.enum_H4Text]:{fontSize:"22px",fontStyle:"normal",fontWeight:600,lineHeight:"150%"},[d.enum_H5Text]:{fontSize:"18px",fontStyle:"normal",fontWeight:400,lineHeight:"150%"},[d.enum_H6Text]:{fontSize:"12px",fontStyle:"normal",fontWeight:500,lineHeight:"120%"},[d.enum_aText]:{fontSize:"16px",fontStyle:"normal",fontWeight:500,lineHeight:"120%",textTransform:"uppercase"}};var te=(e=>(e.Inter="Inter",e.Poppins="Poppins",e))(te||{}),O=(e=>(e.WHITE="#FFFFFF",e.BLACK="#000",e.PRIMARY_BLACK="#141416",e.TRANSPARENT="transparent",e))(O||{});const ta=c.h1`
  color: ${O.BLACK};
  font-family: ${te.Poppins}, sans-serif;
  font-size: ${E[d.enum_H1Text].fontSize};
  font-style: ${E[d.enum_H1Text].fontStyle};
  font-weight: ${E[d.enum_H1Text].fontWeight};
  line-height: ${E[d.enum_H1Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 53px;
  }
`,ra=c.h2`
  font-size: ${E[d.enum_H2Text].fontSize};
  font-style: ${E[d.enum_H2Text].fontStyle};
  font-weight: ${E[d.enum_H2Text].fontWeight};
  line-height: ${E[d.enum_H2Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 32px;
  }
`,na=c.h3`
  font-family: ${te.Poppins}, sans-serif;
  font-size: ${E[d.enum_H3Text].fontSize};
  font-style: ${E[d.enum_H3Text].fontStyle};
  font-weight: ${E[d.enum_H3Text].fontWeight};
  line-height: ${E[d.enum_H3Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 26px;
  }
`,ia=c.h4`
  font-family: ${te.Poppins}, sans-serif;
  font-size: ${E[d.enum_H4Text].fontSize};
  font-style: ${E[d.enum_H4Text].fontStyle};
  font-weight: ${E[d.enum_H4Text].fontWeight};
  line-height: ${E[d.enum_H4Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 15px;
  }
`,oa=c.h5`
  font-family: ${te.Poppins}, sans-serif;
  font-size: ${E[d.enum_H5Text].fontSize};
  font-style: ${E[d.enum_H5Text].fontStyle};
  font-weight: ${E[d.enum_H5Text].fontWeight};
  line-height: ${E[d.enum_H5Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 11px;
  }
`,sa=c.h6`
  @media (max-width: 1140px) {
    font-size: 10px;
  }
  font-family: ${te.Poppins}, sans-serif;
  font-size: ${E[d.enum_H6Text].fontSize};
  font-style: ${E[d.enum_H6Text].fontStyle};
  font-weight: ${E[d.enum_H6Text].fontWeight};
  line-height: ${E[d.enum_H6Text].lineHeight};
`,aa=c.a`
  cursor: pointer;
  margin: 0 27px;
  color: #606060;
  font-family: ${te.Inter};
  font-size: ${E[d.enum_aText].fontSize};
  font-style: ${E[d.enum_aText].fontStyle};
  font-weight: ${E[d.enum_aText].fontWeight};
  line-height: ${E[d.enum_aText].lineHeight};
  text-transform: ${E[d.enum_aText].textTransform};
  @media (max-width: 1140px) {
    font-size: 12px;
    margin: 0 18px;
  }
`,fn=c.h6``,hn={children:"Демо",type:d.enum_H1Text},ca={children:hn.children,type:hn.type},S=e=>{const{type:t,children:r,...n}=e;if(e.isLoading)return o.jsx(o.Fragment,{children:"Loading"});if(e.isError)return o.jsx(fn,{children:"Ошибка"});switch(t){case d.enum_H1Text:return o.jsx(ta,{children:r});case d.enum_H2Text:return o.jsx(ra,{children:r});case d.enum_H3Text:return o.jsx(na,{children:r});case d.enum_H4Text:return o.jsx(ia,{children:r});case d.enum_H5Text:return o.jsx(oa,{children:r});case d.enum_H6Text:return o.jsx(sa,{children:r});case d.enum_aText:return o.jsx(aa,{children:r,...n});default:return o.jsx(fn,{children:"Ошибка"})}};S.defaultProps=ca;c.div`
  padding: 235px 0 100px 0;
`;c.div`
  text-align: center;
  margin-bottom: 90px;
`;c.tr`
  display: contents;
  & h4 {
    color: #93989a;
  }
`;c.td`
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;const la=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ua=c.div`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  & div {
    border-radius: 50%;
  }
`,da=c.div`
  & h5 {
    color: #141416;
    font-weight: 700;
  }
`,pa=c.div`
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fa=c.div``;c.table`
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(296px, 1fr) minmax(180px, 1.67fr) minmax(180px, 1.67fr) minmax(180px, 1.67fr)
    minmax(180px, 3.33fr) minmax(180px, 1.67fr);
`;c.thead`
  display: contents;
`;c.tbody`
  display: contents;
`;c.tbody`
  display: contents;
`;const ha=c.tr`
  display: contents;
  & td {
    border-bottom: 1px solid #ebe9e9;
    padding: 24px 0 14px 0;
  }
`,ma=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 22px;
    height: 22px;
  }
  & h5 {
    font-weight: 700;
  }
`,ga=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & h5 {
    font-weight: 700;
    color: #10c352;
  }
`,xa=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 22px;
    height: 22px;
  }
  & h5 {
    font-weight: 700;
  }
`,ya=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ba=c.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;var N=(e=>(e.enum_defaultImage="defaultImage",e.enum_backGroundImage="backGroundImage",e))(N||{});const va=c.img`
  width: 100%;
`,wa=c.div`
  background: ${e=>e.background?`url(${e.background})  50% / cover no-repeat;`:"none"};
  width: 100%;
  height: 100%;
  border-radius: 23px;
`,mn=c.div``,gn={alt:"Демо",type:N.enum_defaultImage},$a={alt:gn.alt,type:gn.type},D=e=>{const{type:t,isLoading:r,background:n,src:i,alt:s}=e;if(e.isLoading)return o.jsx(o.Fragment,{children:"Loading"});if(e.isError)return o.jsx(mn,{children:"Ошибка"});switch(t){case N.enum_defaultImage:return o.jsx(va,{isLoading:r,src:i,alt:s});case N.enum_backGroundImage:return o.jsx(wa,{background:n,isLoading:r});default:return o.jsx(mn,{children:"Ошибка"})}};D.defaultProps=$a;const Sa=({name:e,subName:t,volume:r,day:n,price:i,owners:s,items:a,image:l})=>o.jsxs(ha,{children:[o.jsxs(la,{children:[o.jsx(ua,{children:o.jsx(D,{type:N.enum_backGroundImage,background:l})}),o.jsxs(fa,{children:[o.jsx(da,{children:o.jsx(S,{type:d.enum_H5Text,children:e})}),o.jsx(pa,{children:o.jsx(S,{type:d.enum_H6Text,children:t})})]})]}),o.jsxs(ma,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"}),o.jsx(S,{type:d.enum_H5Text,children:r})]}),o.jsx(ga,{children:o.jsx(S,{type:d.enum_H5Text,children:n})}),o.jsxs(xa,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"}),o.jsx(S,{type:d.enum_H5Text,children:i})]}),o.jsx(ya,{children:o.jsx(S,{type:d.enum_H5Text,children:s})}),o.jsx(ba,{children:o.jsx(S,{type:d.enum_H5Text,children:a})})]}),ka=[{id:1,name:"Alex Ca.",subName:"By Alex.",volume:"8,456",day:"+ 27.78%",price:"3,5",owners:"2.2K",items:"500",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"},{id:2,name:"John Doe",subName:"By John.",volume:"7,892",day:"+ 15.32%",price:"2.8",owners:"1.8K",items:"450",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png"},{id:3,name:"Sarah Smith",subName:"By Sarah.",volume:"6,712",day:"+ 21.17%",price:"3.2",owners:"1.5K",items:"400",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass3.png"},{id:4,name:"Mike Johnson",subName:"By Mike.",volume:"9,345",day:"+ 30.05%",price:"4.1",owners:"2.5K",items:"550",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass4.png"},{id:5,name:"Emma Brown",subName:"By Emma.",volume:"7,621",day:"+ 18.94%",price:"2.9",owners:"1.7K",items:"480",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"},{id:6,name:"David Wilson",subName:"By David.",volume:"8,912",day:"+ 25.81%",price:"3.6",owners:"2.0K",items:"520",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png"}],Ca=c.div`
  border-radius: 14px;
  border: 1px solid var(--greyscale-200, #edf2f7);
  background: var(--others-white, #fff);
  box-shadow: 9px 9px 44px 0px rgba(20, 20, 22, 0.1);
  padding: 24px;
  width: 274px;
  @media (max-width: 890px) {
    width: 224px;
    padding: 18px;
  }
`,ja=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_a=c.div``;var b=(e=>(e.enum_followButton="followButton",e.enum_blackButton="blackButton",e.enum_whiteButton="whiteButton",e.enum_categoryButton="categoryButton",e.enum_imageButton="imageButton",e.enum_Explore="Explore",e.enum_ExploreBlack="ExploreBlack",e.enum_svgImage="svgImage",e))(b||{});const F={[b.enum_followButton]:{fontSize:"12px",fontStyle:"normal",fontWeight:700},[b.enum_blackButton]:{fontSize:"16px",fontStyle:"normal",fontWeight:600,textTransform:"uppercase"},[b.enum_whiteButton]:{fontSize:"16px",fontStyle:"normal",fontWeight:600,textTransform:"uppercase"},[b.enum_categoryButton]:{fontSize:"16px",fontStyle:"normal",fontWeight:600,textTransform:"auto"},[b.enum_Explore]:{fontSize:"16px",fontStyle:"normal",fontWeight:400}},Br=Er`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 18px 29px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 2px solid transparent;
  cursor: pointer;
`,Ia=c.button``,Ta=c.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${O.TRANSPARENT};
  font-family: ${te.Poppins};
  font-size: ${F[b.enum_blackButton].fontSize};
  font-style: ${F[b.enum_blackButton].fontStyle};
  font-weight: ${F[b.enum_blackButton].fontWeight};
  & h5 {
    color: #acadb9;
  }
  & img {
    margin-left: 11px;
    width: 10px;
    height: 10px;
  }
`,Aa=c.button`
  ${Br}
  background: ${O.PRIMARY_BLACK};
  color: ${O.WHITE};
  font-family: ${te.Poppins};
  font-size: ${F[b.enum_blackButton].fontSize};
  font-style: ${F[b.enum_blackButton].fontStyle};
  font-weight: ${F[b.enum_blackButton].fontWeight};
  text-transform: ${F[b.enum_blackButton].textTransform};
  & svg {
    margin-left: 10px;
  }
`,Ra=c.button`
  ${Br}
  background: ${O.PRIMARY_BLACK};
  color: ${O.WHITE};
  font-family: ${te.Poppins};
  font-size: ${F[b.enum_blackButton].fontSize};
  font-style: ${F[b.enum_blackButton].fontStyle};
  font-weight: ${F[b.enum_blackButton].fontWeight};
  text-transform: ${F[b.enum_blackButton].textTransform};
  @media (max-width: 1140px) {
    font-size: 10px;
    padding: 11px 17px;
  }
`,Pa=c.button`
  ${Br}
  border: 2px solid ${O.BLACK};
  background: ${O.TRANSPARENT};
  color: ${O.BLACK};
  font-family: ${te.Poppins};
  font-size: ${F[b.enum_whiteButton].fontSize};
  font-style: ${F[b.enum_whiteButton].fontStyle};
  font-weight: ${F[b.enum_whiteButton].fontWeight};
  @media (max-width: 1140px) {
    font-size: 10px;
    padding: 11px 17px;
  }
`,La=c.img`
  width: 100%;
`,Ea=c.button`
  padding: 7px 14px;
  border-radius: 7px;
  cursor: pointer;
  border: 2px solid var(--neutrals-6, #e6e8ec);
  font-family: ${te.Poppins};
  font-size: ${F[b.enum_followButton].fontSize};
  font-style: ${F[b.enum_followButton].fontStyle};
  font-weight: ${F[b.enum_followButton].fontWeight};
`,Ba=c.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 16px;
  color: var(--greyscale-900, #1a202c);
  border-radius: 13px;
  border: 2px solid #141416;

  font-family:${te.Poppins}
  font-size: ${F[b.enum_categoryButton].fontSize};
  font-style: ${F[b.enum_categoryButton].fontStyle};
  font-weight: ${F[b.enum_categoryButton].fontWeight};
  text-transform: ${F[b.enum_categoryButton].textTransform};
`,xn=c.button``,rr={children:"Демо",value:"Демо",type:b.enum_blackButton},Ha={children:rr.children,value:rr.value,type:rr.type},Z=e=>{const{children:t,type:r,isLoading:n,onClick:i,src:s,alt:a,...l}=e;if(e.isLoading)return o.jsx(o.Fragment,{children:"Loading"});if(e.isError)return o.jsx(xn,{children:"Ошибка"});switch(r){case b.enum_blackButton:return o.jsx(Ra,{isLoading:n,children:t});case b.enum_ExploreBlack:return o.jsxs(Aa,{children:[t,o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",children:[o.jsx("path",{d:"M4.98047 11.0703H17.8973",stroke:"white","stroke-width":"1.84503","stroke-linecap":"round","stroke-linejoin":"round"}),o.jsx("path",{d:"M11.4365 4.61328L17.8949 11.0717L11.4365 17.5301",stroke:"white","stroke-width":"1.84503","stroke-linecap":"round","stroke-linejoin":"round"})]})]});case b.enum_svgImage:return o.jsx(Ia,{onClick:i,isLoading:n,dangerouslySetInnerHTML:{__html:t}});case b.enum_whiteButton:return o.jsx(Pa,{isLoading:n,children:t});case b.enum_followButton:return o.jsx(Ea,{isLoading:n,children:t});case b.enum_categoryButton:return o.jsxs(Ba,{isLoading:n,...l,children:[o.jsx(D,{type:N.enum_defaultImage,src:s,alt:a}),t]});case b.enum_Explore:return o.jsxs(Ta,{isLoading:n,...l,children:[o.jsx(S,{type:d.enum_H5Text,children:t}),o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/exploreArrow.svg",alt:a})]});case b.enum_imageButton:return o.jsx(La,{src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/RightArrow.svg",alt:""});default:return o.jsx(xn,{children:"Ошибка"})}};Z.defaultProps=Ha;const za=[{id:1,name:"Alex Ca.",subName:"Alex.",volume:"8,456",day:"+23,00%",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png",minus:!0,count:"1",procent:"+23,00%"},{id:2,name:"Juliya S.",subName:"JuliyaS",volume:"5,327",day:"-32,01%",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png",minus:!1,count:"2",procent:"-32,01%"}],Na=c.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    font-size: 12px;
  }
  & h6 {
    font-size: 10px;
  }
`,Oa=c.div``,Da=c.div`
  & h5 {
    color: #10c352;
  }
`,Ma=c.div`
  & h5 {
    color: #e23333;
  }
`,Fa=c.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 15px;
    height: 15px;
  }
  & h5 {
    font-weight: 700;
  }
`,Ga=c.div`
  display: flex;
  align-items: center;
`,Wa=c.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 42px;
  margin-right: 13px;
  & h5 {
    font-size: 18px;
  }
`,Ya=c.div`
  bottom: 0;
  right: -5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${O.WHITE};
  color: ${O.PRIMARY_BLACK};
  & h6 {
    font-weight: 900;
  }
`,Ua=c.div`
  overflow: hidden;
`;c.div`
  border-radius: 7px;
  border: 1.741px solid var(--neutrals-6, #e6e8ec);
  background: var(--neutrals-6, #e6e8ec);
`;const Va=({image:e,name:t,subName:r,volume:n,count:i,procent:s,minus:a})=>o.jsxs(Na,{children:[o.jsxs(Ga,{children:[o.jsxs(Wa,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:e}),o.jsx(Ya,{children:o.jsx(S,{type:d.enum_H6Text,children:i})})]}),o.jsxs(Ua,{children:[o.jsx(S,{type:d.enum_H5Text,children:t}),o.jsx(S,{type:d.enum_H6Text,children:r})]})]}),o.jsxs(Oa,{children:[o.jsxs(Fa,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"}),o.jsx(S,{type:d.enum_H5Text,children:n})]}),a?o.jsx(Da,{children:o.jsx(S,{type:d.enum_H5Text,children:s})}):o.jsx(Ma,{children:o.jsx(S,{type:d.enum_H5Text,children:s})})]})]}),gi=()=>o.jsxs(Ca,{children:[o.jsxs(ja,{children:[o.jsx(S,{type:d.enum_H4Text,children:"Recent Viewed"}),o.jsx(Z,{type:b.enum_svgImage,children:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none"><path d="M7.447 1.84067C7.447 2.05794 7.84209 2.23407 8.32946 2.23407C8.81682 2.23407 9.21191 2.05794 9.21191 1.84067C9.21191 1.6234 8.81683 1.44727 8.32946 1.44727C7.84209 1.44727 7.447 1.6234 7.447 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.26927 1.84067C1.26927 2.05794 1.66436 2.23407 2.15172 2.23407C2.63909 2.23407 3.03418 2.05794 3.03418 1.84067C3.03418 1.6234 2.63909 1.44727 2.15172 1.44727C1.66436 1.44727 1.26927 1.6234 1.26927 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6238 1.84067C13.6238 2.05794 14.0188 2.23407 14.5062 2.23407C14.9936 2.23407 15.3887 2.05794 15.3887 1.84067C15.3887 1.6234 14.9936 1.44727 14.5062 1.44727C14.0188 1.44727 13.6238 1.6234 13.6238 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/></svg>'})]}),o.jsx(_a,{children:za.map(e=>o.jsx(Va,{name:e.name,subName:e.subName,volume:e.volume,day:e.day,image:e.image,count:e.count,procent:e.procent,minus:e.minus}))})]}),Ka=()=>{const e=[{id:1,title:"Collection"},{id:2,title:"Volume"},{id:3,title:"24h %"},{id:4,title:"Floor Price"},{id:5,title:"Owners"},{id:6,title:"Items"}];return R.jsxs(_o,{children:[R.jsx(Io,{children:R.jsx(S,{type:d.enum_H2Text,children:"Top Collection"})}),R.jsxs(Ao,{children:[R.jsx(Ro,{children:R.jsx(To,{children:e.map(t=>R.jsx(R.Fragment,{children:R.jsx(S,{type:d.enum_H4Text,children:t.title},`RatingFilter-${t.id}`)}))})}),R.jsx(Po,{children:ka.map(t=>R.jsx(Sa,{name:t.name,subName:t.subName,volume:t.volume,day:t.day,price:t.price,owners:t.owners,items:t.items,image:t.image},`RatingBlock-${t.id}`))})]}),R.jsx(jo,{children:R.jsx(gi,{})})]})},qa=M.div`
  padding: 70px 0 90px 0;
  overflow: hidden;
  background: #f1f1f1;
  & h2 {
    color: #c5c5c5;
    text-align: center;
  }
`,Za=M.div`
  text-align: center;
`,Xa=M.div`
  width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 100px 0 115px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ja=M.div`
  padding: 0 20px;
  display: flex;
  transition: transform 0.3s ease-in-out;
`,Qa=c.div`
  max-width: 280px;
  border-radius: 23px;
  background: var(--others-white, #fff);
  box-shadow: 38px 11px 58px 0px rgba(199, 199, 199, 0.6);
  @media (max-width: 1140px) {
    max-width: 200px;
  }
`,ec=c.div`
  margin: 0 auto;
  padding: 14px 14px 18px 14px;
  text-align: center;
  width: 228px;
  height: 252px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 1140px) {
    width: 180px;
    height: 180px;
    padding: 10px;
    & h4 {
      font-size: 15px;
    }
    & h5 {
      font-size: 11px;
    }
    & h6 {
      font-size: 10px;
    }
    button {
      font-size: 10px;
      padding: 6px 13px;
    }
  }
`,tc=c.div`
  position: absolute;
  top: 32px;
  right: 22px;
  display: inline-block;
  padding: 8px 14px;
  color: var(--others-white, #fff);
  border-radius: 9px;
  border: 1px solid rgba(28, 29, 32, 0.08);
  background: rgba(28, 29, 32, 0.35);
  box-shadow: 0px 4px 14px 0px rgba(28, 29, 32, 0.08);
  backdrop-filter: blur(2px);
`,rc=c.div`
  margin-bottom: 10px;
`,nc=c.div`
  padding: 10px 18px 18px 18px;
  max-width: 245px;
  margin: 0 auto;
`,ic=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,oc=c.div`
  max-width: 121px;
`,sc=c.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  & img {
    width: 21px;
    @media (max-width: 1140px) {
      & img {
        width: 15px;
      }
    }
  }
`,xi=({url:e,time:t,title:r,subTitle:n,rate:i})=>o.jsxs(Qa,{children:[o.jsxs(ec,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:e}),o.jsx(tc,{children:o.jsx(S,{type:d.enum_H5Text,children:t})})]}),o.jsxs(nc,{children:[o.jsx(rc,{children:o.jsx(S,{type:d.enum_H4Text,children:r})}),o.jsxs(ic,{children:[o.jsxs(oc,{children:[o.jsx(S,{type:d.enum_H6Text,children:n}),o.jsxs(sc,{children:[o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"}),o.jsx(S,{type:d.enum_H5Text,children:i})]})]}),o.jsx(Z,{type:b.enum_blackButton,children:"PLACE BID"})]})]})]}),re=[{id:1,time:"07h 09m 12s",title:"Sun-Glass",subTitle:"Current bid",rate:"1.75",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"},{id:2,time:"04h 15m 30s",title:"Shimmering Horizon",subTitle:"Current bid",rate:"4.20",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png"},{id:3,time:"02h 50m 10s",title:"Luminous Beach",subTitle:"Current bid",rate:"2.80",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass3.png"},{id:4,time:"03h 05m 45s",title:"Dazzling Waves",subTitle:"Current bid",rate:"3.50",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass4.png"},{id:5,time:"04h 35m 20s",title:"Radiant Seascape",subTitle:"Current bid",rate:"4.15",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"},{id:6,time:"03h 12m 55s",title:"Golden Sandbanks",subTitle:"Current bid",rate:"3.75",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png"},{id:7,time:"02h 40m 05s",title:"Sunset Paradise",subTitle:"Current bid",rate:"2.90",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass3.png"},{id:8,time:"04h 10m 15s",title:"Serenity Shores",subTitle:"Current bid",rate:"4.10",url:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass4.png"}],ac=c.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  background: var(--neutrals-8, #fcfcfd);
  box-shadow: 0px 43px 34px -25px rgba(15, 15, 15, 0.12);

  & button {
    svg {
      fill: #929292;
      transition: all 0.8s;
    }
    &:hover {
      svg {
        fill: #23262f;
      }
    }
  }
`,cc=c.div`
  & button {
    padding: 22px 35px 22px 22px;
    border-radius: 18px 0 0 18px;
    background: var(--neutrals-8, #fcfcfd);
  }
`,lc=c.div`
  & button {
    padding: 22px 22px 22px 35px;
    border-radius: 0 18px 18px 0;
    background: var(--neutrals-8, #fcfcfd);
  }
`,uc=c.div`
  content: "";
  width: 2px;
  height: 27px;
  border-radius: 2px;
  background: var(--neutrals-6, #e6e8ec);
`,yi=({onPrev:e,onNext:t})=>o.jsxs(ac,{children:[o.jsx(cc,{children:o.jsx(Z,{type:b.enum_svgImage,children:'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="icons/Arrow Left 2/Line"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M11.2397 8.39036C10.8023 7.98657 10.1203 8.01384 9.71654 8.45128L6.23402 12.224C5.85287 12.6369 5.85287 13.2733 6.23401 13.6862L9.71653 17.459C10.1203 17.8965 10.8023 17.9237 11.2397 17.5199C11.6772 17.1161 11.7045 16.4342 11.3007 15.9967L9.48802 14.033L19.9611 14.033C20.5565 14.033 21.0391 13.5504 21.0391 12.9551C21.0391 12.3598 20.5565 11.8772 19.9611 11.8772L9.48805 11.8772L11.3007 9.91356C11.7044 9.47612 11.6772 8.79416 11.2397 8.39036Z"/></g></svg>',onClick:e})}),o.jsx(uc,{}),o.jsx(lc,{children:o.jsx(Z,{type:b.enum_svgImage,children:'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7603 8.39036C16.1977 7.98657 16.8797 8.01384 17.2835 8.45128L20.766 12.224C21.1471 12.6369 21.1471 13.2733 20.766 13.6862L17.2835 17.459C16.8797 17.8965 16.1977 17.9237 15.7603 17.5199C15.3228 17.1161 15.2955 16.4342 15.6993 15.9967L17.512 14.033L7.03886 14.033C6.44354 14.033 5.96094 13.5504 5.96094 12.9551C5.96094 12.3598 6.44354 11.8772 7.03886 11.8772L17.5119 11.8772L15.6993 9.91356C15.2956 9.47612 15.3228 8.79416 15.7603 8.39036Z"/></svg>',onClick:t})})]}),dc=()=>{const[e,t]=br.useState(0),r=()=>{t(i=>(i+1)%re.length)},n=()=>{t(i=>(i-1+re.length)%re.length)};return R.jsxs(qa,{children:[R.jsx(S,{type:d.enum_H2Text,children:"Weekly - Top NFT"}),R.jsx(Xa,{children:[...re,...re,...re].map(i=>R.jsx(Ja,{style:{transform:`translateX(${-e*100}%)`},children:R.jsx(xi,{time:i.time,title:i.title,subTitle:i.subTitle,rate:i.rate,url:i.url},`SlidersBlock${i.id}`)}))}),R.jsx(Za,{children:R.jsx(yi,{onPrev:n,onNext:r})})]})},pc=c.div`
  display: flex;
  padding: 75px 0 143px 0;
  position: relative;
  @media (max-width: 1546px) {
    overflow: hidden;
  }
  @media (max-width: 890px) {
    overflow: hidden;
  }
`,fc=c.div`
  max-width: 567px;
  @media (max-width: 890px) {
    max-width: 403px;
  }
`,hc=c.div`
  z-index: -20;
  width: 128px;
  position: absolute;
  top: 100px;
  right: 6px;
  transform: rotate(-5deg);
  & img {
    width: 100%;
  }
  @media (max-width: 890px) {
    width: 108px;
    top: 100px;
    right: 70px;
  }
`,mc=c.div`
  z-index: -20;
  width: 103px;
  height: 92px;
  position: absolute;
  top: 100px;
  right: -150px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 890px) {
    top: 50px;
    right: -100px;
  }
`,gc=c.div`
  z-index: -20;
  width: 173px;
  height: 192px;
  position: absolute;
  top: 307px;
  right: -150px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 890px) {
    top: 150px;
    right: -100px;
  }
`,xc=c.div`
  max-width: 780px;
  @media (max-width: 890px) {
    max-width: 448px;
    margin-left: 34px;
  }
`,yc=c.div`
  max-width: 567px;
`,bc=c.div`
  max-width: 567px;
`,vc=c.div`
  max-width: 499px;
  color: #676767;
`,wc=c.div`
  display: flex;
  margin: 45px 0 82px 0;
  align-items: center;
  :first-child {
    margin-right: 44px;
  }
`,$c=()=>o.jsxs(yc,{children:[o.jsx(bc,{children:o.jsx(S,{type:d.enum_H1Text,children:"Discover And Create NFTs"})}),o.jsx(vc,{children:o.jsx(S,{type:d.enum_H4Text,children:"Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus."})}),o.jsxs(wc,{children:[o.jsx(Z,{type:b.enum_blackButton,children:"Explore More"}),o.jsx(Z,{type:b.enum_whiteButton,children:"create NFT"})]})]}),Sc=c.div`
  h6 {
    color: #848586;
  }
`,kc=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 455px;
`,Cc=()=>{const e=[{id:1,title:"430K+",subTitle:"Art Works"},{id:2,title:"159K+",subTitle:"Creators"},{id:3,title:"87K+",subTitle:"Collections"}];return o.jsx(kc,{children:e.map(t=>o.jsx(o.Fragment,{children:o.jsxs(Sc,{children:[o.jsx(S,{type:d.enum_H3Text,children:t.title},`featuresTitle${t.id}`),o.jsx(S,{type:d.enum_H6Text,children:t.subTitle},`featuresSubtitle${t.id}`)]})}))})},jc=c.div`
  position: relative;
`,_c=c.div`
  width: 391px;
  height: 420px;
`,Ic=c.div`
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  position: absolute;
  left: 425px;
  top: 175px;
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  filter: blur(33px);
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  @media (max-width: 1140px) {
    width: 226px;
    height: 229px;
    left: 240px;
    top: 190px;
  }
  @media (max-width: 768px) {
    right: 240px;
    top: 170px;
  }
`,Tc=c.div`
  width: 390px;
  height: 394px;
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }

  @media (max-width: 1140px) {
    width: 279px;
    height: 280px;
  }
`,Ac=c.div`
  margin-top: 28px;
  text-align: center;
`,Rc=()=>{const[e,t]=Re.useState(0),r=()=>{t(s=>s===0?re.length-1:s-1)},n=()=>{t(s=>s===re.length-1?0:s+1)},i=s=>(s+1)%re.length;return o.jsxs(jc,{children:[o.jsx(_c,{children:o.jsx(Tc,{children:o.jsx(D,{type:N.enum_backGroundImage,background:re[e].url,alt:"Main Item"})})}),o.jsx(Ic,{children:o.jsx(D,{type:N.enum_backGroundImage,background:re[i(e)].url,alt:"Next Slide"})}),o.jsx(Ac,{children:o.jsx(yi,{onPrev:r,onNext:n})})]})},Pc=()=>o.jsxs(pc,{children:[o.jsxs(fc,{children:[o.jsx($c,{}),o.jsx(Cc,{})]}),o.jsx(xc,{children:o.jsx(Rc,{})}),o.jsx(hc,{children:o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/HeroHeaderImageArrow.svg"})}),o.jsx(mc,{children:o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/DotOrnament.svg"})}),o.jsx(gc,{children:o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/DotOrnament.svg"})})]}),Lc=c.div`
  display: flex;
  padding: 45px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 890px) {
    padding: 34px 0;
  }
`,Ec=c.div`
  margin-right: 27px;
  width: 53px;
  & img {
    cursor: pointer;
  }
`,Bc=[{id:1,title:"Discover"},{id:2,title:"creators"},{id:3,title:"Sell"},{id:4,title:"stats"}],Hc=()=>o.jsxs(o.Fragment,{children:[o.jsx(Ec,{children:o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/Logo.svg"})}),Bc.map(e=>o.jsx(S,{type:d.enum_aText,children:e.title},`NavMenu ${e.id}`))]}),zc=ea`
    from {
        left: -150px;
    }
    to {
        left: 100%;
    }
`,Nc=c.div`
  align-items: center;
  display: flex;
  & svg {
    position: relative;
    left: 30px;
  }
  @media (max-width: 1140px) {
    & svg {
      left: 18px;
      width: 11px;
    }
  }
`,Oc=c.input`
  outline: none;
  display: flex;
  width: 100%;
  color: ${O.BLACK};
  font-size: 16px;
  padding: 18px 22px 18px 35px;
  gap: 10px;
  border-radius: 14px;
  font-weight: 500;
  border: none;
  background: #ededed;
  cursor: pointer;
  &::placeholder {
    color: #c2c3cb;
  }
  &:active,
  &:focus,
  &:hover {
  }
  @media (max-width: 1140px) {
    font-size: 11px;
    padding: 12px 13px 12px 20px;
    &::placeholder {
      font-size: 11px;
    }
  }
`,Dc=c.div`
  font-size: 25px;
`,Mc=c.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  height: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 80%;
    background: linear-gradient(to right, transparent 0%, transparent 100%);
    animation: ${zc} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;var pe=(e=>(e.NUMBER="number",e.TEXT="text",e.CVV="cvv",e.CARD_DATE="cardDate",e.CARD="card",e.DATE="date",e.TIME="time",e.TEXT_ONLY="textOnly",e.TEL="tel",e.EMAIL="email",e.PASSWORD="password",e))(pe||{}),bi=(e=>(e.number="number",e.text="text",e.tel="tel",e.textOnly="textOnly",e.card="card",e.cvv="cvv",e.cardDate="cardDate",e))(bi||{});const Fc="input",Gc={type:pe.TEXT,value:"",onChange:()=>({})},Wc=e=>e in bi,Yc=(e,t)=>{switch(e){case pe.NUMBER:return Ee(t,/^[0-9]*$/);case pe.CVV:return t.length===4?t.slice(0,-1):Ee(t,/^[0-9]*$/);case pe.TEXT_ONLY:return Ee(t,/^[a-zA-Zа-яА-Я\s]+$/);case pe.CARD:return t=Ee(t.replace(/\s/g,""),/^(\d{0,4}){0,3}\d{0,4}$/),t.replace(/(.{4})(?!$)/g,"$1 ");case pe.CARD_DATE:return t.length===2&&(t=t.substring(0,2)+"/"+t.substring(2)),Ee(t,/^(\d{0,2}\/){0,1}\d{0,2}$/);case pe.TEL:return t.length===13?t.slice(0,-1):"+7"+Ee(t.substring(2),/^[0-9]*$/);default:return t}},Ee=(e,t)=>t.test(e)?e:e.slice(0,-1),vi=e=>{if(e.isError)return o.jsx(Dc,{children:"Произошла ошибка"});const{value:t,onChange:r,type:n,placeholder:i,isLoading:s,autoFocus:a,...l}=e,u=Re.useCallback(p=>{r==null||r(Yc(n,p.target.value))},[r,n]);return o.jsx(o.Fragment,{children:s?o.jsx(Mc,{}):o.jsxs(Nc,{children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"24px",height:"24px",children:o.jsx("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"})}),o.jsx(Oc,{"data-testid":Fc,autoFocus:a,value:t,type:Wc(n)?pe.TEXT:n,onInput:u,placeholder:i,...l})]})})};vi.defaultProps=Gc;c.div``;const Uc=c.div`
  margin-left: 30px;
`,Vc=()=>{const[e,t]=Re.useState("");return o.jsxs(o.Fragment,{children:[o.jsx(vi,{type:pe.TEXT,value:e,placeholder:"Search Art Work / Creator",onChange:r=>t(r)}),o.jsx(Uc,{children:o.jsx(Z,{type:b.enum_blackButton,children:"Connect Wallet"})})]})},Kc=()=>o.jsxs(Lc,{children:[o.jsx(Hc,{}),o.jsx(Vc,{})]}),qc=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 31px 31px 31px 66px;
  margin-bottom: 160px;
  border-radius: 30px;
  background: #141416;
  h2 {
    margin-top: 11px;
    color: ${O.WHITE};
  }
  h4 {
    margin-top: 12px;
    margin-bottom: 50px;
    color: #d4d4d4;
  }

  & button {
    color: ${O.WHITE};
    border: 2px solid ${O.WHITE};
    margin-right: 30px;
    margin-bottom: 20px;
    &:hover {
      color: ${O.PRIMARY_BLACK};
      background: ${O.WHITE};
    }
  }

  @media (max-width: 1100px) {
    padding: 22px 22px 22px 47px;
  }
`,Zc=c.div``,Xc=c.div`
  width: 369px;
  height: 249px;
  flex-shrink: 0;
  & div {
    border-radius: 15px;
  }
  @media (max-width: 1100px) {
    width: 260px;
  }
`,Jc=()=>o.jsxs(qc,{children:[o.jsxs(Zc,{children:[o.jsx(S,{type:d.enum_H2Text,children:"Create and Sell NFTs"}),o.jsx(S,{type:d.enum_H4Text,children:"World’s Largest NFT Place"}),o.jsx(Z,{type:b.enum_whiteButton,children:"Explore More"}),o.jsx(Z,{type:b.enum_whiteButton,children:"Sell Artwork"})]}),o.jsx(Xc,{children:o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"})})]}),Qc=c.div`
  position: relative;
  padding: 100px 0 245px 0;
  border-bottom: 1px solid #cbcbcb;
  h2 {
    text-align: center;
  }
`,el=c.div`
  padding: 82px 0 115px 0;
  display: flex;
  justify-content: center;
  & button {
    align-items: center;
    margin: 0 11px;
    & img {
      margin-right: 8px;
    }
  }
`,tl=c.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`,rl=c.div`
  margin: 33px 0;
`,nl=c.div`
  position: absolute;
  bottom: 102px;
  right: 0;
`,il=()=>{const e=[{id:1,text:"All",icon:""},{id:2,text:"Category",icon:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/Collection.svg"},{id:3,text:"Collection",icon:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/Dollar.svg"},{id:4,text:"Price",icon:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/List.svg"}];return o.jsxs(Qc,{children:[o.jsx(S,{type:d.enum_H2Text,children:"Explore Marketplace"}),o.jsx(el,{children:e.map(t=>o.jsxs(Z,{type:b.enum_whiteButton,children:[o.jsx("img",{src:t.icon}),o.jsx(S,{type:d.enum_H5Text,children:t.text})]},`CategoryFilter ${t.id}`))}),o.jsx(tl,{children:re.map(t=>o.jsx(rl,{children:o.jsx(xi,{url:t.url,time:t.time,title:t.title,subTitle:t.subTitle,rate:t.rate},`ExploreItemsCards${t.id}`)}))}),o.jsx(nl,{children:o.jsx(Z,{type:b.enum_Explore,children:"Explore All"})})]})},ol=c.div`
  background: ${O.PRIMARY_BLACK};
  padding: 92px 0 0 0;
`,sl=c.div`
  color: ${O.WHITE};
  display: flex;
  align-items: center;
  & svg {
    margin-right: 10px;
  }
  & h4 {
    font-size: 29px;
    @media (max-width: 890px) {
      font-size: 20px;
    }
  }
`,al=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 635px;
  & a {
    margin: 0;
    color: #b9b9b9;
    text-transform: inherit;
  }
`,cl=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 25px 0;
`,ll=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #818181;
  padding: 59px 0 82px 0;
  & h6 {
    color: #999;
  }
  & button {
    color: #fff;
    width: 21px;
  }
  & svg {
    fill: #707070;
    &:hover {
      fill: #fff;
    }
  }
`,ul=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 235px;
`,dl=[{id:1,url:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>'},{id:2,url:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg> '},{id:3,url:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" width="30px" height="30px"><path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11h4.205l-0.571,4H16v12H12z"/></svg>'},{id:4,url:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" width="30px" height="30px"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>'}],pl=()=>o.jsxs(ol,{children:[o.jsxs(cl,{children:[o.jsxs(sl,{children:[o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"65",viewBox:"0 0 65 65",fill:"none",children:[o.jsx("path",{d:"M57.5514 44.3083C55.1681 44.3083 54.1118 43.3874 52.6222 42.0874C50.9702 40.6791 48.9119 38.8916 45.0389 38.8916C41.1389 38.8916 39.1076 40.6791 37.4556 42.0874C35.966 43.3874 34.8827 44.3083 32.4993 44.3083C30.1431 44.3083 29.0597 43.3874 27.5702 42.0874C25.9181 40.6791 23.8598 38.8916 19.9869 38.8916C16.0869 38.8916 14.0285 40.6791 12.3765 42.0874C10.8869 43.3874 9.8306 44.3083 7.44727 44.3083C6.33685 44.3083 5.41602 45.2291 5.41602 46.3395C5.41602 47.477 6.33685 48.3708 7.44727 48.3708C11.3473 48.3708 13.3785 46.6104 15.0306 45.1749C16.5201 43.8749 17.6035 42.9541 19.9869 42.9541C22.3702 42.9541 23.4265 43.8749 24.916 45.1749C26.5681 46.6104 28.6264 48.3708 32.4993 48.3708C36.3993 48.3708 38.4577 46.6104 40.1098 45.1749C41.5993 43.8749 42.6556 42.9541 45.0389 42.9541C47.3952 42.9541 48.4785 43.8749 49.9681 45.1749C51.6202 46.6104 53.6785 48.3708 57.5514 48.3708C58.6618 48.3708 59.5827 47.477 59.5827 46.3395C59.5827 45.2291 58.6618 44.3083 57.5514 44.3083Z",fill:"white"}),o.jsx("path",{d:"M57.5514 33.1501C55.1681 33.1501 54.1118 32.2021 52.6222 30.9292C50.9702 29.4938 48.9119 27.7334 45.0389 27.7334C41.1389 27.7334 39.1076 29.4938 37.4556 30.9292C35.966 32.2021 34.8827 33.1501 32.4993 33.1501C30.1431 33.1501 29.0597 32.2021 27.5702 30.9292C25.9181 29.4938 23.8598 27.7334 19.9869 27.7334C16.0869 27.7334 14.0285 29.4938 12.3765 30.9292C10.8869 32.2021 9.8306 33.1501 7.44727 33.1501C6.33685 33.1501 5.41602 34.0438 5.41602 35.1813C5.41602 36.2917 6.33685 37.2126 7.44727 37.2126C11.3473 37.2126 13.3785 35.4251 15.0306 33.9896C16.5201 32.7167 17.6035 31.7959 19.9869 31.7959C22.3702 31.7959 23.4265 32.7167 24.916 33.9896C26.5681 35.4251 28.6264 37.2126 32.4993 37.2126C36.3993 37.2126 38.4577 35.4251 40.1098 33.9896C41.5993 32.7167 42.6556 31.7959 45.0389 31.7959C47.3952 31.7959 48.4785 32.7167 49.9681 33.9896C51.6202 35.4251 53.6785 37.2126 57.5514 37.2126C58.6618 37.2126 59.5827 36.2917 59.5827 35.1813C59.5827 34.0438 58.6618 33.1501 57.5514 33.1501Z",fill:"white"}),o.jsx("path",{d:"M7.44727 26.1091C11.3473 26.1091 13.3785 24.3216 15.0306 22.9132C16.5201 21.6132 17.6035 20.6924 19.9869 20.6924C22.3702 20.6924 23.4265 21.6132 24.916 22.9132C26.5681 24.3216 28.6264 26.1091 32.4993 26.1091C36.3993 26.1091 38.4577 24.3216 40.1098 22.9132C41.5993 21.6132 42.6556 20.6924 45.0389 20.6924C47.3952 20.6924 48.4785 21.6132 49.9681 22.9132C51.6202 24.3216 53.6785 26.1091 57.5514 26.1091C58.6618 26.1091 59.5827 25.1882 59.5827 24.0778C59.5827 22.9403 58.6618 22.0466 57.5514 22.0466C55.1681 22.0466 54.1118 21.1257 52.6222 19.8257C50.9702 18.3903 48.9119 16.6299 45.0389 16.6299C41.1389 16.6299 39.1076 18.3903 37.4556 19.8257C35.966 21.1257 34.8827 22.0466 32.4993 22.0466C30.1431 22.0466 29.0597 21.1257 27.5702 19.8257C25.9181 18.3903 23.8598 16.6299 19.9869 16.6299C16.0869 16.6299 14.0285 18.3903 12.3765 19.8257C10.8869 21.1257 9.8306 22.0466 7.44727 22.0466C6.33685 22.0466 5.41602 22.9403 5.41602 24.0778C5.41602 25.1882 6.33685 26.1091 7.44727 26.1091Z",fill:"white"})]}),o.jsx(S,{type:d.enum_H4Text,children:"DiveSea"})]}),o.jsxs(al,{children:[o.jsx(S,{type:d.enum_aText,children:"Privacy Policy"}),o.jsx(S,{type:d.enum_aText,children:"Term & Conditions"}),o.jsx(S,{type:d.enum_aText,children:"About Us"}),o.jsx(S,{type:d.enum_aText,children:"Contact"})]})]}),o.jsxs(ll,{children:[o.jsx(S,{type:d.enum_H6Text,children:"© 2023 EATLY All Rights Reserved."}),o.jsx(ul,{children:dl.map(e=>o.jsx(Z,{type:b.enum_svgImage,children:e.url},`socialDataFooter${e.id}`))})]})]}),fl=c.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 116px 0 245px 0;
  h2 {
    color: #c5c5c5;
  }
`,hl=c.div`
  margin-top: 70px;
`,ml=c.div`
  position: absolute;
  bottom: 180px;
  right: 360px;
  z-index: 10;
`,gl=c.div``,xl=c.div`
  h2 {
    color: #18181b;
  }
`,yl=c.div`
  margin-top: 45px;
  margin-bottom: 70px;
`,bl=c.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`,vl=[{id:1,title:"Best Seller All Around World"},{id:2,title:"$2M+ Transections Every Day"},{id:3,title:"Secure Transactions"},{id:4,title:"Exclusive Collections From Sellers"},{id:5,title:"Easy Buying and Selling"},{id:5,title:"Join Our Community"}],wl=c.div`
  border-radius: 14px;
  border: 0.882px solid var(--greyscale-200, #edf2f7);
  background: var(--others-white, #fff);
  box-shadow: 9px 9px 44px 0px rgba(20, 20, 22, 0.1);
  padding: 21px 26px;
  width: 268px;
  margin-right: 180px;
  @media (max-width: 890px) {
    padding: 18px 15px;
    width: 200px;
  }
`,$l=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Sl=c.div``,kl=c.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    font-size: 12px;
  }
  & h6 {
    font-size: 10px;
  }
`,Cl=c.div`
  display: flex;
  align-items: center;
`,jl=c.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 42px;
  margin-right: 13px;
`,_l=c.div`
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${O.PRIMARY_BLACK};
  color: ${O.WHITE};
`,Il=c.div`
  overflow: hidden;
`,Tl=c.div`
  border-radius: 7px;
  border: 1.741px solid var(--neutrals-6, #e6e8ec);
  background: var(--neutrals-6, #e6e8ec);
`,Al=({image:e,name:t,mail:r,follow:n,count:i})=>o.jsxs(kl,{children:[o.jsxs(Cl,{children:[o.jsxs(jl,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:e}),o.jsx(_l,{children:o.jsx(S,{type:d.enum_H6Text,children:i})})]}),o.jsxs(Il,{children:[o.jsx(S,{type:d.enum_H5Text,children:t}),o.jsx(S,{type:d.enum_H6Text,children:r})]})]}),n?o.jsx(Z,{type:b.enum_followButton,children:"Follow"}):o.jsx(Tl,{children:o.jsx(Z,{type:b.enum_followButton,children:"Unfollow"})})]}),Rl=[{id:1,name:"Alex Ca.",subName:"By Alex.",mail:"@Alex",volume:"8,456",day:"+ 27.78%",price:"3,5",owners:"2.2K",items:"500",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png",follow:!0,count:"1"},{id:2,name:"John Doe",subName:"By John.",mail:"@John",volume:"7,892",day:"+ 15.32%",price:"2.8",owners:"1.8K",items:"450",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png",follow:!0,count:"2"},{id:3,name:"Sarah Smith",subName:"By Sarah.",mail:"@Sarah",volume:"6,712",day:"+ 21.17%",price:"3.2",owners:"1.5K",items:"400",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass3.png",follow:!0,count:"2"},{id:4,name:"Mike Johnson",subName:"By Mike.",mail:"@Mike",volume:"9,345",day:"+ 30.05%",price:"4.1",owners:"2.5K",items:"550",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass4.png",follow:!1,count:"3"},{id:5,name:"Emma Brown",subName:"By Emma.",mail:"@Emma",volume:"7,621",day:"+ 18.94%",price:"2.9",owners:"1.7K",items:"480",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png",follow:!0,count:"2"},{id:6,name:"David Wilson",subName:"By David.",mail:"@David",volume:"8,912",day:"+ 25.81%",price:"3.6",owners:"2.0K",items:"520",image:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass2.png",follow:!1,count:"3"}],Pl=()=>o.jsxs(wl,{children:[o.jsxs($l,{children:[o.jsx(S,{type:d.enum_H4Text,children:"Best Sellers"}),o.jsx(Z,{type:b.enum_svgImage,children:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none"><path d="M7.447 1.84067C7.447 2.05794 7.84209 2.23407 8.32946 2.23407C8.81682 2.23407 9.21191 2.05794 9.21191 1.84067C9.21191 1.6234 8.81683 1.44727 8.32946 1.44727C7.84209 1.44727 7.447 1.6234 7.447 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.26927 1.84067C1.26927 2.05794 1.66436 2.23407 2.15172 2.23407C2.63909 2.23407 3.03418 2.05794 3.03418 1.84067C3.03418 1.6234 2.63909 1.44727 2.15172 1.44727C1.66436 1.44727 1.26927 1.6234 1.26927 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6238 1.84067C13.6238 2.05794 14.0188 2.23407 14.5062 2.23407C14.9936 2.23407 15.3887 2.05794 15.3887 1.84067C15.3887 1.6234 14.9936 1.44727 14.5062 1.44727C14.0188 1.44727 13.6238 1.6234 13.6238 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/></svg>'})]}),o.jsx(Sl,{children:Rl.map(e=>o.jsx(Al,{name:e.name,mail:e.mail,subName:e.subName,volume:e.volume,day:e.day,price:e.price,owners:e.owners,items:e.items,image:e.image,follow:e.follow,count:e.count}))})]}),Ll=c.div`
  position: absolute;
  width: 300px;
  top: 75px;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 13px;
  background: linear-gradient(217deg, #fcfcfd -0.01%, rgba(252, 252, 253, 0.6) 100%);
  box-shadow: 0px 19px 28px 0px rgba(70, 70, 70, 0.1);
  backdrop-filter: blur(15px);
  h2 {
    color: #c5c5c5;
  }
  @media (max-width: 890px) {
    padding: 8px;
    width: 230px;
  }
`,El=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 11px;
`,Bl=c.div`
  margin-right: 11px;
  width: 6.5px;
  height: 7.5px;
  background: #141416;
  border-radius: 50px;
`,Hl=c.div`
  position: absolute;
  top: 0px;
  right: -5px;
  width: 17px;
  height: 17px;
`,zl=c.div`
  display: flex;
  align-items: center;
  & span {
    display: inline;
  }
`,Nl=c.div`
  margin-left: 11px;
  & h6 {
    color: #949494;
  }

  & span {
    font-weight: 700;
    font-size: 12px;
  }
`,Ol=c.div`
  & h6 {
    display: inline;
  }
  & span {
    margin-bottom: 10px;
  }
`,Dl=c.div`
  width: 39px;
  height: 39px;
  position: relative;
`,Ml=c.div`
  width: 60px;
  height: 60px;
  border-radius: 10.443px;
`,Fl=()=>o.jsxs(Ll,{children:[o.jsxs(zl,{children:[o.jsxs(El,{children:[o.jsx(Bl,{}),o.jsxs(Dl,{children:[o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"}),o.jsx(Hl,{children:o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/checkIcon.svg"})})]})]}),o.jsxs(Nl,{children:[o.jsxs(Ol,{children:[o.jsx(S,{type:d.enum_H6Text,children:"New bid  "}),o.jsx("span",{children:"Rotation"})]}),o.jsx("span",{children:"0.002 ETH"}),o.jsx(S,{type:d.enum_H6Text,children:"6 Oct 2022, 11:44 PM"})]})]}),o.jsx(Ml,{children:o.jsx(D,{type:N.enum_backGroundImage,background:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"})})]}),Gl=()=>o.jsxs(fl,{children:[o.jsxs(gl,{children:[o.jsx(S,{type:d.enum_H2Text,children:"Just Unleash - "}),o.jsx(xl,{children:o.jsx(S,{type:d.enum_H2Text,children:"Your Inner Collector"})}),o.jsxs(yl,{children:[vl.map(e=>o.jsxs(bl,{children:[o.jsx(D,{type:N.enum_defaultImage,src:"/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/Unleash.svg"}),o.jsx(S,{type:d.enum_H5Text,children:e.title},`UnleashSubTitleDataUnleash${e.id}`)]})),o.jsx(hl,{children:o.jsx(Z,{type:b.enum_ExploreBlack,children:"Explore More"})})]}),o.jsx(ml,{children:o.jsx(gi,{})})]}),o.jsx(Pl,{}),o.jsx(Fl,{})]}),nr=M.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;
`,Wl=M.div`
  background: ${O.PRIMARY_BLACK};
  overflow: hidden;
`,Yl=M.div`
  background: #f1f1f1;
  overflow: hidden;
`,Vl=()=>R.jsxs(R.Fragment,{children:[R.jsxs(nr,{children:[R.jsx(Kc,{}),R.jsx(Pc,{})]}),R.jsx(Yl,{children:R.jsx(dc,{})}),R.jsxs(nr,{children:[R.jsx(Ka,{}),R.jsx(il,{}),R.jsx(Gl,{}),R.jsx(Jc,{})]}),R.jsx(Wl,{children:R.jsx(nr,{children:R.jsx(pl,{})})})]});export{Vl as default};
