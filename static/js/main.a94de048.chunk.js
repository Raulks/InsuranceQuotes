(this.webpackJsonpinsurancequotes=this.webpackJsonpinsurancequotes||[]).push([[0],{16:function(e,n,a){e.exports=a(25)},21:function(e,n,a){},24:function(e,n,a){},25:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(5),o=a.n(c),l=(a(21),a(7)),i=a(1),u=a(2);function m(){var e=Object(i.a)(["\nfont-size: 2rem;\nmargin:0;\nfont-family: 'Slabo 27px', serif;\ntext-align: center;\n"]);return m=function(){return e},e}function s(){var e=Object(i.a)(["\nbackground: -webkit-linear-gradient(to right, #453534, #346643);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #935346, #835499); \npadding: 10px;\nfont-weight:bold;\ncolor: #FFFFFF;\n"]);return s=function(){return e},e}var d=u.a.header(s()),p=u.a.h1(m()),v=function(e){var n=e.titulo;return r.a.createElement(d,null,r.a.createElement(p,null,n))},f=a(8),E=a(11);function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(){var e=Object(i.a)(["\n  background-color: red;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n  margin-bottom: 2rem;\n"]);return b=function(){return e},e}function k(){var e=Object(i.a)(["\n  background-color: #00838f;\n  font-size: 16px;\n  width: 100%;\n  padding: 1rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  transition: background-color 1s ease;\n  margin-top: 2rem;\n\n  &:hover {\n    background-color: #26c6da;\n    cursor: pointer;\n  }\n"]);return k=function(){return e},e}function h(){var e=Object(i.a)(["\n  margin: 0 1rem;\n"]);return h=function(){return e},e}function j(){var e=Object(i.a)(["\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #e1e1e1;\n  --webkit-appearance: none;\n"]);return j=function(){return e},e}function O(){var e=Object(i.a)(["\n  flex: 0 0 100px;\n"]);return O=function(){return e},e}function x(){var e=Object(i.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n"]);return x=function(){return e},e}var w=u.a.div(x()),N=u.a.label(O()),y=u.a.select(j()),F=u.a.input(h()),C=u.a.button(k()),z=u.a.div(b()),S=function(e){var n=e.guardarResumen,a=e.guardarCargando,c=Object(t.useState)({marca:"",year:"",plan:""}),o=Object(l.a)(c,2),i=o[0],u=o[1],m=Object(t.useState)(!1),s=Object(l.a)(m,2),d=s[0],p=s[1],v=i.marca,g=i.year,b=i.plan,k=function(e){return u(Object(E.a)(Object(E.a)({},i),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==v.trim()&&""!==g.trim()&&""!==b.trim()){p(!1);var t=function(e){return(new Date).getFullYear()-e}(g),r=2e3;r-=3*t*r/100,r=function(e){var n;switch(e){case"europeo":n=1.3;break;case"americano":n=1.15;break;case"asiatico":n=1.05}return n}(v)*r;var c=function(e){return"basico"===e?1.2:1.5}(b);r=parseFloat(c*r).toFixed(2),a(!0),setTimeout((function(){a(!1),n({cotizacion:Number(r),datos:i})}),1500)}else p(!0)}},d?r.a.createElement(z,null,"Todos los campos son obligatorios"):null,r.a.createElement(w,null,r.a.createElement(N,null,"Marca"),r.a.createElement(y,{name:"marca",value:v,onChange:k},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"asiatico"},"Asi\xe1tico"),r.a.createElement("option",{value:"europeo"},"Europeo"))),r.a.createElement(w,null,r.a.createElement(N,null,"A\xf1o"),r.a.createElement(y,{name:"year",value:g,onChange:k},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"2021"},"2021"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"),r.a.createElement("option",{value:"2011"},"2011"),r.a.createElement("option",{value:"2010"},"2010"),r.a.createElement("option",{value:"2009"},"2009"))),r.a.createElement(w,null,r.a.createElement(N,null,"Plan"),r.a.createElement(F,{type:"radio",name:"plan",value:"basico",checked:"basico"===b,onChange:k}),"B\xe1sico",r.a.createElement(F,{type:"radio",name:"plan",value:"completo",checked:"completo"===b,onChange:k}),"Completo"),r.a.createElement(C,{type:"submit"},"Cotizar"))};function A(){var e=Object(i.a)(["\npadding: 1rem;\ntext-align:center;\nbackground-color: #00838F;\ncolor: #FFF;\nmargin-top: 1rem;\n"]);return A=function(){return e},e}var B=u.a.div(A()),R=function(e){var n=e.datos,a=n.marca,t=n.year,c=n.plan;return""===a||""===t||""===c?null:r.a.createElement(B,null,r.a.createElement("h2",null,"Resumen de Cotizaci\xf3n"),r.a.createElement("ul",null,r.a.createElement("li",null,"Marca: ",g(a)),r.a.createElement("li",null,"Plan: ",g(c)),r.a.createElement("li",null,"A\xf1o del veh\xedculo: ",t)))},q=a(28),D=a(27);function J(){var e=Object(i.a)(["\n  color: #00838f;\n  padding: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n"]);return J=function(){return e},e}function M(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 0.5rem;\n  border: 1px solid #26c6da;\n  background-color: rgb(127, 224, 237);\n  margin-top: 1rem;\n  position: relative;\n"]);return M=function(){return e},e}function P(){var e=Object(i.a)(["\n  background-color: rgb(127, 224, 237);\n  margin-top: 2rem;\n  padding: 1rem;\n  text-align: center;\n"]);return P=function(){return e},e}var T=u.a.p(P()),W=u.a.div(M()),I=u.a.p(J()),U=function(e){var n=e.cotizacion;return 0===n?r.a.createElement(T,null,"Elige marca, a\xf1o y plan"):r.a.createElement(W,null,r.a.createElement(q.a,{component:"span",className:"resultado"},r.a.createElement(D.a,{classNames:"resultado",key:n,timeout:{enter:500,exit:500}},r.a.createElement(I,null,r.a.createElement("span",null,"El total es: ",n," \u20ac")))))},Y=(a(24),function(){return r.a.createElement("div",{className:"sk-circle"},r.a.createElement("div",{className:"sk-circle1 sk-child"}),r.a.createElement("div",{className:"sk-circle2 sk-child"}),r.a.createElement("div",{className:"sk-circle3 sk-child"}),r.a.createElement("div",{className:"sk-circle4 sk-child"}),r.a.createElement("div",{className:"sk-circle5 sk-child"}),r.a.createElement("div",{className:"sk-circle6 sk-child"}),r.a.createElement("div",{className:"sk-circle7 sk-child"}),r.a.createElement("div",{className:"sk-circle8 sk-child"}),r.a.createElement("div",{className:"sk-circle9 sk-child"}),r.a.createElement("div",{className:"sk-circle10 sk-child"}),r.a.createElement("div",{className:"sk-circle11 sk-child"}),r.a.createElement("div",{className:"sk-circle12 sk-child"}))});function $(){var e=Object(i.a)(["\n  background-color: #fff;\n  padding: 3em;\n"]);return $=function(){return e},e}function G(){var e=Object(i.a)(["\n  max-width: 700px;\n  margin: 0 auto; ;\n"]);return G=function(){return e},e}var H=u.a.div(G()),K=u.a.div($());var L=function(){var e=Object(t.useState)({cotizacion:0,datos:{marca:"",year:"",plan:""}}),n=Object(l.a)(e,2),a=n[0],c=n[1],o=Object(t.useState)(!1),i=Object(l.a)(o,2),u=i[0],m=i[1],s=a.cotizacion,d=a.datos;return r.a.createElement(H,null,r.a.createElement(v,{titulo:"Cotizador de seguros"}),r.a.createElement(K,null,r.a.createElement(S,{guardarResumen:c,guardarCargando:m}),u?r.a.createElement(Y,null):null,r.a.createElement(R,{datos:d}),u?null:r.a.createElement(U,{cotizacion:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a94de048.chunk.js.map