(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf781"],{"649f":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"dom"})},n=[],r=a("d84b"),i=a.n(r),l=a("90de"),s={name:"serviceRequests",data:function(){return{dom:null}},methods:{resize:function(){this.dom.resize()}},mounted:function(){var e=this,t={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"3%",left:"1.2%",right:"1%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"运营商/网络服务",type:"line",stack:"总量",areaStyle:{normal:{color:"#2d8cf0"}},data:[120,132,101,134,90,230,210]},{name:"银行/证券",type:"line",stack:"总量",areaStyle:{normal:{color:"#10A6FF"}},data:[257,358,278,234,290,330,310]},{name:"游戏/视频",type:"line",stack:"总量",areaStyle:{normal:{color:"#0C17A6"}},data:[379,268,354,269,310,478,358]},{name:"餐饮/外卖",type:"line",stack:"总量",areaStyle:{normal:{color:"#4608A6"}},data:[320,332,301,334,390,330,320]},{name:"快递/电商",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{color:"#398DBF"}},data:[820,645,546,745,872,624,258]}]};this.$nextTick((function(){e.dom=i.a.init(e.$refs.dom),e.dom.setOption(t),Object(l["on"])(window,"resize",e.resize)}))},beforeDestroy:function(){Object(l["off"])(window,"resize",this.resize)}},c=s,d=a("6691"),m=Object(d["a"])(c,o,n,!1,null,null,null);t["default"]=m.exports}}]);