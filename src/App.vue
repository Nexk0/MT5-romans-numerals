<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import ConvertToRoman from "../composables/ConvertToRoman";
import ConvertToArabic from "../composables/ConvertToArabic";

const number = ref({
  arabic: 0,
  roman: "",
})

</script>

<template>
  <div id="app" class="template-page">
    <div class="container">
      <h1>Convertisseur Nombre Arabe en Romain</h1>
      <div class="inputs">
        <input v-model="number.arabic" @input="number.roman = ConvertToRoman(number.arabic)" placeholder="Entrez un nombre arabe" type="number" max="3999" >
        <img src="/arrows-h.svg">
        <input v-model="number.roman" @input="number.arabic = ConvertToArabic(number.roman)" placeholder="Entrez un nombre romain" type="text" >
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
