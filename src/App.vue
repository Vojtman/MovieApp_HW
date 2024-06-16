<template>
  <div id="app">
    <nav>
      <router-link to="/">Domů</router-link>
      <router-link to="/movies">Seznam filmů</router-link>
      <router-link to="/add">Přidat film</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      movies: []
    };
  },
  provide() {
    return {
      movies: this.movies,
      addMovie: this.addMovie,
      deleteMovie: this.deleteMovie
    };
  },
  methods: {
    addMovie(movie) {
      this.movies.push(movie);
    },
    deleteMovie(index) {
      this.movies.splice(index, 1);
    }
  }
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  background: #eee;
  padding: 10px;
}
nav a {
  text-decoration: none;
  color: #333;
}
</style>