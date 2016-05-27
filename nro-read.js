module.exports = function (RED) {
    "use strict";

    var owfs = require('owfs');
    var common = require("./lib/common");

    /*******************************************
    Source node
    *******************************************/
    function OwfsRead(n) {
        RED.nodes.createNode(this, n);
        this.configNode = RED.nodes.getNode(n.config);
        this.host = this.configNode.host;
        this.port = this.configNode.port;
        this.path = n.path;
        var self = this;

        //Check if a path is specified
        self.pathspecified = (self.path.trim().length > 0);

        //Setup connection
        self.client = owfs.Client;
        self.con = new self.client(self.host, self.port);

        //On connection read
        self.on("input", function (msg) {
            common.setStatus(self, 1, "Requesting value");

            self.con.read((self.pathspecified ? self.path : msg.topic), function (err, result) {
                if (!err) {
                    msg.payload = result.replace(/\0/g, '');
                    self.send(msg);
                    common.clearStatus(self);
                } else {
                    self.warn("Error: " + err);
                    common.setStatus(self, -1, "Error!");
                    setTimeout(function () {
                        common.clearStatus(self);
                    }, 2000);
                }
            })
        });
    }
    RED.nodes.registerType("nro-read out", OwfsRead);
}
