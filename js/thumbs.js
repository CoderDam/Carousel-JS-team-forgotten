var thumbs = {

  init: function() {
  //Je récupère la div #carousel
    thumbs.$carousel = $('#carousel');

	//Je crée autant de div que j'ai d'images dans data
    for (var index in data) {
      thumbs.$blocks[index] = $('<div>');
  //Je leur affecte un background-image
      thumbs.$blocks.css({backgroundImage : data[index]});
    }

	//J'attribue une class CSS à mes blocks pour les positionner et resizer
    thumbs.$blocks.addClass('thumbs');

  //Je place mes div dans le carousel
    thumbs.$carousel.append(thumbs.$blocks);

	//Je pose un écouteur dessus pour appeler la fonction qui entouera le thumb en violet
    thumbs.$blocks.on('click', thumbs.borderise);
  },

  borderise: function(){
    this.addClass('thumbs--active');
		//J'appelle la fonction qui affiche la grande image en fonction de l'argument cliqué
    app.init(this);
  },

};
