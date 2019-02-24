sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.newtiles.Znewtilesovp.controller.View4", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.newtiles.Znewtilesovp.view.View4
		 */
		onInit: function () {
   //     var oModel = new sap.ui.model.json.JSONModel();
			// oModel.loadData("model/scmapp.json");
			// sap.ui.getCore().setModel();
		},
		onNavBack: function() {
		window.history.go(-1);
	}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.newtiles.Znewtilesovp.view.View4
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.newtiles.Znewtilesovp.view.View4
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.newtiles.Znewtilesovp.view.View4
		 */
		//	onExit: function() {
		//
		//	}

	});

});