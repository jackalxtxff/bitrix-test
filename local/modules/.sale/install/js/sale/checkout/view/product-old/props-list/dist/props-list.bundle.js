this.BX = this.BX || {};
this.BX.Sale = this.BX.Sale || {};
this.BX.Sale.Checkout = this.BX.Sale.Checkout || {};
this.BX.Sale.Checkout.View = this.BX.Sale.Checkout.View || {};
(function (exports,ui_vue) {
	'use strict';

	ui_vue.Vue.component('sale-checkout-view-product-props_list', {
	  props: ['list'],
	  methods: {
	    isShow: function isShow(item) {
	      return item.name !== '' && item.value !== '';
	    }
	  },
	  // language=Vue
	  template: "\n\t\t<div>\n\t\t\t<div  v-for=\"(item, index) in list\" v-if=\"isShow(item)\" class=\"checkout-item-props\" :key=\"index\">{{item.name}}: {{item.value}}</div>\n\t\t</div>\n\t"
	});

}((this.BX.Sale.Checkout.View.Product = this.BX.Sale.Checkout.View.Product || {}),BX));
//# sourceMappingURL=props-list.bundle.js.map
