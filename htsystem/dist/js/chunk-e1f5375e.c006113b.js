(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1f5375e","chunk-668c42b4","chunk-d843bf1c","chunk-9fffc270","chunk-2f81d9c2","chunk-04989258"],{"05d4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("div",{staticClass:"right",style:{width:t.widthData}},[a("TableListCom",{ref:"listCom",attrs:{listName:t.listName,columnsName:t.columnsName,columnsNameSmall:t.columnsNameSmall,listDateSmall:t.listDateSmall,listDate:t.listDate,pageTotal:t.pageTotal,tableLoading:t.tableLoading,pageSize:t.listParam.pageSize,addButtonShow:t.addButtonShow,delButtonShow:t.delButtonShow,moreButtonShow:t.moreButtonShow,treeButtonShow:t.treeButtonShow,searchButtonShow:t.searchButtonShow,tableButtonShow:t.tableButtonShow},on:{"show-list-data":t.showListData,"handle-selection":t.handleSelection,"handle-selection-small":t.handleSelectionSmall}},[a("div",{staticClass:"searchtop",attrs:{slot:"shift-conditions"},slot:"shift-conditions"},[a("ul",[a("li",{staticClass:"item"},[a("label",[t._v("角色名称")]),a("Input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入名称",clearable:""},model:{value:t.formSearch.roleName,callback:function(e){t.$set(t.formSearch,"roleName",e)},expression:"formSearch.roleName"}})],1),a("li",{staticClass:"item"},[a("label",[t._v("角色状态")]),a("Select",{attrs:{placeholder:"请选择使用状态",clearable:""},model:{value:t.formSearch.status,callback:function(e){t.$set(t.formSearch,"status",e)},expression:"formSearch.status"}},t._l(t.dic_data[0].data,(function(e){var s=e[0],n=e[1];return a("Option",{key:s,attrs:{value:s}},[t._v(t._s(n))])})),1)],1),a("li",{staticClass:"item"},[a("Button",{staticClass:"search",attrs:{type:"primary",icon:"ios-search"},on:{click:t.searchInfo}},[t._v("搜索")]),a("Button",{staticClass:"reset",attrs:{type:"primary",icon:"md-refresh"},on:{click:t.resetInfo}},[t._v("重置")])],1)])])])],1),a("Modal",{attrs:{"footer-hide":!0,title:t.modalTitle,width:900,"mask-closable":!1},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("roleAdd",{ref:"roleAdd",attrs:{disabled:t.disabled,EditFlag:t.EditFlag},on:{RefreshParent:t.refreshData}})],1),a("Modal",{attrs:{"footer-hide":!0,title:"详情",width:900,"mask-closable":!1},model:{value:t.addModalDetail,callback:function(e){t.addModalDetail=e},expression:"addModalDetail"}},[a("roleDetail",{ref:"roleDetail"})],1),a("Modal",{attrs:{"footer-hide":!0,title:"数据权限配置",width:900,"mask-closable":!1},model:{value:t.manageModal,callback:function(e){t.manageModal=e},expression:"manageModal"}},[a("roleManage",{ref:"roleManage",on:{RefreshParent:t.refreshData}})],1),a("Modal",{attrs:{"footer-hide":!0,title:"菜单权限配置",width:900,"mask-closable":!1},model:{value:t.treeModal,callback:function(e){t.treeModal=e},expression:"treeModal"}},[a("roleMenu",{ref:"roleMenu",on:{RefreshParent:t.refreshData}})],1),a("Modal",{attrs:{"footer-hide":!0,title:"用户权限配置",width:900,"mask-closable":!1},model:{value:t.useModal,callback:function(e){t.useModal=e},expression:"useModal"}},[a("roleUser",{ref:"roleUser",on:{RefreshParent:t.refreshData}})],1),a("Modal",{attrs:{title:"提示","mask-closable":!1,"class-name":"vertical-center-modal  del_modal"},model:{value:t.delModal,callback:function(e){t.delModal=e},expression:"delModal"}},[a("p",[t._v("确定要删除数据吗？")]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text",size:"large",icon:"md-undo"},on:{click:function(e){return t.cancel()}}},[t._v("取消")]),a("Button",{attrs:{type:"primary",size:"large",icon:"md-checkmark"},on:{click:function(e){return t.moreDel()}}},[t._v("确定")])],1)])],1)},n=[],i=(a("63ff"),a("f8f9")),o=a("dea4"),r=(a("4634"),a("607c")),l=a("ab0a"),c=a("56c2"),d=a("986a"),u=a("e40d"),h={components:{roleAdd:r["default"],roleMenu:l["default"],roleUser:c["default"],roleManage:d["default"],roleDetail:u["default"]},data:function(){var t=this;return{listName:"user_management",widthData:"100%",addModal:!1,treeModal:!1,useModal:!1,addButtonShow:!0,delButtonShow:!0,moreButtonShow:!0,tableButtonShow:!0,searchButtonShow:!0,treeButtonShow:!0,manageModal:!1,addModalDetail:!1,disabled:!1,EditFlag:!1,rowId:"",roleName:"",status:"",currentPage:1,menuData:{roleName:"",status:"",id:""},dic_data:[{name:"使用状态",data:[]}],columnsName:[{type:"selection",width:60},{type:"index",width:60,align:"center"},{title:"角色名称",key:"roleName"},{title:"角色状态",key:"status",render:function(t,e){return t("span",{style:{backgroundColor:"停用"==e.row.status?"red":"#1ab394",padding:"5px 12px",display:"inline-block",color:"#fff",borderRadius:"16px"}},e.row.status)}},{title:"创建时间",key:"creationTime"},{title:"操作",key:"action",width:220,render:function(e,a){return e("div",[e("Tooltip",{props:{placement:"top",transfer:!0,content:"查看"}},[e("i",{class:{"iconfont iconsousuo":!0},style:{fontSize:"18px",color:"#f8ac59",marginRight:"10px"},on:{click:function(){t.addModalDetail=!0,t.$refs.roleDetail.getDetail(a.row.id)}}})]),e("Tooltip",{props:{placement:"top",transfer:!0,content:"编辑"}},[e("i",{class:{"iconfont iconbianji":!0},style:{fontSize:"18px",color:"#23c6c8",marginRight:"10px"},on:{click:function(){t.modalTitle="编辑",t.addModal=!0,t.disabled=!1,t.EditFlag=!0,t.$refs.roleAdd.getDetail(a.row.id)}}})]),e("Tooltip",{props:{placement:"top",transfer:!0,content:"数据权限"}},[e("i",{class:{"iconfont iconPaas_icon-":!0},style:{fontSize:"18px",color:"#23c6c8",marginRight:"10px"},on:{click:function(){t.manageModal=!0,t.$refs.roleManage.getDetail(a.row.id)}}})]),e("Tooltip",{props:{placement:"top",transfer:!0,content:"菜单权限"}},[e("i",{class:{"iconfont icondangan":!0},style:{fontSize:"18px",color:"#23c6c8",marginRight:"10px"},on:{click:function(){t.treeModal=!0,t.$refs.roleMenu.getDetail(a.row.id)}}})]),e("Tooltip",{props:{placement:"top",transfer:!0,content:"分配用户"}},[e("i",{class:{"iconfont iconrenyuan":!0},style:{fontSize:"18px",color:"#23c6c8",marginRight:"10px"},on:{click:function(){t.useModal=!0,t.$refs.roleUser.getDetail(a.row.id)}}})]),e("Tooltip",{props:{placement:"top",transfer:!0,content:"删除"}},[e("i",{class:{"iconfont iconshanchu1":!0},style:{fontSize:"20px",color:"#ef6776",marginRight:"10px"},on:{click:function(){t.deleteList=[],t.deleteList.push(a.row.id),t.delModal=!0}}})])])}}],listDate:[],columnsNameSmall:[{type:"selection",width:50,align:"center"},{title:"列表",key:"title",width:100,align:"center"}],listDateSmall:[{title:"角色名称",_disabled:!0},{title:"角色状态",_checked:!0},{title:"创建时间",_checked:!0},{title:"操作",_disabled:!0}],modalTitle:"",pageTotal:10,tableLoading:!1,formSearch:{roleName:"",status:0,pageSize:12,pageIndex:1},listParam:{pageSize:12,pageIndex:1},deleteList:[],delModal:!1,listArr:[],newColumnsName:[]}},methods:{showListData:function(t){var e=this;this.currentPage=t;var a={roleName:"",status:0,pageSize:12,pageIndex:1};this.tableLoading=!0,this.$api.RolesConfig.PageRoles(a).then((function(t){e.listDate=t.data.result.items,e.listDate.forEach((function(t){1==t.status?t.status="启用":t.status="停用"})),e.pageTotal=t.data.result.totalCount,e.tableLoading=!1}))},addFun:function(){this.modalTitle="新增",this.addModal=!0,this.EditFlag=!1,this.disabled=!1,this.$refs.roleAdd.innerInfo={roleName:"",description:"",status:""},this.$refs.roleAdd.$refs.formValidate.resetFields()},handleSelection:function(t){this.deleteList=[];for(var e=0;e<t.length;e++)this.deleteList.push(t[e].id)},moreDel:function(){var t=this;0!==this.deleteList.length?this.$api.RolesConfig.DeleteRoles(this.deleteList).then((function(e){e.data.success&&(t.$Message.success("删除成功!"),t.deleteList=[],t.showListData(1),t.delModal=!1)})):this.$Message.error("请选择数据!")},delInfo:function(){this.delModal=!0},searchInfo:function(){var t=this;this.tableLoading=!0,this.$api.RolesConfig.PageRoles(this.formSearch).then((function(e){t.listDate=e.data.result.items,t.listDate.forEach((function(t){1==t.status?t.status="启用":t.status="停用"})),t.pageTotal=e.data.result.totalCount,t.tableLoading=!1}))},resetInfo:function(){this.formSearch={},this.showListData(1)},handleSelectionSmall:function(t){var e=this;this.columnsName=this.newColumnsName,this.listArr=[],t.length>0&&t.forEach((function(t){e.columnsName.forEach((function(a){t.title==a.title&&e.listArr.push(a)}))})),this.listArr.push(this.columnsName[this.columnsName.length-1]),this.listArr.unshift(this.columnsName[2]),this.listArr.unshift(this.columnsName[1]),this.listArr.unshift(this.columnsName[0]),this.columnsName=Object(o["a"])(this.listArr)},refreshData:function(){this.addModal=!1,this.manageModal=!1,this.treeModal=!1,this.useModal=!1,this.showListData(1)},cancel:function(){this.delModal=!1},exportData:function(){var t=this,e={roleName:"",status:0,pageSize:12,pageIndex:1},a=JSON.parse(JSON.stringify(e));this.$api.RolesConfig.PageRoles(a).then((function(e){t.listDataCsv=e.data.result.items,t.$refs.listCom.$refs.table.exportCsv({filename:"角色管理",columns:t.columnsName.filter((function(t,e){return e>=0&&e<6})),data:t.listDataCsv.filter((function(t,e){return t.status="1"==t.status?"启用":"停用",t}))})}))},importData:function(){alert("导入")}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.newColumnsName=this.columnsName,t.next=3,this.$helper.getDicByCodeName(this.dic_data);case 3:this.showListData(1);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},f=h,m=a("6691"),p=Object(m["a"])(f,s,n,!1,null,null,null);e["default"]=p.exports},"33b0":function(t,e,a){},"3c7f":function(t,e,a){},"3e48":function(t,e,a){"use strict";var s=a("9414"),n=a.n(s);n.a},"56c2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu_model_add model_add"},[a("Form",{ref:"formValidate",staticClass:"clearfix",attrs:{model:t.innerInfo,"label-position":"right","label-width":120}},[a("FormItem",{attrs:{label:"角色名称",prop:"roleName"}},[a("i-Input",{attrs:{disabled:"",type:"text",clearable:"",placeholder:"请输入用户名称"},model:{value:t.innerInfo.roleName,callback:function(e){t.$set(t.innerInfo,"roleName",e)},expression:"innerInfo.roleName"}})],1),a("FormItem",{attrs:{label:"使用状态",prop:"status"}},[a("i-Switch",{attrs:{size:"large",value:t.innerInfo.status,disabled:""},model:{value:t.innerInfo.status,callback:function(e){t.$set(t.innerInfo,"status",e)},expression:"innerInfo.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("停止")])])],1),a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"用户名称"}},[a("Input",{staticStyle:{width:"314px"},attrs:{placeholder:"请输入用户名称",clearable:""},model:{value:t.formSearch.userName,callback:function(e){t.$set(t.formSearch,"userName",e)},expression:"formSearch.userName"}}),a("Icon",{staticStyle:{"font-size":"22px","margin-left":"12px"},attrs:{type:"ios-search"},on:{click:t.searchInfo}}),t.cancelFlag?a("Button",{staticClass:"cancel_button",attrs:{type:"primary",icon:"md-return-right"},on:{click:t.calcelAuthorization}},[t._v("取消授权人员")]):t._e(),t.cancelFlag?t._e():a("Button",{staticClass:"cancel_button2",attrs:{type:"primary",icon:"md-return-right"},on:{click:t.calcelAuthorization}},[t._v("增加授权人员")])],1),t.cancelFlag?a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"用户权限配置",required:!0}},[a("p",{staticStyle:{color:"#999"}},[t._v("*未授权人员*")]),a("Table",{ref:"selection",attrs:{border:"",columns:t.columns4,loading:t.tableLoading,data:t.data1,"highlight-row":!0},on:{"on-selection-change":t.chooseUser}}),a("Page",{staticClass:"page_class",attrs:{total:t.pageTotal,current:t.currentPage,"page-size":t.pageSize,"show-total":""},on:{"on-change":t.changePage}})],1):t._e(),t.cancelFlag?t._e():a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"用户权限配置",required:!0}},[a("p",{staticStyle:{color:"#999"}},[t._v("*已授权人员*")]),a("Table",{ref:"selection",attrs:{border:"",columns:t.columns4,loading:t.tableLoading,data:t.data2,"highlight-row":!0},on:{"on-selection-change":t.chooseUserCancel}}),a("Page",{staticClass:"page_class",attrs:{total:t.pageTotal,current:t.currentPage,"page-size":t.pageSize,"show-total":""},on:{"on-change":t.changePage}})],1)],1),t.disabled?t._e():a("div",{staticClass:"listbutton"},[t.cancelFlag?a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.Addoperate}},[t._v("授权")]):t._e(),t.cancelFlag?t._e():a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.cancelAddoperate}},[t._v("取消授权")]),a("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:t.cancleFun}},[t._v("取消")])],1)],1)},n=[],i=(a("63ff"),a("f8f9")),o=(a("4634"),{data:function(){return{pageTotal:1,currentPage:1,pageSize:5,tableLoading:!1,cancelFlag:!1,dic_data:[{name:"所属系统",data:[]}],currentChoose:-1,columns4:[{type:"selection",width:60,align:"center"},{title:"用户名称",key:"userName"},{title:"登录名",key:"loginName"},{title:"部门",key:"departmentName"},{title:"用户状态",key:"status",align:"center",render:function(t,e){return t("span",{style:{backgroundColor:"停用"==e.row.status?"red":"#1ab394",padding:"0px 12px",display:"inline-block",color:"#fff",borderRadius:"16px"}},e.row.status)}}],data1:[],data2:[],departments:[],innerInfo:{roleName:"",status:!1},idList:[],haveList:[],formSearch:{userName:"",phone:"",startTime:"",endTime:"",departmentId:0,status:0,pageSize:5,pageIndex:1,roleId:""},rowId:""}},props:{disabled:Boolean},methods:{showListData:function(t){var e=this;this.currentPage=t;var a={userName:"",phone:"",startTime:"",endTime:"",departmentId:0,status:0,pageSize:5,pageIndex:t,roleId:this.rowId};this.tableLoading=!0,this.$api.RolesConfig.WidthOutPageUsers(a).then((function(t){e.data1=t.data.result.items,e.data1.forEach((function(t){1==t.status?t.status="启用":(t.status="停用",t._disabled=!0),e.departments.forEach((function(e){t.departmentId==e.id&&(t.departmentId=e.value)}))})),e.pageTotal=t.data.result.totalCount,e.tableLoading=!1}))},showListData2:function(t){var e=this;this.currentPage=t;var a={userName:"",phone:"",startTime:"",endTime:"",departmentId:0,status:0,pageSize:5,pageIndex:t,roleId:this.rowId};this.tableLoading=!0,this.$api.RolesConfig.HavePageUsers(a).then((function(t){e.data2=t.data.result.items,e.data2.forEach((function(t){1==t.status?t.status="启用":(t.status="停用",t._disabled=!0),e.departments.forEach((function(e){t.departmentId==e.id&&(t.departmentId=e.value)}))})),e.pageTotal=t.data.result.totalCount,e.tableLoading=!1}))},searchInfo:function(){var t=this;this.formSearch.roleId=this.rowId,this.tableLoading=!0,this.$api.RolesConfig.PageUsers(this.formSearch).then((function(e){t.data1=e.data.result.items,t.data1.forEach((function(e){1==e.status?e.status="启用":e.status="停用",t.departments.forEach((function(t){e.departmentId==t.id&&(e.departmentId=t.value)}))})),t.pageTotal=e.data.result.totalCount,t.tableLoading=!1}))},getAllDeparment:function(){var t=this,e={departmentName:"",leader:"",pageIndex:-1,pageSize:12};this.$api.ManageConfig.PageManage(e).then((function(e){t.listDate=e.data.result.items,t.pageTotal=e.data.result.totalCount,t.tableLoading=!1,t.listDate.forEach((function(e){t.departments.push({value:e.departmentName,id:e.id})}))}))},getDetail:function(t){var e=this;this.rowId=t,this.cancelFlag=!1,this.showListData(1),this.showListData2(1);var a={id:t};this.$api.RolesConfig.DetailRoles(a).then((function(t){e.innerInfo=t.data.result,1==t.data.result.status?t.data.result.status=!0:t.data.result.status=!1}))},chooseUser:function(t){var e=this;this.idList=[],t.forEach((function(t){e.idList.push(t.id)}))},chooseUserCancel:function(t){var e=this;this.haveList=[],t.forEach((function(t){e.haveList.push(t.id)}))},Addoperate:function(){var t=this,e={roleId:this.rowId,userIds:this.idList,isAdd:!0};this.idList.length>0?e.isAdd=!0:e.isAdd=!1,this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.RolesUsers(e).then((function(e){e.data.success?(t.$Message.success("提交成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields(),t.cancelFlag=!0):t.$Message.error("提交失败!")})):t.$Message.error("表单验证失败!")}))},cancelAddoperate:function(){var t=this,e={roleId:this.rowId,userIds:this.haveList,isAdd:!1};this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.RolesUsers(e).then((function(e){e.data.success?(t.$Message.success("提交成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields(),t.cancelFlag=!0):t.$Message.error("提交失败!")})):t.$Message.error("表单验证失败!")}))},Editoperate:function(){},cancleFun:function(){this.$emit("RefreshParent")},changePage:function(t){this.showListData(t)},calcelAuthorization:function(){1==this.cancelFlag?(this.cancelFlag=!1,this.showListData2(1)):(this.cancelFlag=!0,this.showListData(1))}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:this.getAllDeparment();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),r=o,l=(a("d0e9"),a("6691")),c=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports},"607c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"role_model_add model_add"},[a("Form",{ref:"formValidate",staticClass:"clearfix",staticStyle:{width:"100%"},attrs:{model:t.innerInfo,"label-position":"right",rules:t.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"角色名称",prop:"roleName",required:!0}},[a("Input",{attrs:{type:"text",disabled:t.disabled,clearable:"",placeholder:"请输入角色名称"},model:{value:t.innerInfo.roleName,callback:function(e){t.$set(t.innerInfo,"roleName",e)},expression:"innerInfo.roleName"}})],1),a("FormItem",{attrs:{label:"角色状态"}},[a("i-Switch",{attrs:{size:"large",disabled:t.disabled},model:{value:t.innerInfo.status,callback:function(e){t.$set(t.innerInfo,"status",e)},expression:"innerInfo.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("停止")])])],1),a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"描述"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.innerInfo.description,expression:"innerInfo.description"}],staticStyle:{width:"95%","border-color":"#e3e5e8"},attrs:{type:"text",disabled:t.disabled,placeholder:"请输入角色描述"},domProps:{value:t.innerInfo.description},on:{input:function(e){e.target.composing||t.$set(t.innerInfo,"description",e.target.value)}}})])],1),t.disabled?t._e():a("div",{staticClass:"listbutton"},[t.EditFlag?t._e():a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.Addoperate}},[t._v("保存")]),t.EditFlag?a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.Editoperate}},[t._v("保存")]):t._e(),a("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:t.cancleFun}},[t._v("取消")])],1)],1)},n=[],i=(a("63ff"),a("f8f9")),o={props:{disabled:Boolean,EditFlag:Boolean},data:function(){return{dic_data:[{name:"所属系统",data:[]}],innerInfo:{roleName:"",description:"",status:!1},rowId:"",ruleValidate:{}}},methods:{Addoperate:function(){var t=this,e={roleName:this.innerInfo.roleName,description:this.innerInfo.description,status:1==this.innerInfo.status?1:2};this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.CreatRoles(e).then((function(e){e.data.success?(t.$Message.success("提交成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields()):(t.$Message.error("提交失败!"),t.$Message.error(e.data.error.message))})):t.$Message.error("表单验证失败!")}))},Editoperate:function(){var t=this,e={id:this.rowId,roleName:this.innerInfo.roleName,description:this.innerInfo.description,status:1==this.innerInfo.status?1:2};this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.UpdateRoles(e).then((function(e){e.data.success?(t.$Message.success("修改成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields()):t.$Message.error("提交失败!")})):t.$Message.error("表单验证失败!")}))},getDetail:function(t){var e=this;this.rowId=t;var a={id:t};this.$api.RolesConfig.DetailRoles(a).then((function(t){e.innerInfo=t.data.result,1==t.data.result.status?t.data.result.status=!0:t.data.result.status=!1}))},cancleFun:function(){this.$emit("RefreshParent")}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},r=o,l=(a("c148"),a("6691")),c=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports},7533:function(t,e,a){},9414:function(t,e,a){},"986a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu_model_add model_add  menu_manage"},[a("Form",{ref:"formValidate",staticClass:"clearfix",staticStyle:{width:"100%"},attrs:{model:t.innerInfo,"label-position":"right",rules:t.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"角色名称",prop:"roleName"}},[a("i-Input",{attrs:{type:"text",disabled:"",clearable:"",placeholder:"请输入用户名称"},model:{value:t.innerInfo.roleName,callback:function(e){t.$set(t.innerInfo,"roleName",e)},expression:"innerInfo.roleName"}})],1),a("FormItem",{attrs:{label:"角色使用状态"}},[a("i-Switch",{attrs:{size:"large",disabled:""},model:{value:t.innerInfo.status,callback:function(e){t.$set(t.innerInfo,"status",e)},expression:"innerInfo.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("停止")])])],1),a("FormItem",{attrs:{label:"数据范围",prop:"roleDataType",required:!0}},[a("Select",{attrs:{placeholder:"请选择数据范围",clearable:""},on:{"on-change":t.choosePermission},model:{value:t.innerInfo.roleDataType,callback:function(e){t.$set(t.innerInfo,"roleDataType",e)},expression:"innerInfo.roleDataType"}},t._l(t.numberList,(function(e){return a("Option",{key:e.roleDataType,attrs:{value:e.roleDataType}},[t._v(t._s(e.value))])})),1)],1),t.treeShow?a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"部门数据权限"}},[a("Tree",{attrs:{data:t.data2,"show-checkbox":""},on:{"on-check-change":t.chooseManage}})],1):t._e()],1),a("div",{staticClass:"listbutton"},[a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.Addoperate}},[t._v("授权")]),a("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:t.cancleFun}},[t._v("取消")])],1)],1)},n=[],i=(a("63ff"),a("f8f9")),o=(a("4634"),a("fafd"),a("8062"),a("dea4")),r={props:{disabled:Boolean},data:function(){return{numberList:[{value:"全部数据权限",label:"全部数据权限",roleDataType:"0"},{value:"本部门数据权限",label:"本部门数据权限",roleDataType:"1"},{value:"本部门及一下数据权限",label:"本部门及一下数据权限",roleDataType:"2"},{value:"仅本人数据权限",label:"仅本人数据权限",roleDataType:"3"},{value:"自定义数据权限",label:"自定义数据权限",roleDataType:"4"}],dic_data:[{name:"所属系统",data:[]}],innerInfo:{roleName:"",roleDataType:"",status:""},data2:[],rowId:"",listParam:{menuName:"",isShow:"",pageSize:12,pageIndex:-1},ruleValidate:{phoneNumber:Object(o["a"])(this.$helper.validateProvider("联系电话",!1))},idList:[],treeShow:!1,ids:[]}},methods:{getDetail:function(t){var e=this;this.rowId=t;var a={id:t};this.$api.RolesConfig.DetailRoles(a).then((function(t){e.innerInfo=t.data.result,e.innerInfo.roleDataType=String(t.data.result.roleDataType),"4"==e.innerInfo.roleDataType?e.treeShow=!0:e.treeShow=!1,1==t.data.result.status?t.data.result.status=!0:t.data.result.status=!1})),this.getManageTree(t)},Addoperate:function(){var t=this,e={roleId:this.rowId,roleDataType:this.innerInfo.roleDataType,departmentIds:this.idList};this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.rolePermission(e).then((function(e){e.data.success?(t.$Message.success("提交成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields()):t.$Message.error("提交失败!")})):t.$Message.error("表单验证失败!")}))},cancleFun:function(){this.$emit("RefreshParent")},getManageTree:function(t){var e=this,a={roleId:t};this.rowId;this.$api.MenuConfig.AlManageTree(a).then((function(t){e.data2=t.data.result;var a=e.getIds(e.data2);e.idList=Object(o["a"])(new Set(a))}))},getIds:function(t){var e=this;return t.forEach((function(t){1==t.checked&&e.ids.push(t.id),t.children&&0!==t.children.length&&e.getIds(t.children)})),e.ids},chooseManage:function(t){var e=this;this.idList=[],t.forEach((function(t){t.selected=!0,e.idList.push(t.id)}));var a=this.idList;this.idList=Object(o["a"])(new Set(a))},choosePermission:function(t){this.treeShow="4"==t}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},l=r,c=(a("fa71"),a("6691")),d=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports},a5d2:function(t,e,a){"use strict";var s=a("33b0"),n=a.n(s);n.a},ab0a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu_model_add model_add"},[a("Form",{ref:"formValidate",staticClass:"clearfix",staticStyle:{width:"100%"},attrs:{model:t.innerInfo,"label-position":"right",rules:t.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"角色名称",prop:"roleName"}},[a("i-Input",{attrs:{type:"text",disabled:"",clearable:"",placeholder:"请输入用户名称"},model:{value:t.innerInfo.roleName,callback:function(e){t.$set(t.innerInfo,"roleName",e)},expression:"innerInfo.roleName"}})],1),a("FormItem",{attrs:{label:"角色状态"}},[a("i-Switch",{attrs:{size:"large",disabled:""},model:{value:t.innerInfo.status,callback:function(e){t.$set(t.innerInfo,"status",e)},expression:"innerInfo.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("停止")])])],1),a("FormItem",{staticStyle:{width:"100%"},attrs:{label:"菜单权限配置"}},[a("Tree",{attrs:{data:t.data2,"show-checkbox":""},on:{"on-check-change":t.chooseMenu}})],1)],1),a("div",{staticClass:"listbutton"},[a("Button",{staticClass:"savebutton",attrs:{type:"primary",icon:"md-checkmark"},on:{click:t.Addoperate}},[t._v("授权")]),a("Button",{staticClass:"cancelbutton",attrs:{type:"primary",icon:"md-undo"},on:{click:t.cancleFun}},[t._v("取消")])],1)],1)},n=[],i=(a("63ff"),a("f8f9")),o=(a("4634"),a("fafd"),a("8062"),a("dea4")),r={props:{disabled:Boolean},data:function(){return{dic_data:[{name:"所属系统",data:[]}],innerInfo:{roleName:"",description:"",status:""},data2:[],rowId:"",ruleValidate:{phoneNumber:Object(o["a"])(this.$helper.validateProvider("联系电话",!1))},idList:[],ids:[]}},inject:["reload"],methods:{getDetail:function(t){var e=this;console.log(this.idList),this.rowId=t;var a={id:t};this.$api.RolesConfig.DetailRoles(a).then((function(t){e.innerInfo=t.data.result,1==t.data.result.status?t.data.result.status=!0:t.data.result.status=!1})),this.getMenuTree(t)},Addoperate:function(){var t=this,e={id:this.rowId,roleName:this.innerInfo.roleName,description:this.innerInfo.description,status:1==this.innerInfo.status?1:2,menuIds:this.idList};console.log(e),this.$refs.formValidate.validate((function(a){a?t.$api.RolesConfig.UpdateRoles(e).then((function(e){e.data.success?(t.$Message.success("提交成功!"),t.$emit("RefreshParent"),t.$refs.formValidate.resetFields()):t.$Message.error("提交失败!")})):t.$Message.error("表单验证失败!")})),this.ids=[]},cancleFun:function(){this.$emit("RefreshParent")},getMenuTree:function(t){var e=this,a={roleId:t};this.$api.MenuConfig.AllMenuTree(a).then((function(t){e.data2=t.data.result;var a=e.getIds(e.data2);e.idList=Object(o["a"])(new Set(a))}))},getIds:function(t){var e=this;return t.forEach((function(t){1==t.checked&&e.ids.push(t.id),t.children&&0!==t.children.length&&e.getIds(t.children)})),e.ids},chooseMenu:function(t){var e=this;this.idList=[],t.forEach((function(t){t.selected=!0,e.idList.push(t.id)}));var a=this.idList;this.idList=Object(o["a"])(new Set(a))}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},l=r,c=(a("3e48"),a("6691")),d=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports},b23f:function(t,e,a){},c148:function(t,e,a){"use strict";var s=a("b23f"),n=a.n(s);n.a},d0e9:function(t,e,a){"use strict";var s=a("3c7f"),n=a.n(s);n.a},e40d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"role_model_add model_detail"},[a("li",{staticClass:"detail_li"},[a("label",[t._v("角色名称：")]),a("span",{staticClass:"span_class"},[t._v(t._s(t.innerInfo.roleName))])]),a("li",{staticClass:"detail_li"},[a("label",[t._v("角色状态：")]),a("span",{staticClass:"span_class"},[t._v(t._s(t.innerInfo.status))])]),a("li",{staticClass:"detail_li"},[a("label",[t._v("描述：")]),a("span",{staticClass:"span_class"},[t._v(t._s(t.innerInfo.description))])])])},n=[],i=(a("63ff"),a("f8f9")),o={props:{disabled:Boolean,EditFlag:Boolean},data:function(){return{dic_data:[{name:"所属系统",data:[]}],innerInfo:{roleName:"",description:"",status:!1},rowId:"",ruleValidate:{}}},methods:{getDetail:function(t){var e=this;this.rowId=t;var a={id:t};this.$api.RolesConfig.DetailRoles(a).then((function(t){e.innerInfo=t.data.result,1==t.data.result.status?t.data.result.status="启用":t.data.result.status="停用"}))}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$helper.getDicByCodeName(this.dic_data);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},r=o,l=(a("a5d2"),a("6691")),c=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports},fa71:function(t,e,a){"use strict";var s=a("7533"),n=a.n(s);n.a}}]);