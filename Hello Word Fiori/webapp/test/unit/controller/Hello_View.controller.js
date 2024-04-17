/*global QUnit*/

sap.ui.define([
	"helloword/controller/Hello_View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Hello_View Controller");

	QUnit.test("I should test the Hello_View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
