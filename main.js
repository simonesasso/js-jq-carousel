// creare uno slideshow----------------
$(document).ready(function(){

  // cliccando la freccina richiamo la relativa funzione
    $(".next").click(
      nextImg
    );

  // cliccando la freccina richiamo la relativa funzione
    $(".prev").click(
      prevImg
    );


  function nextImg() {
    // salvo ref a img attiva al momento del click
    var imgActive = $('.images img.active');

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');

    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');

    // verifico se questa img era l'ultima
    if(imgActive.hasClass('last')){
     $('.images img.first').addClass('active');
     $('.nav i.first').addClass('active');
    } else {
    // applica classe active alla prox img
    imgActive.next().addClass('active');
    ballActive.next().addClass('active');
    }
  }
  // funzione prevImg
   function prevImg() {

     // salvo ref a img attiva al momento del click
     var imgActive = $('.images img.active');

     // salvo il pallino attivo
     var ballActive = $('.nav i.active');

     // tolgo la classe active all'img selezionata
     imgActive.removeClass('active');

     // tolgo la classe active al pallino selezionato
     ballActive.removeClass('active');

     // verifico se questa img era la prima
     if(imgActive.hasClass('first')){
       $('.images img.last').addClass('active');
       $('.nav i.last').addClass('active');
     } else {
       // applica classe active alla prox img
       imgActive.prev().addClass('active');
       ballActive.prev().addClass('active');
     }
    }
   $(".nav i").click(
     navPallini
   );
   function navPallini() {
     $(this).addClass('active');
     $(this).siblings().removeClass("active");
    if ($(this).hasClass('first')) {
      $('.images img.first').addClass('active');
      $('.images img.first').siblings().removeClass('active');
    }else if ($(this).hasClass('second')) {
      $('.images img.second').addClass('active');
      $('.images img.second').siblings().removeClass('active');
    }else if ($(this).hasClass('third')) {
      $('.images img.third').addClass('active');
      $('.images img.third').siblings().removeClass('active');
    }else if ($(this).hasClass('last')) {
      $('.images img.last').addClass('active');
      $('.images img.last').siblings().removeClass('active');
    }



  }
})
