<script setup>
import '@/styles/login-overlay.css'
import UserApi from '@/api/UserApi.js'
import router from '@/router/index.js'
import {onMounted, ref} from "vue";

const props = defineProps(['id'])

let userHead = ref({})
let username = ref('')
let email = ref('')
let password = ref('')
let bio = ref('')
let phone = ref('')
let names = ref('')
let lastNames = ref('')
let rut = ref('')
let birthDate = ref('')
let address = ref('')
let trait = ref('')
let emergencyContact = ref('')
let emergencyNumber = ref('')
let city = ref('')
let commune = ref('')
let imageUrl = ref('')

let confirmUser = ref('')
let confirmMessage = ref('Eliminar cuenta')
let confirmed = ref(false)


const saveChanges = () => {
  let user = {
    name: username.value,
    email: email.value,
    password: password.value,
    points: userHead.value.points,
    kilometers: userHead.value.kilometers
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
    profilePic: imageUrl.value
  }

  UserApi.putUser(props.id, user).then(() => {
    UserApi.putUserDetails(props.id, userDetails).then(() => {
      router.push('/admin/users').then(() => {
        router.go(0);
      })
    }).catch(() => {
      console.log('Error User Tipo2')
    });
  }).catch(() => {
    console.log('Error User Tipo1')
  });
}

const deleteAccount = () => {
  if(confirmed.value && confirmUser.value === userHead.value.name){
    UserApi.deleteUser(props.id).then(() => {
      UserApi.deleteUserDetails(props.id).then(() => {
        console.log('Usuario eliminado');
      }).catch(() => {
        console.log('Error')
      });
      router.push('/admin/users').then(() => {
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

onMounted( () => {
  UserApi.getUser(props.id).then(response => {
    userHead.value = response.data;
    username.value = userHead.value.name;
    email.value = userHead.value.email;
    password.value = userHead.value.password;
  }).catch(() => {});

  UserApi.getUserDetails(props.id).then(req => {
    let userDetails = req.data;
    bio.value = userDetails.bio
    phone.value = userDetails.phone
    names.value = userDetails.names
    lastNames.value = userDetails.lastNames
    rut.value = userDetails.rut
    birthDate.value = userDetails.birthday
    address.value = userDetails.address
    trait.value = userDetails.trait
    emergencyContact.value = userDetails.emergencyContactName
    emergencyNumber.value = userDetails.emergencyContact
    city.value = userDetails.city
    commune.value = userDetails.commune
    imageUrl.value = userDetails.profilePic
  }).catch(() => {});
})
</script>

<template>
  <div class="popup-overlay" id="userman">
    <div class="overlay-content edituser">
      <div class="close-container">
        <router-link to="/admin/users"><span>⨉</span></router-link>
      </div>

      <div class="form-container">
        <div class="form-content">
          <div class="section">
            <div class="section-header">Credenciales {{id}}</div>
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
                <div class="input-group">
                  <label for="imageUrl">Link Foto Perfil</label>
                  <input type="text" id="imageUrl" name="imageUrl" v-model="imageUrl">
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
                  <label for="address">Dirección</label>
                  <input type="text" id="address" name="address" v-model="address">
                </div>
                <div class="input-group">
                  <label for="commune">Comuna</label>
                  <input type="text" id="commune" name="commune" v-model="commune">
                </div>
                <div class="input-group">
                  <label for="phone">Número Telefónico</label>
                  <input type="tel" id="phone" name="phone" v-model="phone">
                </div>
              </div>
              <div class="input-group-group">
                <div class="input-group">
                  <label for="emergencyNumber">Número de emergencia</label>
                  <input type="tel" id="emergencyNumber" name="emergencyNumber" v-model="emergencyNumber">
                </div>
                <div class="input-group">
                  <label for="emergencyContact">Nombre contacto de emergencia</label>
                  <input type="text" id="emergencyContact" name="emergencyContact" v-model="emergencyContact">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="input-group">
            <label for="confirmUser">Confirmacion para Borrar Cuenta</label>
            <input type="text" id="confirmUser" v-model="confirmUser" @input="resetConfirm()" placeholder="Ingresar Username">
          </div>
          <a class="delete-account" @click.prevent="deleteAccount()">{{confirmMessage}}</a>
          <a class="save-account" @click.prevent="saveChanges()">Guardar Cambios</a>
        </div>
        </div>
    </div>
  </div>
</template>


<style scoped>
.overlay-content {
  height :80%;
  width: 80%;
  overflow-y: scroll;
  scrollbar-width: none;
}

.form-container {
  overflow-y: scroll;
}
</style>
