var arrows = {
  /**
   *  STATES
   */


  /**
   *  VARIABLES
   */


  /**
   *  HANDLERS
   */
  create: function() {
    console.info('create');

    arrows.$DOM = $('<div>');
    arrows.$DOM.attr('id','arrows');
    // $arrowDOM.attr('class','arrow');
    $('#carousel').append(arrows.$DOM);


    // // création des div flèches
    // arrows.$leftDOM = arrows.createSingleArrow('left');
    // arrows.$rightDOM = arrows.createSingleArrow('right');
  },




  /**
  *  FUNCTIONS
  */
  // createSingleArrow: function(side) {
  //   console.info('createSingleArrow', side);
  //
  //   var $arrowDOM = $('<div>');
  //   $arrowDOM.attr('id','arrow-' + side);
  //   $arrowDOM.attr('class','arrow');
  //   $('#carousel').append($arrowDOM);
  //   return $arrowDOM;
  // },


};
