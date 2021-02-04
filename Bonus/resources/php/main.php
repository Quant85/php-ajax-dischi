

    <main>
      <div class="cds-container container">
        <!-- Disco ad esempio -->
        <div class="cd" v-for="album in filtred">
          <img :src="album.poster" alt="">
          <h3>{{album.title}}</h3>
          <span class="author">{{album.author}}</span>
          <span class="year">{{album.year}}</span>
        </div>
      </div>
    </main>
  </div>

  <!-- /.app_wrap -->

  <script src="./public/assets/js/main.js" charset="utf-8"></script>
</body>

</html>