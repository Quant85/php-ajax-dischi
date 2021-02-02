

    <main>
      <div class="cds-container container">
        <?php 
          foreach ($db['response'] as $key => $album) {?>
            <!-- Disco ad esempio -->
            <div class="cd">
              <img src="<?php echo $album['poster'] ?>" alt="poster">
              <h3><?php echo $album['title'] ?></h3>
              <span class="author"><?php echo $album['author'] ?></span>
              <span class="year"><?php echo $album['year'] ?></span>
            </div>
        <?php } ?>
      </div>
        
    </main>

  </body>
</html>