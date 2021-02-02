<!-- Stampare a schermo una decina di dischi musicali (vedi screenshot).
Utilizzare:
Html, Sass, JS, VueJS, PHP

Prima Milestone:
Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina:
al caricamento della pagina ci saranno tutti i dischi. -->

<!-- Gli script PHP vengono eseguiti in relazione al percorso corrente (risultato di getcwd ()), non al percorso del proprio file. L'uso di __DIR__ forza l'inclusione in relazione al proprio percorso. -->
<?php
  require_once(__DIR__ . "/resources/server/db.php");
  require_once(__DIR__ . "/head.php");
  require_once(__DIR__ . "/header.php");
  require_once(__DIR__ . "/main.php");

