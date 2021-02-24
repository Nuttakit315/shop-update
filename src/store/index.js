import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product1:{
      name:"ดูเร็กซ์ คิงเท็ค",
      price:30,
      amount:0
    },
    product2:{
      name:"ดูเร็กซ์ เลิฟ",
      price:40,
      amount:0
    },
    product3:{
      name:"ดูเร็กซ์ เอ็ม- 11",
      price:50,
      amount:0
    },
    product4:{
      name:"ดูเร็กซ์ คอมฟอร์ท",
      price:60,
      amount:0
    },
    product5:{
      name:"ดูเร็กซ์ เฟเธอร์ไลท์",
      price:70,
      amount:0
    },
    product6:{
      name:"ดูเร็กซ์ เฟเธอร์ไลท์ อัลติมา",
      price:80,
      amount:0
    },
    sum:0,
    say: function (message) {
      alert(message)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
