(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ec71ff0"],{"26f9":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"model_add"},[n("Form",{ref:"formValidate",staticClass:"clearfix",attrs:{model:e.innerInfo,"label-position":"right",rules:e.ruleValidate,"label-width":120}},[n("FormItem",{attrs:{label:"标题",prop:"noticeTitle",required:!0}},[n("i-Input",{attrs:{type:"text",clearable:"",placeholder:"请输入公告标题"},model:{value:e.innerInfo.noticeTitle,callback:function(t){e.$set(e.innerInfo,"noticeTitle",t)},expression:"innerInfo.noticeTitle"}})],1),n("FormItem",{attrs:{label:"类型",prop:"noticeType",required:!0}},[n("Select",{attrs:{placeholder:"请选择公告类型",clearable:""},model:{value:e.innerInfo.noticeType,callback:function(t){e.$set(e.innerInfo,"noticeType",t)},expression:"innerInfo.noticeType"}},e._l(e.types,(function(t){return n("Option",{key:t.key,attrs:{value:t.key}},[e._v(e._s(t.value))])})),1)],1),n("FormItem",{staticStyle:{width:"100%"},attrs:{label:"内容",prop:"noticeContent",required:!0}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.innerInfo.noticeContent,expression:"innerInfo.noticeContent"}],attrs:{name:"",id:""},domProps:{value:e.innerInfo.noticeContent},on:{input:function(t){t.target.composing||e.$set(e.innerInfo,"noticeContent",t.target.value)}}})]),n("FormItem",{staticStyle:{width:"100%"},attrs:{label:"备注"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.innerInfo.remark,expression:"innerInfo.remark"}],attrs:{name:"",id:""},domProps:{value:e.innerInfo.remark},on:{input:function(t){t.target.composing||e.$set(e.innerInfo,"remark",t.target.value)}}})]),n("FormItem",{attrs:{label:"状态",prop:"status",required:!0}},[n("i-Switch",{attrs:{size:"large"},model:{value:e.innerInfo.status,callback:function(t){e.$set(e.innerInfo,"status",t)},expression:"innerInfo.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("停止")])])],1)],1),n("div",{staticClass:"listbutton"},[e.EditFlag?e._e():n("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:e.Addoperate}},[e._v("保存")]),e.EditFlag?n("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:e.Editoperate}},[e._v("保存")]):e._e(),n("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:e.cancleFun}},[e._v("取消")])],1)],1)},r=[],o=(n("63ff"),n("f8f9")),a={props:{EditFlag:Boolean},data:function(){return{types:[{value:"通知",key:1},{value:"公告",key:2}],innerInfo:{noticeTitle:"",noticeType:"",noticeContent:"",status:!1,remark:""},visible:!1,ruleValidate:{},rowId:0}},methods:{Addoperate:function(){var e=this,t={status:1==this.innerInfo.status?"1":"2",noticeTitle:this.innerInfo.noticeTitle,noticeType:this.innerInfo.noticeType,noticeContent:this.innerInfo.noticeContent,remark:this.innerInfo.remark};this.$refs.formValidate.validate((function(n){n?e.$api.NoticeConfig.CreateNotice(t).then((function(t){t.data.success?(e.$Message.success("提交成功!"),e.$emit("RefreshParent"),e.$refs.formValidate.resetFields()):e.$Message.error("提交失败!")})):e.$Message.error("表单验证失败!")}))},Editoperate:function(){var e=this,t={id:this.rowId,status:1==this.innerInfo.status?"1":"2",noticeTitle:this.innerInfo.noticeTitle,noticeType:this.innerInfo.noticeType,noticeContent:this.innerInfo.noticeContent,remark:this.innerInfo.remark};this.$refs.formValidate.validate((function(n){n?e.$api.NoticeConfig.UpdateNotice(t).then((function(t){t.data.success?(e.$Message.success("提交成功!"),e.$emit("RefreshParent"),e.$refs.formValidate.resetFields()):e.$Message.error("提交失败!")})):e.$Message.error("表单验证失败!")}))},getDetail:function(e){var t=this;this.rowId=e;var n={id:e};this.$api.NoticeConfig.DetailNotice(n).then((function(e){t.innerInfo=e.data.result,1==e.data.result.status?t.innerInfo.status=!0:t.innerInfo.status=!1}))},cancleFun:function(){this.$emit("RefreshParent")}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},s=a,c=(n("2da5"),n("6691")),l=Object(c["a"])(s,i,r,!1,null,"7ceb70ec",null);t["default"]=l.exports},"2da5":function(e,t,n){"use strict";var i=n("8532"),r=n.n(i);r.a},8532:function(e,t,n){}}]);