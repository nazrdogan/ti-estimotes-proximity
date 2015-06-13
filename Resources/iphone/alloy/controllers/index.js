function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function updateInformation(event) {
        if ("mint" === event.identifier) {
            $.mintProximity.text = event.proximity;
            $.mintRSSI.text = event.rssi;
            "near" === event.proximity && ($.adspace.image = "http://image.shutterstock.com/display_pic_with_logo/430459/105011834/stock-photo-mojito-lime-drink-cocktail-105011834.jpg");
        } else if ("blueberry" === event.identifier) {
            $.blueberryProximity.text = event.proximity;
            $.blueberryRSSI.text = event.rssi;
            "near" === event.proximity && ($.adspace.image = "http://image.shutterstock.com/display_pic_with_logo/965987/108450557/stock-photo-freshly-picked-blueberries-108450557.jpg");
        } else if ("marshmellow" === event.identifier) {
            $.marshmellowProximity.text = event.proximity;
            $.marshmellowRSSI.text = event.rssi;
            "near" === event.proximity && ($.adspace.image = "http://image.shutterstock.com/display_pic_with_logo/963767/142706050/stock-photo-marshmallows-142706050.jpg");
        }
    }
    function toggleRanging() {
        if ($.rangingSwitch.value) {
            TiBeacons.startRangingForBeacons({
                uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
                identifier: "mint",
                major: 19998,
                minor: 36832
            });
            TiBeacons.startRangingForBeacons({
                uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
                identifier: "blueberry",
                major: 30723,
                minor: 8295
            });
            TiBeacons.startRangingForBeacons({
                uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
                identifier: "marshmellow",
                major: 47855,
                minor: 64393
            });
        } else TiBeacons.stopRangingForBeacons();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: "30",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        height: "35",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Ranging",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.rangingSwitch = Ti.UI.createSwitch({
        value: false,
        id: "rangingSwitch"
    });
    $.__views.__alloyId2.add($.__views.rangingSwitch);
    toggleRanging ? $.__views.rangingSwitch.addEventListener("change", toggleRanging) : __defers["$.__views.rangingSwitch!change!toggleRanging"] = true;
    $.__views.blueberry = Ti.UI.createView({
        backgroundColor: "#404093",
        height: 100,
        width: 250,
        top: 10,
        id: "blueberry"
    });
    $.__views.__alloyId0.add($.__views.blueberry);
    $.__views.deviceTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 10,
        left: 5,
        text: "Blueberry Pie",
        id: "deviceTitle"
    });
    $.__views.blueberry.add($.__views.deviceTitle);
    $.__views.blueberryProximity = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        left: 5,
        text: "Proximity",
        id: "blueberryProximity"
    });
    $.__views.blueberry.add($.__views.blueberryProximity);
    $.__views.blueberryRSSI = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        right: 5,
        text: "RSSI",
        id: "blueberryRSSI"
    });
    $.__views.blueberry.add($.__views.blueberryRSSI);
    $.__views.marshmellow = Ti.UI.createView({
        backgroundColor: "#94d8f8",
        height: 100,
        width: 250,
        top: 10,
        id: "marshmellow"
    });
    $.__views.__alloyId0.add($.__views.marshmellow);
    $.__views.deviceTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 10,
        left: 5,
        text: "Icy Marshmellow",
        id: "deviceTitle"
    });
    $.__views.marshmellow.add($.__views.deviceTitle);
    $.__views.marshmellowProximity = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        left: 5,
        text: "Proximity",
        id: "marshmellowProximity"
    });
    $.__views.marshmellow.add($.__views.marshmellowProximity);
    $.__views.marshmellowRSSI = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        right: 5,
        text: "RSSI",
        id: "marshmellowRSSI"
    });
    $.__views.marshmellow.add($.__views.marshmellowRSSI);
    $.__views.mint = Ti.UI.createView({
        backgroundColor: "#a0cbad",
        height: 100,
        width: 250,
        top: 10,
        id: "mint"
    });
    $.__views.__alloyId0.add($.__views.mint);
    $.__views.deviceTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 10,
        left: 5,
        text: "Mint Cocktail",
        id: "deviceTitle"
    });
    $.__views.mint.add($.__views.deviceTitle);
    $.__views.mintProximity = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        left: 5,
        text: "Proximity",
        id: "mintProximity"
    });
    $.__views.mint.add($.__views.mintProximity);
    $.__views.mintRSSI = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30
        },
        color: "#000",
        top: 30,
        right: 5,
        text: "RSSI",
        id: "mintRSSI"
    });
    $.__views.mint.add($.__views.mintRSSI);
    $.__views.adspace = Ti.UI.createImageView({
        top: 10,
        width: 141,
        height: 100,
        backgroundColor: "#fff",
        id: "adspace"
    });
    $.__views.__alloyId0.add($.__views.adspace);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var TiBeacons = require("org.beuckman.tibeacons");
    Ti.API.info("module is => " + TiBeacons);
    TiBeacons.addEventListener("beaconProximity", updateInformation);
    $.win.open();
    __defers["$.__views.rangingSwitch!change!toggleRanging"] && $.__views.rangingSwitch.addEventListener("change", toggleRanging);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;