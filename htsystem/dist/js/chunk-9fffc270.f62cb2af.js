(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fffc270"],{7533:function(e,t,a){},"986a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu_model_add model_add  menu_manage"},[a("Form",{ref:"formValidate",staticClass:"clearfix",staticStyle:{width:"100%"},attrs:{model:e.innerInfo,"label-position":"right",rules:e.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"角色名称",prop:"roleName"}},[a("i-Input",{attrs:{type:"text",disabled:"",clearable:"",placeholder:"请输入用户名称"},model:{value:e.innerInfo.roleName,callback:function(t){e.$set(e.innerInfo,"roleName",t)},expression:"innerInfo.roleName"}})],1),a("FormItem",{attrs:{label:"角色使用状态"}},[a("i-Switch",{attrs:{size:"large",disabled:""},model:{value:e.innerInfo.status,callback:function(t){e.$set(e.innerInfo,"status",t)},expression:"innerInfo.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("停止")])])],1),a("FormItem",{attrs:{label:"数据范围",prop:"roleDataType",required:!0}},[a("Select",{attrs:{placeholder:"请选择数据范围",clearable:""},on:{"on-change":e.choosePermission},model:{value:e.innerInfo.roleDataType,callback:function(t){e.$set(e.innerInfo,"roleDataType",t)},expression:"innerInfo.roleDataType"}},e._l(e.numberList,(function(t){return a("Option",{key:t.roleDataType,attrs:{value:t.roleDataType}},[e._v(e._s(t.value))])})),1)],1),e.treeShow?a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"部门数据权限"}},[a("Tree",{attrs:{data:e.data2,"show-checkbox":""},on:{"on-check-change":e.chooseManage}})],1):e._e()],1),a("div",{staticClass:"listbutton"},[a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:e.Addoperate}},[e._v("授权")]),a("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:e.cancleFun}},[e._v("取消")])],1)],1)},r=[],s=(a("63ff"),a("f8f9")),i=(a("4634"),a("fafd"),a("8062"),a("dea4")),o={props:{disabled:Boolean},data:function(){return{numberList:[{value:"全部数据权限",label:"全部数据权限",roleDataType:"0"},{value:"本部门数据权限",label:"本部门数据权限",roleDataType:"1"},{value:"本部门及一下数据权限",label:"本部门及一下数据权限",roleDataType:"2"},{value:"仅本人数据权限",label:"仅本人数据权限",roleDataType:"3"},{value:"自定义数据权限",label:"自定义数据权限",roleDataType:"4"}],dic_data:[{name:"所属系统",data:[]}],innerInfo:{roleName:"",roleDataType:"",status:""},data2:[],rowId:"",listParam:{menuName:"",isShow:"",pageSize:12,pageIndex:-1},ruleValidate:{phoneNumber:Object(i["a"])(this.$helper.validateProvider("联系电话",!1))},idList:[],treeShow:!1,ids:[]}},methods:{getDetail:function(e){var t=this;this.rowId=e;var a={id:e};this.$api.RolesConfig.DetailRoles(a).then((function(e){t.innerInfo=e.data.result,t.innerInfo.roleDataType=String(e.data.result.roleDataType),"4"==t.innerInfo.roleDataType?t.treeShow=!0:t.treeShow=!1,1==e.data.result.status?e.data.result.status=!0:e.data.result.status=!1})),this.getManageTree(e)},Addoperate:function(){var e=this,t={roleId:this.rowId,roleDataType:this.innerInfo.roleDataType,departmentIds:this.idList};this.$refs.formValidate.validate((function(a){a?e.$api.RolesConfig.rolePermission(t).then((function(t){t.data.success?(e.$Message.success("提交成功!"),e.$emit("RefreshParent"),e.$refs.formValidate.resetFields()):e.$Message.error("提交失败!")})):e.$Message.error("表单验证失败!")}))},cancleFun:function(){this.$emit("RefreshParent")},getManageTree:function(e){var t=this,a={roleId:e};this.rowId;this.$api.MenuConfig.AlManageTree(a).then((function(e){t.data2=e.data.result;var a=t.getIds(t.data2);t.idList=Object(i["a"])(new Set(a))}))},getIds:function(e){var t=this;return e.forEach((function(e){1==e.checked&&t.ids.push(e.id),e.children&&0!==e.children.length&&t.getIds(e.children)})),t.ids},chooseManage:function(e){var t=this;this.idList=[],e.forEach((function(e){e.selected=!0,t.idList.push(e.id)}));var a=this.idList;this.idList=Object(i["a"])(new Set(a))},choosePermission:function(e){this.treeShow="4"==e}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},l=o,c=(a("fa71"),a("6691")),d=Object(c["a"])(l,n,r,!1,null,null,null);t["default"]=d.exports},fa71:function(e,t,a){"use strict";var n=a("7533"),r=a.n(n);r.a}}]);