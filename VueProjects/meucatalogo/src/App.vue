<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo</h1>
    </header>
    <main>
      <button @click="toggleCatalog">Alternar Catálogo</button>
      <CatalogoDeFilmes v-if="mostrarFilmes" />
      <CatalogoDeLivros v-if="mostrarLivros" />
    </main>
  </div>
</template>

<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "@/components/CatalogoDeLivros.vue";

export default {
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivros,
  },
  data() {
    return {
      mostrarFilmes: true, // Começa mostrando filmes
      mostrarLivros: false,
    };
  },
  methods: {
    toggleCatalog() {
      this.mostrarFilmes = !this.mostrarFilmes;
      this.mostrarLivros = !this.mostrarLivros;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
</style>