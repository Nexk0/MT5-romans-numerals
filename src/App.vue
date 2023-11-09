<script setup lang="ts">
import { ref } from "vue";

const number = ref({
  arabic: 0,
  roman: "",
})

const handleInput = async (type: 'AtoR' | 'RtoA') => {
  switch(type) {
    case "AtoR": {
      fetch(`${import.meta.env.VITE_API_ENDPOINT}/convert-to-roman/${number.value.arabic}`)
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log(data)
            number.value.roman = data
          })
      break;
    }

    case "RtoA": {
      fetch(`${import.meta.env.VITE_API_ENDPOINT}/convert-to-arabic/${number.value.roman}`)
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log(data)
            number.value.arabic = data
          })
      break;
    }
  }
}

</script>

<template>
  <div id="app" class="template-page">
    <div class="container">
      <h1>Convertisseur Nombre Arabe en Romain</h1>
      <div class="inputs">
        <input id="arabic-number" v-model="number.arabic" @input="handleInput('AtoR')" placeholder="Entrez un nombre arabe" type="number" max="3999" >
        <img src="/arrows-h.svg">
        <input id="roman-number" v-model="number.roman" @input="handleInput('RtoA')" placeholder="Entrez un nombre romain" type="text" >
      </div>
    </div>
  </div>
</template>

<style scoped>
.template-page{
  display: flex;
}

.container{
  margin: auto;
  text-align: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}

.container .inputs {
  display: flex;
  gap: 1rem;
}

.container input{
  background-color: black;
  outline: none;
  border: none;
  border-radius: 25px;
  height: 45px;
  width: 200px;
  color: white;
  text-align: center;
}
</style>
