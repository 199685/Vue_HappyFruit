(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-177c91be"],{"2fdb":function(t,i,a){"use strict";var s=a("5ca1"),e=a("d2c8"),r="includes";s(s.P+s.F*a("5147")(r),"String",{includes:function(t){return!!~e(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,i,a){var s=a("2b4c")("match");t.exports=function(t){var i=/./;try{"/./"[t](i)}catch(a){try{return i[s]=!1,!"/./"[t](i)}catch(e){}}return!0}},6762:function(t,i,a){"use strict";var s=a("5ca1"),e=a("c366")(!0);s(s.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},aae3:function(t,i,a){var s=a("d3f4"),e=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var i;return s(t)&&(void 0!==(i=t[r])?!!i:"RegExp"==e(t))}},c197:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}},[a("div",{staticClass:"loadingio-spinner-spin-5xz8vi7q1c2"},[a("div",{staticClass:"ldio-2zmxuno6hnw"},[a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")])])])]),a("div",{staticClass:"container-100  container my-4"},[a("div",{staticClass:"row bg-Favourite container-75"},[a("nav",{staticClass:"col-12",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{path:"index"}}},[t._v("\n              Home\n            ")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Favourite")])])]),a("div",{staticClass:"col text-center pb-5",class:{"d-none":t.zerofavourite}},[a("p",{staticClass:"h4 mb-5 text-c1"},[t._v("目前我的最愛沒有任何商品")]),a("div",{staticClass:"text-center"},[a("router-link",{attrs:{to:{path:"products"}}},[a("button",{staticClass:"btn new-btn new-btn-favourite"},[t._v("採購去~~")])])],1)]),t._l(t.favouriteProducts,(function(i){return a("div",{key:i.id,staticClass:"col-lg-4 col-md-6 mb-4 mb-0"},[a("div",{staticClass:"position-relative product"},[a("img",{staticClass:"img-size pointer",attrs:{src:i.imageUrl,alt:""}}),a("div",{staticClass:"position-absolute\n                      product-icon d-flex flex-column justify-content-center align-items-center"},[a("p",{staticClass:"pointer",class:{heartStyle:i.favourite},on:{click:function(a){return t.addFavourite(i.id)}}},[t._v("\n              加入最愛 "),a("i",{staticClass:"far fa-heart"})]),a("p",{staticClass:"pointer",on:{click:function(a){return t.addCart(i.id)}}},[t._v("\n              加入購物車 "),a("i",{staticClass:"fas fa-shopping-cart"})])]),a("router-link",{staticClass:"product-item p-2 d-block",attrs:{to:{name:"ProductDetail",params:{productId:i.id}}}},[a("p",{staticClass:"py-2 h7 product-name"},[t._v(t._s(i.title))]),a("div",{staticClass:"cost d-flex justify-content-between align-items-center mb-2"},[a("p",{staticClass:"text-line-through h9 m-0"},[t._v("原價"+t._s(t._f("currency")(i.origin_price)))]),a("div",{staticClass:"d-flex"},[a("p",{staticClass:"text-success h9 badges-boder-success mr-1 mb-0"},[t._v("可超商取")]),a("p",{staticClass:"text-danger h9 badges-boder-danger mb-0"},[t._v("不甜退差價")])])]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("p",{staticClass:"h5 text-c4"},[t._v("特價"+t._s(t._f("currency")(i.price)))]),a("a",{staticClass:"h9 m-0",attrs:{href:"#"}},[t._v("查看更多\n                "),a("i",{staticClass:"far fa-hand-point-up"})])])])],1)])})),a("div",{staticClass:"col-12"},[a("ProductSwiper",{staticClass:"mb-3",attrs:{products:t.products}})],1)],2)]),a("Carticon",{attrs:{carts:t.cartsNumber}})],1)},e=[],r=(a("6762"),a("2fdb"),a("ac6a"),a("6c8e")),c=a("5677"),o={data:function(){return{cartsNumber:0,products:[],isLoading:!1,cartProductID:[],cartID:[],quantityValue:1,favourite:[],favouriteProducts:[],zerofavourite:!0}},components:{Carticon:r["a"],ProductSwiper:c["a"]},computed:{},methods:{getCarts:function(){var t=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/cart"),a=this;this.$http.get(i).then((function(i){t.cartsNumber=i.data.data.carts.length,a.cartProductID.splice(0),a.cartID.splice(0),i.data.data.carts.forEach((function(t){var i={id:t.id,qty:t.qty};a.cartID.push(i),a.cartProductID.push(t.product_id)}))}))},getProducts:function(){var t=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/products/all");this.isLoading=!0,this.$http.get(i).then((function(i){t.products=i.data.products,t.getFavourite()}))},getFavourite:function(){this.favourite=JSON.parse(localStorage.getItem("Favourite"))||[];var t=this;this.products.forEach((function(i){t.$set(i,"favourite",!1);var a=t.favourite.includes(i.id);a&&t.$set(i,"favourite",!0),t.isLoading=!1})),0===this.favourite.length&&(this.zerofavourite=!1),this.FavouriteProduct()},addCart:function(t){var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/cart"),a=parseInt(this.quantityValue,10),s=this,e=this.cartProductID.indexOf(t);s.isLoading=!0,e>=0&&(a+=parseInt(s.cartID[e].qty,10));var r={product_id:t,qty:a};this.$http.post(i,{data:r}).then((function(){e>=0?s.removeProduct(s.cartID[e].id):s.getCarts(),s.quantityValue=1,s.alertDisplay("已加入購屋車","info"),s.isLoading=!1}))},removeProduct:function(t){var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/cart/").concat(t),a=this;this.$http.delete(i).then((function(){a.getCarts()}))},addFavourite:function(t){var i=this.favourite.indexOf(t);i>-1?(this.favourite.splice(i,1),this.alertDisplay("已移除我的最愛","warning")):(this.favourite.push(t),this.alertDisplay("已加入我的最愛","info")),localStorage.setItem("Favourite",JSON.stringify(this.favourite)),this.getFavourite()},FavouriteProduct:function(){this.favouriteProducts=this.products.filter((function(t){return!0===t.favourite?t:null}))},alertDisplay:function(t,i){var a=t,s=i;this.$dlg.toast(a,{messageType:s,closeTime:2,position:"topCenter",language:"en"})}},created:function(){this.getCarts(),this.getProducts()},mounted:function(){}},n=o,u=a("2877"),d=Object(u["a"])(n,s,e,!1,null,"7ce73e5a",null);i["default"]=d.exports},d2c8:function(t,i,a){var s=a("aae3"),e=a("be13");t.exports=function(t,i,a){if(s(i))throw TypeError("String#"+a+" doesn't accept regex!");return String(e(t))}}}]);
//# sourceMappingURL=chunk-177c91be.112300c8.js.map