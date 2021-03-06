define(function (require, exports, module) {
    // Custom plugins/buttons
    var plugin = require("./plugins/plugin.js");
    var action = require("./plugins/action.js");

    // register new plugin below. Pass Plugin Name, Plugin Label and Action item as parameters and put action item in action.js using
    plugin.generatePlugin("ouphello", "Hello", action.actionOUPHELLO);
    plugin.generatePlugin("H4", "H4", action.actionH4);
    plugin.generatePlugin("DIV", "DIV", action.actionDIV);

    if (CKEDITOR.config.extraPlugins.length > 0) {
        CKEDITOR.config.extraPlugins += ",";
    }
    CKEDITOR.config.extraPlugins += "smiley";

    require("./fields/oup-ckeditor-field.js");
});