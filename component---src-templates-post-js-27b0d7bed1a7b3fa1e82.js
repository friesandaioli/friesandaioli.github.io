(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0vYD":function(e){e.exports=JSON.parse('{"data":{"settingsJson":{"authors":[{"email":"test@test.com","name":"Aili Nöel","id":"AiliNoel","link":null},{"email":"test@test.com","name":"Aidan","id":"UndarkAido","link":"theundarkpixel.com"}]}}}')},"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("/zyf"),m=n("OtEr"),i=n("tKV0"),u=n("/R/0"),c=n("S8eP");var s=n("Jmu9"),f=n("0qiq"),d=n("JTHd");t.default=function(e){var t=Object(d.a)(),n=e.data.markdownRemark,a={actions:[m.DeleteAction],fields:[{label:"Title",name:"rawFrontmatter.title",component:"text"},{label:"Authors",name:"rawFrontmatter.authors",component:"authors",authors:t},{name:"rawFrontmatter.draft",component:"toggle",label:"Draft"},{label:"Date",name:"rawFrontmatter.date",component:"date"},{label:"Hero Image",name:"rawFrontmatter.hero.image",component:"image",parse:function(e){return e?"../images/"+e.filename:""},uploadDir:function(){return"/content/images/"},previewSrc:function(e,t,n){return n.frontmatter.hero&&n.frontmatter.hero.image?n.frontmatter.hero.image.childImageSharp.fluid.src:""}}]},h=Object(m.useRemarkForm)(n,a),p=h[0],g=h[1];return Object(l.usePlugin)(g),r.a.createElement(i.InlineForm,{form:g},r.a.createElement(f.a,{page:p},r.a.createElement(c.k,null,r.a.createElement(c.g,null,r.a.createElement(c.i,null,p.frontmatter.date),p.frontmatter.authors&&p.frontmatter.authors.length>0&&r.a.createElement(c.i,null,r.a.createElement("em",null,"By")," ",r.a.createElement(s.b,{authorIDs:p.frontmatter.authors})),r.a.createElement(c.h,null,r.a.createElement(o.Link,{to:"/blog"},"← Back to Blog"))),r.a.createElement("h1",null,r.a.createElement(i.InlineTextField,{name:"rawFrontmatter.title"})),r.a.createElement("hr",null),r.a.createElement(u.InlineWysiwyg,{name:"rawMarkdownBody",format:"markdown"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.html}})),p.frontmatter.draft&&r.a.createElement(c.b,null,"Draft"),!1)))};var h="847233815"},JTHd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("0vYD"),r=function(){return a.data.settingsJson.authors}},Jmu9:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n("q8oJ"),n("8npG"),n("pJf4"),n("v9g0");var a=n("JTHd"),r=function(e){var t=e.authorIDs,n=Object(a.a)().filter((function(e){return t.find((function(t){return t===e.id}))}));return n.map((function(e,t){return n.length===t+1?e.name:e.name+", "}))},o={label:"Authors",fields:[{label:"Authors",name:"rawJson.authors",component:"group-list",itemProps:function(e){return{key:e.id,label:e.name}},defaultItem:function(){return{name:"New Author",id:Math.random().toString(36).substr(2,9),email:"",link:""}},fields:[{label:"Name",name:"name",component:"text",parse:function(e){return e||""}},{label:"Email",name:"email",component:"text",parse:function(e){return e||""}},{label:"Link",name:"link",component:"text",parse:function(e){return e||""}}]}]}}}]);
//# sourceMappingURL=component---src-templates-post-js-27b0d7bed1a7b3fa1e82.js.map