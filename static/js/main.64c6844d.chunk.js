(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(8),r=a(3),c=a(6),o=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],u=a(0),m=function(e){var t=e.name,a=e.email,n=e.username;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"Name: ".concat(t)}),Object(u.jsx)("div",{"data-cy":"username",children:"Username: ".concat(n)}),Object(u.jsx)("div",{"data-cy":"email",children:"Email: ".concat(a)})]})},h=function(e){var t=e.title,a=e.completed,n=e.user;return Object(u.jsxs)("p",{children:[Object(u.jsx)("div",{"data-cy":"title",children:"Title: ".concat(t)}),Object(u.jsx)("div",{"data-cy":"status",children:"Completed: ".concat(a?"yes":"no")}),Object(u.jsx)("div",{children:n&&Object(u.jsx)(m,{name:n.name,username:n.username,email:n.email})})]})},b=function(e){var t=e.todos;return Object(u.jsx)("ul",{className:"list",children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,i=e.user;return Object(u.jsx)("li",{children:Object(u.jsx)(h,{title:a,completed:n,user:i,id:t})},t)}))})},p=d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:l.find((function(t){return e.userId===t.id}))||null})})),j=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(r.a)(i,2),m=c[0],h=c[1],j=Object(o.useState)(""),y=Object(r.a)(j,2),g=y[0],f=y[1],x=Object(o.useState)(""),O=Object(r.a)(x,2),v=O[0],S=O[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),""===a&&S("Please choose a user"),""===m.trim()&&f("Please enter the title"),""!==a&&""!==m.trim()&&(p.push({id:Math.max.apply(Math,Object(s.a)(d.map((function(e){return+e.id}))))+1,title:m,completed:!1,userId:+a,user:l.find((function(e){return e.id===+a}))||null}),n(""),h(""))},children:[Object(u.jsx)("input",{type:"text",name:"title",value:m,onChange:function(e){h(e.target.value),f("")},className:"input is-link is-rounded","data-cy":"titleInput",placeholder:"Title"}),g&&Object(u.jsx)("p",{className:"error",children:g}),Object(u.jsxs)("select",{name:"user",value:a,onChange:function(e){n(e.target.value),S("")},className:"select","data-cy":"userSelect",children:[Object(u.jsx)("option",{value:"",children:"Choose a user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name})}))]}),v&&Object(u.jsx)("p",{className:"error",children:v}),Object(u.jsx)("button",{type:"submit",className:"button",children:"Add"})]}),Object(u.jsx)(b,{todos:p})]})};i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.64c6844d.chunk.js.map