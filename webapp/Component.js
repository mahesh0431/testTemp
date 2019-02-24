sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/newtiles/Znewtilesovp/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.newtiles.Znewtilesovp.Component", {

		metadata: {
			manifest: "json",
			rootView: {
				"viewName": "com.newtiles.Znewtilesovp.view2",
				"type": "XML",
				"async": true
			},
			dependencies: {
				libs: [
					"sap.m",
					"sap.ui.layout"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"view2.view.xml",
						"view2.controller.js"
					]
				}
			}

		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});