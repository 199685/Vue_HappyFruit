(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2bb1716"],{"05a2":function(t,a,s){},"6b2f":function(t,a,s){"use strict";s("05a2")},"6c8e":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"cart-icon position-fixed"},[s("p",{staticClass:"pointer h1 mb-4"},[s("i",{staticClass:"fas fa-arrow-circle-up hide",on:{click:function(a){return t.Top()}}})]),s("p",{staticClass:"pointer h5"},[s("router-link",{attrs:{to:{path:"/shoppingcart"}}},[s("i",{staticClass:"fas fa-shopping-cart text-c1 pl-1 position-relative shopping-cart"},[s("span",{staticClass:"position-absolute h8 circle text-light"},[t._v("\n            "+t._s(t.carts)+"\n          ")])])])],1)])])},e=[],n={data:function(){return{changebar:!1}},props:["carts"],components:{},methods:{Top:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},addhide:function(){var t=document.querySelector(".cart-icon"),a=document.querySelector(".fa-arrow-circle-up");window.pageYOffset>t.offsetTop/2?a.classList.remove("hide"):a.classList.add("hide")}},created:function(){},mounted:function(){window.addEventListener("scroll",this.addhide)},beforeDestroy:function(){window.removeEventListener("scroll",this.addhide)}},c=n,o=s("2877"),r=Object(o["a"])(c,i,e,!1,null,"edc8be46",null);a["a"]=r.exports},f304:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-spin-5xz8vi7q1c2"},[s("div",{staticClass:"ldio-2zmxuno6hnw"},[s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")]),s("div",[s("div")])])])]),s("div",{staticClass:"container-100 container my-4"},[s("div",{staticClass:"row bg-product justify-content-center"},[s("nav",{staticClass:"col-12 mb-3",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"Index"}}},[t._v("\n              Home\n            ")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{path:"shoppingcart"}}},[t._v("\n              Shopping Cart\n            ")])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Checkout")])])]),s("div",{staticClass:"col-md-10 container-75"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CouponCode,expression:"CouponCode"}],staticClass:"form-control",attrs:{id:"exampleFormControlInput-1",type:"text",placeholder:"優惠券代碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.CouponCode},on:{input:function(a){a.target.composing||(t.CouponCode=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-c1",attrs:{type:"button",id:"button-addon2"},on:{click:function(a){return t.Couponinput()}}},[t._v("\n              確認輸入\n            ")])])]),s("Marquee",{staticClass:"text-danger mb-2"},[s("i",{staticClass:"fas fa-bullhorn pr-1"}),t._v('\n          貼心提醒!!!如果您有使用優惠券，務必要按下"確認輸入"的button才算套用成功\n          '),s("i",{staticClass:"fas fa-bullhorn bullhorn pl-1"})]),s("div",{staticClass:"accordion",attrs:{id:"accordionExample"}}),s("div",{staticClass:"card pb-1"},[s("div",{staticClass:"card-header d-sm-flex justify-content-between py-1",attrs:{id:"headingOne"}},[t._m(3),s("h2",{staticClass:"mb-0 pl-3 pl-sm-0 d-flex align-items-center"},[s("p",{staticClass:"d-inline-block h7 mb-0 pr-3"},[t._v("應付金額")]),t._v("\n              "+t._s(t._f("currency")(t.carts.final_total||0))+"\n            ")])]),s("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[s("div",{staticClass:"shopping-table"},[s("table",{staticClass:"table"},[t._m(4),t._l(t.carts.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"table-img"},[s("img",{staticClass:"img-fluid",attrs:{src:a.product.imageUrl,alt:""}})]),s("td",[t._v(t._s(a.product.title))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.qty)+t._s(a.product.unit))]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))])])})),t._m(5),s("tr",[s("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("優惠折抵")]),s("th",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.CouponMoney||0)))])]),s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("合計")]),s("th",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.final_total||0)))])])],2)])])]),s("div",{staticClass:"text-right my-2"},[s("button",{staticClass:"btn new-btn new-btn-order",on:{click:function(a){return t.nextpage()}}},[t._v("下一步")])])],1)])]),s("Carticon",{attrs:{carts:t.cartsNumber}})],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"timeline position-relative mb-5"},[s("div",{staticClass:"timepoint position-relative timepoint-color"},[s("i",{staticClass:"far fa-sticky-note"})]),s("div",{staticClass:"timepoint position-relative "},[s("i",{staticClass:"fas fa-edit"})]),s("div",{staticClass:"timepoint position-relative "},[s("i",{staticClass:"fas fa-truck"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"line-name d-flex justify-content-between"},[s("p",{staticClass:"text-c1"},[t._v("確認購買")]),s("p",{staticClass:"text-c5"},[t._v("填寫資料")]),s("p",{staticClass:"text-c5"},[t._v("完成訂單")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{attrs:{for:"exampleFormControlInput-1"}},[s("span",{staticClass:"text-c1 h5"},[t._v("優惠券")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{staticClass:"mb-0"},[s("button",{staticClass:"btn btn-link btn-block text-left",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                顯示購物車細節"),s("i",{staticClass:"fas fa-angle-down ml-1 text-c1"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"col",colspan:"2"}},[t._v("商品名稱")]),s("th",{staticClass:"text-center",attrs:{scope:"col",width:"150"}},[t._v("數量")]),s("th",{attrs:{scope:"col",width:"200"}},[t._v("小計")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("運費")]),s("th",{staticClass:"text-right"},[t._v("$0")])])}],n=s("6c8e"),c={data:function(){return{isLoading:!1,cartsNumber:0,cartsProductID:[],carts:[],total:[],CouponCode:""}},components:{Carticon:n["a"]},computed:{CouponMoney:function(){return this.carts.total-this.carts.final_total}},methods:{getCarts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/cart"),s=this;s.isLoading=!0,setTimeout((function(){t.$http.get(a).then((function(a){t.cartsNumber=a.data.data.carts.length,s.carts=a.data.data,s.total=[a.data.data.total],s.isLoading=!1}))}),1500)},Couponinput:function(){var t=this;t.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/coupon"),s={code:this.CouponCode};this.$http.post(a,{data:s}).then((function(a){t.getCarts(),a.data.success?t.alertDisplay("優惠券使用成功","success"):t.alertDisplay("優惠券已過期或輸入錯誤","error")}))},nextpage:function(){var t=this;t.isLoading=!0,setTimeout((function(){t.$router.push("/checkout2")}),500)},alertDisplay:function(t,a){var s=t,i=a;this.$dlg.toast(s,{messageType:i,closeTime:3,position:"topCenter",language:"en"})}},created:function(){this.getCarts()},mounted:function(){}},o=c,r=(s("6b2f"),s("2877")),l=Object(r["a"])(o,i,e,!1,null,"213af050",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a2bb1716.9568b192.js.map