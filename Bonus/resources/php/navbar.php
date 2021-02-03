

  <nav class="container">
    <img src="./public/assets/img/logo.png" alt="">

    <label for="genere">Seleziona il tuo genere:</label>
    <select 
      name="genere" 
      id="genere" 
      aria-placeholder="Genere Musicale"
      v-model="key" 
      @change="getCollection()"
    >
      <option value="All">All</option>
      <option v-for="album in genere" v-bind:value="album" >{{album}}</option>
    </select>
  </nav>
</header>