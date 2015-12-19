noreowfs
=========
A Node-Red node to get the value from a 1-wire device through the owserver API.

Install
-------
Use npm to install norelite in the Node-RED data directory.
```bash
    cd ~/.node-red
    npm install noreowfs
```

Usage
-----
 - Configure the node with the owserver details - host and port
 - Define the path from where to get the value. Either through the inbound msg.topic or in the node

![enter image description here](https://cloud.githubusercontent.com/assets/2181965/11914890/17cdec26-a68e-11e5-88ac-f7002d8c994b.png)