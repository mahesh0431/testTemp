sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.newtiles.Znewtilesovp.controller.View1", {
		onInit: function () {

		},

		onScm: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view2");

		},
		
		onHuman : function (){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View3");
		},
		
		onSap : function (){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View4");	
		},
		onHelp : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View5");
		}

	});
});