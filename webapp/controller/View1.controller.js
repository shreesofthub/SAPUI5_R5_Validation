sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("r5validation.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                var data = {
                    "Products":
                }
            },
            onSubmit: function () {
                var oEid = this.byId("idEidI");
                if (!oEid.getValue()) {
                    oEid.setValueState("Error");
                    oEid.setValueStateText("Employee Id is Mandatory");
                } else {
                    oEid.setValueState("None");
                }
            },
            onAccept: function () {
                var eId = this.byId("idEidI1");
                if (eId.getValue()) {
                    eId.setValueState("None");
                    var num = /^[0-9]+$/;
                    if (!eId.getValue().match(num) || eId.getValue().length !== 8) {
                        eId.setValueState("Error");
                        eId.setValueStateText("Employee Should be only (0-9) digits of length 8");
                    }
                } else {
                    eId.setValueState("Error");
                    eId.setValueStateText("Employee ID Required");
                }
            },
            onOk: function () {
                var empIdDesg = this.byId("idEidI2");
                var inputValue = empIdDesg.getValue();
                if (!inputValue) {
                    empIdDesg.setValueState("Error");
                    empIdDesg.setValueStateText("Employee Id with Designation Required");
                } else {
                    empIdDesg.setValueState("None");
                    var aplhaNumeric = /^[0-9a-zA-Z]+$/;
                    if (!inputValue.match(aplhaNumeric) || inputValue.length > 15) {
                        empIdDesg.setValueState("Error");
                        empIdDesg.setValueStateText("Employee should be only (0-9 a-z A-Z) and lenth should not morethan 15");
                    }
                }
            }
        });
    });
