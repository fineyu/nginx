(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237781"],{faf6:function(n,e,t){"use strict";t.r(e),t.d(e,"login",(function(){return u})),t.d(e,"getUserInfo",(function(){return i})),t.d(e,"logout",(function(){return s}));var a=t("c276"),r={super_admin:{name:"super_admin",user_id:"1",access:["super_admin","admin"],token:"super_admin",avatar:"https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"},admin:{name:"admin",user_id:"2",access:["admin"],token:"admin",avatar:"https://avatars0.githubusercontent.com/u/20942571?s=460&v=4"}},u=function(n){return n=JSON.parse(n.body),{token:r[n.userName].token}},i=function(n){var e=Object(a["getParams"])(n.url);return r[e.token]},s=function(n){return null}}}]);