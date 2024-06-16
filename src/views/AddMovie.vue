<template>
  <div>
    <h2>Přidat nový film</h2>
    <form @submit.prevent="submitMovie">
      <div>
        <label for="title">Název:</label>
        <input v-model="title" id="title" required />
      </div>
      <div>
        <label for="director">Režisér:</label>
        <input v-model="director" id="director" required />
      </div>
      <div>
        <label for="year">Rok vydání:</label>
        <input v-model="year" type="number" id="year" required />
      </div>
      <button type="submit">Přidat</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const title = ref('');
const director = ref('');
const year = ref('');

const addMovie = inject('addMovie');

const submitMovie = () => {
  if (title.value && director.value && year.value) {
    addMovie({
      title: title.value,
      director: director.value,
      year: year.value
    });
    title.value = '';
    director.value = '';
    year.value = '';
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
div {
  margin-bottom: 10px;
}
label {
  margin-right: 10px;
}
</style>