(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(5),r=c.n(n),s=(c(10),c(3)),d=c(2),o=c.n(d),l=c.p+"static/media/khaleesi.d85f5704.jpg",m=c.p+"static/media/arya.a64e972e.jpg",j=c.p+"static/media/cersei.c72e0bc5.jpg",u=c.p+"static/media/jaime.f22349e3.jpg",b=c.p+"static/media/jon.e775ccb6.jpg",g=c.p+"static/media/margaery.99a12421.jpg",p=c.p+"static/media/sansa.9174818d.jpg",x=c.p+"static/media/tyrion.5b9c4765.jpg",h=c(0);function f(){var e=[{src:l,id:o()(),clicked:!1,name:"Daenerys Targaryen"},{src:b,id:o()(),clicked:!1,name:"Jon Snow"},{src:m,id:o()(),clicked:!1,name:"Arya Stark"},{src:j,id:o()(),clicked:!1,name:"Cersei Lannister"},{src:g,id:o()(),clicked:!1,name:"Margaery Tyrell"},{src:p,id:o()(),clicked:!1,name:"Sansa Stark"},{src:x,id:o()(),clicked:!1,name:"Tyrion Lannister"},{src:u,id:o()(),clicked:!1,name:"Jaime Lannister"}],t=Object(a.useState)(e),c=Object(s.a)(t,2),i=c[0],n=c[1];Object(a.useEffect)((function(){n(L(i))}),[]);var r=Object(a.useState)(0),d=Object(s.a)(r,2),f=d[0],O=d[1];Object(a.useEffect)((function(){8===f&&J(!1)}),[f]);var k,y=Object(a.useState)(0),v=Object(s.a)(y,2),w=v[0],S=v[1],N=Object(a.useState)(!0),M=Object(s.a)(N,2),T=M[0],J=M[1];function C(){J(!0),n(L(e)),S(Math.max(w,f)),O(0)}function E(e){if(i.find((function(t){return t.id===e.currentTarget.id})).clicked)J(!1);else{var t=i.map((function(t){return t.id===e.currentTarget.id&&(t.clicked=!t.clicked,O(f+1)),t}));n(L(t))}}function L(e){for(var t=e,c=t.length-1;c>0;c--){var a=Math.floor(Math.random()*(c+1)),i=t[c];t[c]=t[a],t[a]=i}return t}return Object(h.jsx)("div",{className:"md:container mx-auto font-mono",children:T?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"text-center text-white text-xl mt-5",children:[Object(h.jsxs)("p",{children:["Score: ",f]}),Object(h.jsxs)("p",{children:["HighScore: ",w]})]}),Object(h.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 p-7",children:i.map((function(e){return Object(h.jsxs)("div",{className:"bg-gray-800 shadow-lg cursor-pointer pb-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-4",id:e.id,onClick:E,children:[Object(h.jsx)("img",{className:"w-full h-100 object-cover",src:e.src,alt:e.name}),Object(h.jsx)("p",{className:"text-center font-mono text-white text-lg font-semibold mt-4",children:e.name})]},e.id)}))})]}):(k=f<8?"lose":"win",Object(h.jsx)("div",{className:"container flex items-center justify-center h-screen",children:Object(h.jsxs)("div",{className:"container bg-gray-800 max-w-md py-6 px-4 rounded-lg",children:[Object(h.jsxs)("p",{className:"text-xl text-white text-center",children:["You ",k,"!"]}),Object(h.jsx)("button",{className:"bg-blue-500 float-right rounded p-3 mt-2 text-white",onClick:C,children:"Play Again"})]})}))})}function O(){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{})})}r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.09de2f1b.chunk.js.map