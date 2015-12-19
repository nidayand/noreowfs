module.exports = function(RED) {
    function OwfsConfig(n) {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;
    }
    RED.nodes.registerType("nro-config",OwfsConfig);
}

