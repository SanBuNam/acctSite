(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{KKFp:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMFBAb/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgME/9oADAMBAAIQAxAAAAHRz9Lli7rpeekdOVQf/8QAHBABAAICAwEAAAAAAAAAAAAAAgEDABESExQy/9oACAEBAAEFArFwrLuLVJmV8kxveNpz2pR6bIz/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQMBAT8BMZv/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/ATAuF//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEhAxAyUaH/2gAIAQEABj8CckrL1KcX4ZRnfLIro5H/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhEDFBcf/aAAgBAQABPyHYgGEIq1SEW4bhFHSOOcFCiX1c2Gn0ezp6+k//2gAMAwEAAgADAAAAEP8AIP3/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhUf/aAAgBAwEBPxBUm6aUqV0//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAgEBPxBgYlrBk8r/xAAeEAEAAgEEAwAAAAAAAAAAAAABABEhMUFRgXGRsf/aAAgBAQABPxBO8WVaPsLaA81NCd1zEbPhCwMc3pLaGtmb3uK5iq6qeAbFSx2lVqUGICDQbkvuf//Z","width":50,"height":50,"src":"/static/8330b99aaa4376d13b24407df496737c/30d3a/profile.jpg","srcSet":"/static/8330b99aaa4376d13b24407df496737c/30d3a/profile.jpg 1x,\\n/static/8330b99aaa4376d13b24407df496737c/66c95/profile.jpg 1.5x,\\n/static/8330b99aaa4376d13b24407df496737c/aacbd/profile.jpg 2x"}}},"site":{"siteMetadata":{"author":"David Lee","social":{"twitter":"davidcreativestudio"}}}}}')},iWjm:function(e,t,A){"use strict";var a=A("q1tI"),r=A.n(a),n=A("Wbzz"),i=A("t5mp"),l=A.n(i);var o=function(e){var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e,t=this.props,A=t.location,a=t.title,i=t.children;return e="/blogs"===A.pathname?r.a.createElement("h1",{style:{marginTop:"4rem",marginBottom:"6rem",fontSize:"3rem",fontFamily:"Brevia",textAlign:"center"}},r.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blogs/"},a)):r.a.createElement("h3",{style:{marginTop:"4rem",marginBottom:"6rem",fontSize:"3rem",fontFamily:"Brevia",textAlign:"left",lineHeight:".9",color:"#0c1d41"}},r.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blogs/"},a)),r.a.createElement("div",{className:l.a.container},r.a.createElement("div",{className:l.a.innerContainer},r.a.createElement("header",null,e),r.a.createElement("main",null,i)))},a}(r.a.Component);t.a=o},yZlL:function(e,t,A){"use strict";A.r(t);var a=A("q1tI"),r=A.n(a),n=A("Wbzz"),i=(A("0mN4"),A("KKFp")),l=A("9eSz"),o=A.n(l),c=A("uOL4"),s=A.n(c),m=function(){var e=i.data,t=e.site.siteMetadata,A=t.author;t.social;return r.a.createElement("div",{className:s.a.container},r.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:A,style:{marginLeft:"1rem",marginBottom:"2rem",minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",{style:{marginLeft:"1rem",fontSize:"1.4rem"}},"Presented by ",A," freelancer web developer in Orange County, California."," "," ",r.a.createElement(n.Link,{to:"/blogs/"},"📰 Back to Blog List")))},p=A("iWjm"),E=A("hn/T"),d=A("vrFN");A.d(t,"pageQuery",(function(){return g}));var f=function(e){var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,A=this.props.pageContext,a=A.previous,i=A.next;return r.a.createElement(E.a,null,r.a.createElement(p.a,{location:this.props.location,title:t},r.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement(m,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(n.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(n.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))),r.a.createElement("h1",{style:{marginBottom:0,lineHeight:"1"}},e.frontmatter.title),r.a.createElement("p",{style:{display:"block"}},e.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{style:{}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(n.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(n.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))},a}(r.a.Component),g=(t.default=f,"3654438753")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6a8a20f789761f430cbe.js.map