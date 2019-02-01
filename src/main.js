import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyAa9LvN4lwZQjzrQERouyL6ezrCybS5X-A",
  authDomain: "dio-learn-auth.firebaseapp.com",
  databaseURL: "https://dio-learn-auth.firebaseio.com",
  projectId: "dio-learn-auth",
  storageBucket: "dio-learn-auth.appspot.com",
  messagingSenderId: "327164297301"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

