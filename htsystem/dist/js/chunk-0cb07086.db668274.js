(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cb07086"],{"018b":function(e,t,n){"use strict";var r=n("e419"),a=n.n(r);a.a},"72d8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"attch_module_add"},[n("Form",{ref:"formValidate",staticClass:"clearfix",attrs:{model:e.innerInfo,"label-position":"right",rules:e.ruleValidate,"label-width":130}},[n("FormItem",{attrs:{label:"序号",prop:"sort",required:!0}},[n("Input",{attrs:{placeholder:"请输入",disabled:"",number:""},model:{value:e.innerInfo.sort,callback:function(t){e.$set(e.innerInfo,"sort",t)},expression:"innerInfo.sort"}})],1),n("FormItem",{attrs:{label:"文件类型",prop:"typeName",required:!0}},[n("Input",{attrs:{placeholder:"请输入",onKeypress:"javascript:if(event.keyCode == 32)event.returnValue = false;",disabled:e.disabled},model:{value:e.innerInfo.typeName,callback:function(t){e.$set(e.innerInfo,"typeName",t)},expression:"innerInfo.typeName"}})],1),n("FormItem",{attrs:{label:"是否必须上传",prop:"isRequired",required:!0}},[n("RadioGroup",{model:{value:e.innerInfo.isRequired,callback:function(t){e.$set(e.innerInfo,"isRequired",t)},expression:"innerInfo.isRequired"}},e._l(e.dic_data[0].data,(function(t){var r=t[0],a=t[1];return n("Radio",{key:a,attrs:{label:r,disabled:e.disabled}},[e._v(e._s(a))])})),1)],1),n("FormItem",{attrs:{label:"文件格式",prop:"limit",required:!0}},[n("Input",{attrs:{placeholder:"请输入",onKeypress:"javascript:if(event.keyCode == 32)event.returnValue = false;",disabled:e.disabled},model:{value:e.innerInfo.limit,callback:function(t){e.$set(e.innerInfo,"limit",t)},expression:"innerInfo.limit"}})],1)],1),e.disabled?e._e():n("div",{staticClass:"listbutton"},[e.submit?n("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:function(t){return e.saveFun("InsertData")}}},[e._v("保存")]):e._e(),e.submit?e._e():n("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:function(t){return e.saveFun("UpdateData")}}},[e._v("保存")]),n("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:e.cancleFun}},[e._v("取消")])],1)],1)},a=[],i=(n("63ff"),n("f8f9")),s=n("dea4"),o={data:function(){return{dic_data:[{name:"是否",data:[]}],innerInfo:{sort:null,typeName:"",isRequired:"",limit:""},ruleValidate:{sort:Object(s["a"])(this.$helper.validateProvider("数字",!1))}}},props:{disabled:Boolean,submit:Boolean},methods:{saveFun:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.formValidate.validate();case 2:if(n=e.sent,!n){e.next=10;break}return e.next=6,this.$api.AttachmentType[t](this.innerInfo);case 6:r=e.sent,r.data.success&&(this.$Message.success("提交成功!"),this.$emit("RefreshParent"),this.innerInfo={}),e.next=11;break;case 10:this.$Message.error("表单验证失败!");case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancleFun:function(){this.$emit("RefreshParent")}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},l=o,u=(n("018b"),n("6691")),c=Object(u["a"])(l,r,a,!1,null,"bd80deba",null);t["default"]=c.exports},e419:function(e,t,n){}}]);