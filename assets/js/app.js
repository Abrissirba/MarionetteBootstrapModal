var App = new Marionette.Application();

var onSave = function(){
  console.log("The modal was saved");
}


App.addInitializer(function(){
  App.Common.Modal.start();
  /*var region = new App.Common.Modal.ModalRegion({ModalID: "ModalRegion"});
  App.addRegions({
    ModalRegion: region
  });*/

  $("#btnModal").on("click", function(){

    var view =  new App.Common.Modal.ModalView({onAction: onSave, ActionText: "Save", Content: "<button type='button' class='btn btn-default'>Another Close Button</button>"});
    view.render();
    //region.show(view);
  });
  
  //view.render();
  //App.ModalRegion.show(view);
  
});



