(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02c072de"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"mt-3",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.getProducts(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],o={name:"Pagination",props:["pagination"],data:function(){return{}},methods:{getProducts:function(t){this.$emit("products-getProducts",t)}}},r=o,c=a("2877"),n=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=n.exports},"3f70":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("div",{staticClass:"loadingio-spinner-spin-5xz8vi7q1c2"},[a("div",{staticClass:"ldio-2zmxuno6hnw"},[a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")])])])]),a("div",{staticClass:"text-right mt-8"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("add")}}},[t._v("建立新的產品")])]),a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(t._f("currency")(e.origin_price))+"\n        ")]),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(t._f("currency")(e.price))+"\n        ")]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group d-block d-md-flex",attrs:{role:"group","aria-label":"Third group"}},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)])]),a("Page",{attrs:{pagination:t.pagination},on:{"products-getProducts":t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group "},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control pl-1",attrs:{type:"file",id:"customFile"},on:{change:function(e){return t.uploadFile()}}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"num"}},[t._v("數量")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"form-control",attrs:{type:"number",id:"num",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.num},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"num",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[a("p",[t._v("盛產季節")]),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"d-flex align-items-center mr-2"},[a("label",{staticClass:"mb-0 pr-1",attrs:{for:"spring"}},[t._v("春天")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.season,expression:"tempProduct.season"}],attrs:{type:"checkbox",value:"spring",id:"spring"},domProps:{checked:Array.isArray(t.tempProduct.season)?t._i(t.tempProduct.season,"spring")>-1:t.tempProduct.season},on:{change:function(e){var a=t.tempProduct.season,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o="spring",r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"season",a.concat([o])):r>-1&&t.$set(t.tempProduct,"season",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"season",i)}}})]),a("div",{staticClass:"d-flex align-items-center mr-2"},[a("label",{staticClass:"mb-0 pr-1",attrs:{for:"summer"}},[t._v("夏天")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.season,expression:"tempProduct.season"}],attrs:{type:"checkbox",value:"summer",id:"summer"},domProps:{checked:Array.isArray(t.tempProduct.season)?t._i(t.tempProduct.season,"summer")>-1:t.tempProduct.season},on:{change:function(e){var a=t.tempProduct.season,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o="summer",r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"season",a.concat([o])):r>-1&&t.$set(t.tempProduct,"season",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"season",i)}}})]),a("div",{staticClass:"d-flex align-items-center mr-2"},[a("label",{staticClass:"mb-0 pr-1",attrs:{for:"autumn"}},[t._v("秋天")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.season,expression:"tempProduct.season"}],attrs:{type:"checkbox",value:"autumn",id:"autumn"},domProps:{checked:Array.isArray(t.tempProduct.season)?t._i(t.tempProduct.season,"autumn")>-1:t.tempProduct.season},on:{change:function(e){var a=t.tempProduct.season,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o="autumn",r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"season",a.concat([o])):r>-1&&t.$set(t.tempProduct,"season",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"season",i)}}})]),a("div",{staticClass:"d-flex align-items-center mr-2"},[a("label",{staticClass:"mb-0 pr-1",attrs:{for:"winter"}},[t._v("冬天")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.season,expression:"tempProduct.season"}],attrs:{type:"checkbox",value:"winter",id:"winter"},domProps:{checked:Array.isArray(t.tempProduct.season)?t._i(t.tempProduct.season,"winter")>-1:t.tempProduct.season},on:{change:function(e){var a=t.tempProduct.season,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o="winter",r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"season",a.concat([o])):r>-1&&t.$set(t.tempProduct,"season",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"season",i)}}})])])])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,"")>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var o="",r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._m(3),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.updateProduct()}}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"}),t._v(" 商品(刪除後將無法恢復)。\n        ")])}],o=a("1799"),r={data:function(){return{products:[],pagination:{},tempProduct:{season:[]},isNew:!1,isLoading:!1,status:{fileUploading:!1},originalpage:0}},components:{Page:o["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/admin/products?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then((function(t){a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination}))},openModal:function(t,e){switch(t){case"add":this.tempProduct={season:[]},this.isNew="add";break;case"edit":this.tempProduct=Object.assign({},e),this.isNew="edit";break;default:this.tempProduct=Object.assign({},e),this.isNew="delete";break}"delete"!==this.isNew?$("#productModal").modal("show"):$("#delProductModal").modal("show")},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/admin/product"),e=this,a="post";switch(e.isNew){case"add":break;case"edit":t="".concat(t,"/").concat(e.tempProduct.id),a="put";break;default:t="".concat(t,"/").concat(e.tempProduct.id),a="delete";break}this.$http[a](t,{data:e.tempProduct}).then((function(t){t.data.success&&("delete"!==e.isNew?$("#productModal").modal("hide"):$("#delProductModal").modal("hide"),e.getProducts(e.pagination.current_page))}))},uploadFile:function(){var t=this,e=this.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/admin/upload");a.status.fileUploading=!0,this.$http.post(i,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.success?(a.status.fileUploading=!1,a.$set(a.tempProduct,"imageUrl",e.data.imageUrl)):t.$bus.$emit("messsage:push",e.data.message,"danger")}))}},created:function(){this.getProducts()}},c=r,n=(a("8e28"),a("2877")),d=Object(n["a"])(c,s,i,!1,null,"1d80ea0e",null);e["default"]=d.exports},"84af":function(t,e,a){},"8e28":function(t,e,a){"use strict";a("84af")}}]);
//# sourceMappingURL=chunk-02c072de.83573f2d.js.map