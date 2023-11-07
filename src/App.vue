<script setup>
import {ref} from "vue";

const arabicNumber = ref("");
const romanNumber = ref("");

const convertToRoman = () => {
  let arabic = parseInt(arabicNumber.value);
  if (isNaN(arabic) || arabic < 1 || arabic > 3999) {
    romanNumber.value = "Veuillez entrer un nombre valide (1-3999).";
    return;
  }

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = "";
  for (const key in romanNumerals) {
    while (arabic >= romanNumerals[key]) {
      result += key;
      arabic -= romanNumerals[key];
    }
  }

  romanNumber.value = result;
};
</script>

<template>
  <div id="app" class="template-page">
    <div class="container">
      <h1>Convertisseur Nombre Arabe en Romain</h1>
      <input v-model="arabicNumber" @input="convertToRoman" placeholder="Entrez un nombre arabe" type="number" max="3999" >
      <p>Résultat en chiffres romains : {{ romanNumber }}</p>
    </div>
  </div>
</template>

<style scoped>
.template-page{
  background-color: #181818;
}

.container{
  width: 50%;
  position: absolute;
  text-align: center;
  left: calc(50% - 25%);
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
