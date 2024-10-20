<script setup>
import '../styles/account.css'
import { ref } from 'vue'
import UserApi from '@/api/UserApi.js'
import router from '@/router/index.js'

let userHead = ref(Object)

let username = ref('')
let email = ref('')
let password = ref('')
let bio = ref('')
let phone = ref(0)
let names = ref('')
let lastNames = ref('')
let rut = ref('')
let birthDate = ref(Date)
let address = ref('')
let trait = ref('')
let emergencyContact = ref('')
let emergencyNumber = ref(0)
let city = ref('')
let commune = ref('')

let confirmUser = ref('')
let confirmMessage = ref('Eliminar cuenta')
let confirmed = ref(false)

const saveChanges = () => {
  let user = {
    name: username.value,
    email: email.value,
    password: password.value,
    points: user.points,
    kilometers: user.kilometers
  }
  let userDetails = {
    bio: bio.value,
    phone: phone.value,
    names: names.value,
    lastNames: lastNames.value,
    rut: rut.value,
    birthday: birthDate.value,
    address: address.value,
    trait: trait.value,
    emergencyContactName: emergencyContact.value,
    emergencyContact: emergencyNumber.value,
    city: city.value,
    commune: commune.value,
    profilePic: "https://picsum.photos/540"
  }
  UserApi.putUser(window.localStorage.getItem("userID"), user).then(() => {
    UserApi.putUserDetails(window.localStorage.getItem("userID"), userDetails).then(() => {
      router.push('/account-showcase').then(() => {
        router.go(0);
      })
    }).catch(() => {
      console.log('Error User Tipo2')
    });
  }).catch(() => {
    console.log('Error User Tipo1')
  });
  console.log(user,userDetails);
}

const deleteAccount = () => {
  if(confirmed.value && confirmUser.value === userHead.value.name){
    UserApi.deleteUser(window.localStorage.getItem("userID")).then(() => {
      UserApi.deleteUserDetails(window.localStorage.getItem("userID")).then(() => {
        console.log('Usuario eliminado');
      }).catch(() => {
        console.log('Error')
      });
      window.localStorage.removeItem("userID");
      router.push('/').then(() => {
        router.go(0);
      })
    }).catch(() => {
      console.log('Error')
    });
  }else if (confirmUser.value === userHead.value.name){
    confirmMessage.value = '¿Estás seguro?'
    confirmed.value = !confirmed.value
  } else {
    resetConfirm()
  }
}

const resetConfirm = () => {
  confirmMessage.value = 'Eliminar cuenta'
  confirmed.value = false
}

UserApi.getUser(window.localStorage.getItem("userID")).then(response => {
  userHead.value = response.data;
}).catch(() => {
});

UserApi.getUserDetails(window.localStorage.getItem('userID')).then( req => {
  let userDetails = ref(req.data);
  bio.value = userDetails.value.bio
  phone.value = userDetails.value.phone
  names.value = userDetails.value.names
  lastNames.value = userDetails.value.lastNames
  rut.value = userDetails.value.rut
  birthDate.value = userDetails.value.birthday
  address.value = userDetails.value.address
  trait.value = userDetails.value.trait
  emergencyContact.value = userDetails.value.emergencyContactName
  emergencyNumber.value = userDetails.value.emergencyContact
  city.value = userDetails.value.city
  commune.value = userDetails.value.commune
});

UserApi.getUser(window.localStorage.getItem("userID")).then(response => {
  userHead.value = response.data;
  username.value = userHead.value.name;
  email.value = userHead.value.email;
  password.value = userHead.value.password;
}).catch(() => {
});


console.log(username,email,password,bio,phone,names,lastNames,rut,birthDate,address,trait,emergencyContact,emergencyNumber,city,commune);

//TODO: Ver que hacer con la foto
//TODO: Comprobar que falta
//TODO: Gestion de Errores
</script>

<template>
  <section class="page-body">
    <div class="left-column">
      <img class="profile-pic" src="@/assets/11.jpg" alt="">
      <button class="edit-profile">Editar Foto</button>
      <button class="save-profile" @click="saveChanges()">Guardar Cambios</button>
    </div>
    <div class="form-container">
      <div class="header">
        <div class="header-title">Datos Personales</div>
      </div>

      <div class="form-content">

        <div class="section">
          <div class="section-header">Credenciales</div>
          <div class="section-body">
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" v-model="email">
            </div>
            <div class="input-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" name="password" v-model="password">
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-header">Información</div>
          <div class="section-body">
            <div class="input-group">
              <label for="username">Nombre de usuario</label>
              <input type="text" id="username" name="username" v-model="username">
            </div>
            <div class="input-group">
              <label for="bio">Bio</label>
              <textarea id="bio" name="bio" v-model="bio"></textarea>
            </div>
            <div class="input-group-group">
              <div class="input-group">
                <label for="trait">Trato</label>
                <input type="text" id="trait" name="trait" v-model="trait">
              </div>
              <div class="input-group">
                <label for="names">Nombres</label>
                <input type="text" id="names" name="names" v-model="names">
              </div>
            </div>
            <div class="input-group-group">
              <div class="input-group">
                <label for="lastnames">Apellidos</label>
                <input type="text" id="lastnames" name="lastnames" v-model="lastNames">
              </div>
            </div>
            <div class="input-group-group">
              <div class="input-group">
                <label for="rut">Rut</label>
                <input type="text" id="rut" name="rut" v-model="rut">
              </div>
              <div class="input-group">
                <label for="birthday">Fecha de nacimiento</label>
                <input type="date" id="birthday" name="birthday" v-model="birthDate">
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-header">Datos de acceso</div>
          <div class="section-body">
            <div class="input-group-group">
              <div class="input-group">
                <label for="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" v-model="address">
              </div>
              <div class="input-group">
                <label for="comuna">Comuna</label>
                <input type="text" id="comuna" name="comuna" v-model="commune">
              </div>
              <div class="input-group">
                <label for="telefono">Número Telefónico</label>
                <input type="tel" id="telefono" name="telefono" v-model="phone">
              </div>
            </div>
            <div class="input-group-group">
              <div class="input-group">
                <label for="num_emergencia">Número de emergencia</label>
                <input type="tel" id="num_emergencia" name="num_emergencia" v-model="emergencyNumber">
              </div>
              <div class="input-group">
                <label for="contacto_emergencia">Nombre contacto de emergencia</label>
                <input type="text" id="contacto_emergencia" name="contacto_emergencia" v-model="emergencyContact">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="input-group">
          <label for="confirmUser">Confirmacion para Borrar Cuenta</label>
          <input type="text"  v-model="confirmUser" @input="resetConfirm()" placeholder="Ingresar Username">
        </div>
        <a class="delete-account" @click.prevent="deleteAccount()">{{confirmMessage}}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
