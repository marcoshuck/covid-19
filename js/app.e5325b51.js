(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("289d"),o=(r("5abe"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{spaced:""}},[r("template",{slot:"brand"},[r("b-navbar-item",[r("img",{attrs:{src:"img/logo.png",alt:"COVID-19 RESPONSE"}})])],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-primary",attrs:{href:"https://marcos.huck.com.ar"}},[r("strong",[t._v("Marcos Huck")])]),r("a",{staticClass:"button is-light",attrs:{href:"https://github.com/marcoshuck/covid-19"}},[t._v(" Repositorio ")])])])],1)],2),r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("COVID-19 · REPORTE DIARIO - "+t._s(t.date))]),t.loading?t._e():r("div",{staticClass:"container"},[r("div",[r("h2",{staticClass:"subtitle"},[t._v("Situación global")]),r("grid",{attrs:{input:t.summary}}),r("hr"),r("b-field",[r("b-input",{attrs:{placeholder:"Buscar por país...",type:"search",icon:"magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("hr"),r("h2",{staticClass:"subtitle"},[t._v("Situación por país")]),r("list",{attrs:{input:t.filteredCountries}})],1),t.loading?r("div",{staticClass:"container"}):t._e()])]),t._m(0)],1)}),s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("p",[t._v(" Creado por "),r("a",{attrs:{href:"https://marcos.huck.com.ar"}},[t._v("Marcos Huck")]),t._v(". ")])])])}],c=(r("99af"),r("4de4"),r("4160"),r("b0c0"),r("ac1f"),r("466d"),r("841c"),r("159b"),r("bc3a")),i=r.n(c),l=i.a.create({baseURL:"https://api.covid19api.com",timeout:3e3}),u=l,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns is-multiline"},t._l(t.input,(function(t,e){return r("div",{key:e,staticClass:"column is-one-quarter"},[r("card",{attrs:{input:t}})],1)})),0)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[t._v(" "+t._s(t.country.name)+" "+t._s(t.flag)+" ")])]),r("div",{staticClass:"card-content"},[r("ul",[r("li",[t._v("Casos confirmados: "+t._s(t.country.newConfirmed))]),r("li",[t._v("Total confirmados: "+t._s(t.country.totalConfirmed))]),r("hr"),r("li",[t._v("Fallecimientos confirmados: "+t._s(t.country.newDeaths))]),r("li",[t._v("Total fallecimientos: "+t._s(t.country.totalDeaths))]),r("hr"),r("li",[t._v("Casos recuperados: "+t._s(t.country.newRecovered))]),r("li",[t._v("Total recuperados: "+t._s(t.country.totalRecovered))])])])])},v=[];r("f6d6"),r("5319");function m(t){return t.toUpperCase().replace(/./g,(function(t){return String.fromCodePoint(t.charCodeAt(0)+127397)}))}var h=n["a"].extend({name:"Card",props:{input:Object},computed:{country:function(){return this.input},flag:function(){return m(this.country.code)}}}),b=h,C=r("2877"),_=Object(C["a"])(b,p,v,!1,null,null,null),g=_.exports,y=n["a"].extend({name:"List",components:{card:g},props:{input:{type:Array,required:!0}}}),w=y,O=Object(C["a"])(w,d,f,!1,null,null,null),D=O.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("card",{attrs:{title:"Nuevos casos confirmados"}},[t._v(t._s(t.summary.newConfirmed))])],1),r("div",{staticClass:"column"},[r("card",{attrs:{title:"Nuevos fallecimientos confirmados"}},[t._v(t._s(t.summary.newDeaths))])],1),r("div",{staticClass:"column"},[r("card",{attrs:{title:"Nuevos casos recuperados"}},[t._v(t._s(t.summary.newRecovered))])],1)])},x=[];function R(t){return{newConfirmed:t.NewConfirmed,newDeaths:t.NewDeaths,newRecovered:t.NewRecovered,totalConfirmed:t.TotalConfirmed,totalDeaths:t.TotalDeaths,totalRecovered:t.TotalRecovered}}var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("p",{staticClass:"title"},[t._t("default")],2),r("p",{staticClass:"subtitle"},[t._v(" "+t._s(t.title)+" ")])])])},N=[],S=n["a"].extend({name:"Card",props:{title:String}}),T=S,E=Object(C["a"])(T,k,N,!1,null,null,null),P=E.exports,A=n["a"].extend({name:"Grid",components:{card:P},props:{input:Object},data:function(){return{summary:R(this.input)}}}),M=A,$=Object(C["a"])(M,j,x,!1,null,null,null),F=$.exports;function I(t){return{code:t.CountryCode,date:new Date(Date.parse(t.Date)),name:t.Country,newConfirmed:t.NewConfirmed,newDeaths:t.NewDeaths,newRecovered:t.NewRecovered,slug:t.Slug,totalConfirmed:t.TotalConfirmed,totalDeaths:t.TotalDeaths,totalRecovered:t.TotalRecovered}}var L=n["a"].extend({name:"App",components:{grid:F,list:D},computed:{date:function(){var t=new Date;return"".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())},filteredCountries:function(){var t=this;return this.countries.filter((function(e){return e.name.toLowerCase().match(t.search.toLowerCase())}))}},data:function(){return{summary:void 0,countries:[],error:"",loading:!0,search:""}},created:function(){var t=this;u.get("/summary").then((function(e){e.data.Countries.forEach((function(e){var r=I(e);t.countries.push(r)})),t.summary=e.data.Global,t.loading=!1})).catch((function(e){t.error=e}))}}),q=L,B=Object(C["a"])(q,o,s,!1,null,null,null),G=B.exports,H=r("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].use(a["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")}});
//# sourceMappingURL=app.e5325b51.js.map