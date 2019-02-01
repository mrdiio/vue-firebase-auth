<template>
   <div class="register">
      <h3>Create a new Account!</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="register">Register</button>
      <p>You have an account? Login <router-link to="/login">Here</router-link></p>
   </div>
</template>

<script>
import firebase from 'firebase'

export default {
   name: 'login',
   data() {
      return {
         email: '',
         password: ''
      }
   },
   methods: {
      register: function() {
         firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            (user) => {
               this.$router.replace('home')
            },
            (err) => {
               alert('Oops ' + err.message)
            });
      }
   }
}
</script>

<style scoped>
.login {
   margin-top: 40px
}
input {
   margin: 10px 0;
   width: 20%;
   padding: 15px
}
button {
   margin-top: 20px;
   width: 10%;
   cursor: pointer;
}
p {
   margin-top: 40px;
   font-size: 13px;
}
p a {
   text-decoration: underline;
   cursor: pointer
}

</style>

