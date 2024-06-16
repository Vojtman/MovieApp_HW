<template>
  <div>
    <h2>Seznam filmů</h2>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        {{ movie.title }} ({{ movie.year }}) - {{ movie.director }}
        <button @click="deleteMovie(index)">Smazat</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const movies = inject('movies');
const deleteMovie = inject('deleteMovie');
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
button {
  margin-left: 10px;
}
</style>