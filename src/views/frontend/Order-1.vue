<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loading-blue">
        <div class="ldio-loading">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </loading>

    <div class="container-100 container my-4">
      <div class="row justify-content-center">
        <div class="col-11 boder-db">
          <nav aria-label="breadcrumb" class="pl-0">
            <ol class="breadcrumb mb-0 pl-0">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Index' }"> 首頁 </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ path: 'shoppingcart' }"> 購物車 </router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">結帳確認</li>
            </ol>
          </nav>

          <div class="container-75 pt-5">
            <div class="timeline position-relative mb-5">
              <div class="timepoint position-relative timepoint-color">
                <i class="far fa-sticky-note"></i>
              </div>
              <div class="timepoint position-relative">
                <i class="fas fa-edit"></i>
              </div>
              <div class="timepoint position-relative">
                <i class="fas fa-truck"></i>
              </div>
            </div>
            <div class="line-name d-flex justify-content-between">
              <p class="text-c1 w-1 pt-1">確認購買</p>
              <p class="text-c5 w-1 pt-1">填寫資料</p>
              <p class="text-c5 w-1 pt-1">完成訂單</p>
            </div>

            <label for="exampleFormControlInput-1"><span class="text-c1 h5">優惠券</span></label>
            <div class="input-group mb-3">
              <input
                id="exampleFormControlInput-1"
                type="text"
                class="form-control"
                placeholder="優惠券代碼"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                v-model="couponCode"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-outline-c1"
                  id="button-addon2"
                  @click="Couponinput()"
                >
                  確認輸入
                </button>
              </div>
            </div>

            <Marquee class="text-danger mb-2"
              ><i class="fas fa-bullhorn pr-1"></i>
              貼心提醒!!!如果您有使用優惠券，務必要按下"確認輸入"的button才算套用成功
              <i class="fas fa-bullhorn bullhorn pl-1"></i>
            </Marquee>

            <div class="accordion" id="accordionExample"></div>
            <div class="card pb-1">
              <div class="card-header d-sm-flex justify-content-between py-1" id="headingOne">
                <h2 class="mb-0">
                  <button
                    type="button"
                    class="btn btn-link btn-block text-left"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    顯示購物車細節<i class="fas fa-angle-down ml-1 text-c1"></i>
                  </button>
                </h2>
                <h2 class="mb-0 pl-3 pl-sm-0 d-flex align-items-center titlefont">
                  <p class="d-inline-block mb-0 pr-3">應付金額</p>
                  {{ carts.final_total || 0 | currency }}
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="shopping-table">
                  <table class="table">
                    <tr>
                      <th scope="col" class="text-center" colspan="2">商品名稱</th>
                      <th scope="col" class="text-center" width="150">數量</th>
                      <th scope="col" width="200">小計</th>
                    </tr>
                    <tr v-for="product in carts.carts" :key="product.id">
                      <td class="table-img">
                        <img
                          class="img-fluid"
                          :src="product.product.imageUrl"
                          :alt="product.product.title"
                        />
                      </td>

                      <td>{{ product.product.title }}</td>
                      <td class="text-center">{{ product.qty }}{{ product.product.unit }}</td>
                      <td class="text-right">{{ product.total | currency }}</td>
                    </tr>

                    <tr>
                      <th colspan="3" class="text-right">運費</th>
                      <th class="text-right">$0</th>
                    </tr>
                    <tr>
                      <th colspan="3" class="text-right">優惠折抵</th>
                      <th class="text-right">{{ CouponMoney || 0 | currency }}</th>
                    </tr>
                    <tr>
                      <td colspan="3" class="text-right">合計</td>
                      <th class="text-right">{{ carts.final_total || 0 | currency }}</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="text-right my-2">
              <button type="button" class="btn new-btn new-btn-order" @click="nextpage()">
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      carts: [],
      total: [],
      couponCode: '',
    };
  },
  computed: {
    CouponMoney() {
      return this.carts.total - this.carts.final_total;
    },
  },
  methods: {
    getCarts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      setTimeout(() => {
        vm.$http.get(api).then((response) => {
          vm.carts = response.data.data;
          vm.total = [response.data.data.total];
          vm.isLoading = false;
        });
      }, 500);
    },
    Couponinput() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const postcoupon = {
        code: this.couponCode,
      };
      vm.$http.post(api, { data: postcoupon }).then((response) => {
        vm.getCarts();
        if (response.data.success) {
          vm.alertDisplay('優惠券使用成功', 'success');
        } else {
          vm.alertDisplay('優惠券已過期或輸入錯誤', 'error');
        }
      });
    },
    nextpage() {
      const vm = this;
      vm.isLoading = true;
      setTimeout(() => {
        vm.$router.push('/checkout2');
      }, 500);
    },
    alertDisplay(text, type) {
      const message = text;
      const messageType = type;
      this.$dlg.toast(message, {
        messageType,
        closeTime: 3,
        position: 'topCenter',
        language: 'en',
      });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  border-color: #28a745;
  &:focus {
    box-shadow: 0 0 0 0 #28a745;
  }
}
.w-1 {
  width: 75px;
  text-align: center;
}
.font-1 {
  font-size: 40px;
  color: black;
}
.font-2 {
  font-size: 30px;
  color: black;
}
.container-70 {
  min-height: 70vh;
}
@media (max-width: 576px) {
  .font-1 {
    font-size: 18px;
  }
  .container-70 {
    min-height: 100vh;
  }
}

.new-btn-favourite:after {
  color: white;
}
.new-btn:hover:after {
  color: white;
}
.new-btn {
  border: 2px solid black;
}
.titlefont {
  font-size: 40px;
}
@media (max-width: 768px) {
  .titlefont {
    font-size: 24px;
  }
}
.container-100 {
  min-height: 120vh;
}
</style>
