
function clickItem() {
   // Marcar / Desmarcar ítem
   $('ul').on('click', 'li', function() {
      $(this).toggleClass('done');  
   });
}

function removeItem() {
   // Deleta ítem da lista
   $('ul').on('click', 'span', function(event) {
      event.stopPropagation();
      $(this).parent().fadeOut(300, function() {
         $(this).remove();
      });
   });
}


function addItem() {
   $("input[type='text'").keypress(function(event) {
      // Adicona novo ítem à lista
      if(event.which === 13) {
         // Captura texto inserido
         var newItem = $(this).val();
         $(this).val('');
         // Cria novo ítem na lista com texto capturado
         $('ul').append('<li><span><i class="fa fa-trash-o"></i></span>'+ newItem +'</li>');
      }
   });   
}



function init() {
   clickItem();
   addItem();
   removeItem();   
}

init();