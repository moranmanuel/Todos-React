(this["webpackJsonpplatzi-intro-react-base"]=this["webpackJsonpplatzi-intro-react-base"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(20)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),l=n.n(c);n(12);const r=o.a.createContext();function s(e){let{children:t}=e;const{item:n,saveItem:a,loading:c,error:l}=function(e,t){const[n,a]=o.a.useState(t),[c,l]=o.a.useState(!0),[r,s]=o.a.useState(!1);return o.a.useEffect(()=>{setTimeout(()=>{try{const n=localStorage.getItem(e);let o;n?(o=JSON.parse(n),a(o)):(localStorage.setItem(e,JSON.stringify(t)),o=t),l(!1)}catch(r){l(!1),s(!0)}},2e3)},[e,t]),{item:n,saveItem:t=>{localStorage.setItem(e,JSON.stringify(t)),a(t)},loading:c,error:r}}("TODOS_V1",[]),[s,m]=o.a.useState(""),u=n.filter(e=>!!e.completed).length,i=n.length,d=n.filter(e=>{const t=e.text.toLocaleLowerCase(),n=s.toLocaleLowerCase();return t.includes(n)});return o.a.createElement(r.Provider,{value:{completedTodos:u,totalTodos:i,searchValue:s,setSearchValue:m,searchedTodos:d,completeTodo:e=>{const t=[...n],o=t.findIndex(t=>t.text===e);t[o].completed=!t[o].completed,a(t)},deleteTodo:e=>{const t=[...n],o=t.findIndex(t=>t.text===e);t.splice(o,1),a(t)},createTodo:()=>{const e=[],t=prompt("Ingrese el nombre del nuevo TODO");t&&(e.push({text:t,completed:!1}),e.push(...n),a(e))},loading:c,error:l}},t)}n(13);function m(){const{totalTodos:e,completedTodos:t,loading:n}=o.a.useContext(r);return n?o.a.createElement("h1",{className:"TodoCounter"},"Cargando..."):t<e?o.a.createElement("h1",{className:"TodoCounter"},"Has completado ",o.a.createElement("span",null,t)," de ",o.a.createElement("span",null,e)," TODOs"):0===e?o.a.createElement("h1",{className:"TodoCounter"},"Crea tu primer TODO!"):o.a.createElement("h1",{className:"TodoCounter"},"Felicitaciones! Has completado todos tus TODOS")}n(14);function u(){const{searchValue:e,setSearchValue:t,loading:n}=o.a.useContext(r);return o.a.createElement("input",{placeholder:n?"":"Search for a TODO",className:"TodoSearch ".concat(n&&"TodoSearch-loading"),value:e,onChange:e=>{t(e.target.value)}})}var i;n(15);function d(e){let{children:t}=e;return o.a.createElement("ul",{className:"TodoList"},t)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const f=e=>{let{svgRef:t,title:n,...a}=e;return o.a.createElement("svg",p({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,i||(i=o.a.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))},E=o.a.forwardRef((e,t)=>o.a.createElement(f,p({svgRef:t},e)));var g;n.p;function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const T=e=>{let{svgRef:t,title:n,...a}=e;return o.a.createElement("svg",h({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,g||(g=o.a.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))},v=o.a.forwardRef((e,t)=>o.a.createElement(T,h({svgRef:t},e)));n.p,n(16);const x={check:e=>o.a.createElement(E,{className:"Icon-svg",fill:e}),delete:e=>o.a.createElement(v,{className:"Icon-svg",fill:e})};function C(e){let{type:t,completed:n,onClick:a,text:c,color:l}=e;return o.a.createElement("span",{className:"Icon-container Icon-container-".concat(t," ").concat(n&&"Icon-container-check--active"),onClick:()=>a(c)},x[t](l))}function O(e){let{onComplete:t,text:n,completed:a}=e;return o.a.createElement(C,{type:"check",color:"gray",onClick:t,text:n,completed:a})}function I(e){let{onDelete:t,text:n}=e;return o.a.createElement(C,{type:"delete",color:"gray",onClick:t,text:n})}n(17);function N(e){let{text:t,completed:n,onComplete:a,onDelete:c}=e;return o.a.createElement("li",{className:"TodoItem"},o.a.createElement(O,{onComplete:a,text:t,completed:n}),o.a.createElement("p",{className:"TodoItem-p ".concat(n&&"TodoItem-p--complete")},t),o.a.createElement(I,{onDelete:c,text:t}))}n(18);function S(){return o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"}),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}function L(){return o.a.createElement("p",null,"ERROR 404")}n(19);function y(){const{createTodo:e}=o.a.useContext(r);return o.a.createElement("div",{className:"button",onClick:()=>{e()}},"+")}function b(){const{searchedTodos:e,completeTodo:t,deleteTodo:n,loading:a,error:c}=o.a.useContext(r);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(u,null),o.a.createElement(d,null,a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null)),c&&o.a.createElement(L,null),e.map(e=>o.a.createElement(N,{key:e.text,text:e.text,completed:e.completed,onComplete:t,onDelete:n}))),o.a.createElement(y,null))}var k=function(){return o.a.createElement(s,null,o.a.createElement(b,null))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(k,null))}],[[3,1,2]]]);
//# sourceMappingURL=main.e5da4cf1.chunk.js.map