A simple modal for marionette that use Bootstrap. Probably best for simple confim boxes at the moment.

How to use:
options = {onAction: onSave, ActionText: "Save", Content: "<button type='button' class='btn btn-default'>Another Close Button</button>"};
var view =  new App.Common.Modal.ModalView(options);
view.render();


Options 
Title: The title of the modal,
Content: The content of the modal,
CancelText: The text of the Cancel button,
ActionText: The text of the Action button, e.g. "Delete" or "Save",
ModalSize: The size of the modal, should be either "modal-lg" or "modal-sm". Defaults to "modal-lg"