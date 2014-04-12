App.module("Common.Modal", function(Modal, App, Backbone, Marionette, $, _){
	var ModalTemplate = function(){
		return _.template("<div class='modal-dialog <%= ModalSize %>'> \
							<div class='modal-content'> \
							  <div class='modal-header'> \
							    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button> \
							    <h4 class='modal-title' id='myModalLabel'><%= Title %></h4> \
							  </div> \
							  <div class='modal-body'> \
							    <%= Content %> \
							  </div> \
							  <div class='modal-footer'> \
							    <button type='button' class='btn btn-default js-close'><%= CancelText %></button> \
							    <button type='button' class='btn btn-primary js-save' ><%= ActionText %></button> \
							  </div> \
							</div> \
							</div> ");
	};

	var ModalModel = Backbone.Model.extend({
		defaults: {
			Title: "Title",
			Content: "Content",
			CancelText: "Cancel",
			ActionText: "OK",
			ModalSize: "modal-lg"
		}
	});

	this.ModalView = Marionette.ItemView.extend({
	    template: ModalTemplate(),
	    tagName: 'div',
	    className: 'modal fade',
	    initialize: function(options){
	    	this.model = new ModalModel(options);
	    	this.onAction = options.onAction;
	    },
	    onRender: function() {
	        this.$el.attr('tabindex', '-1').modal();
	    },
	    events: {
	        'click .js-close': 'close',
	        'hidden.bs.modal': 'close',
	        'click .js-save': 'save',
	    },
	    close: function() {
	        if(this.$el.is(':visible')) {
	            this.$el.modal('hide');
	        } else {
	            Marionette.ItemView.prototype.close.apply(this, arguments);
	        }
	    },
	    save: function(){
	    	this.onAction && this.onAction();
	    	this.close();
	    }
	})


});