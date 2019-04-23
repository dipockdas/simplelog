let SplunkLogger = require("splunk-logging").Logger;
 
let connections = [{
        token: "50280450-a828-4f20-8da5-b8b935fec6e4",
        url: "https://127.0.0.1:8088"
    },
    {
        token: "PUT-YOUR-HEC-TOKEN-HERE",
        url: "https://<CHANGEME>:8088"
    }
];

let config = connections[0];
 
let Logger = new SplunkLogger(config);
 
let payload = {
    // Message can be anything; doesn't have to be an object
    message: {
        link: "https://www.youtube.com/watch?v=Em1p962h8II",
        juice: 100,
        coffee: 250,
        rackoflamb:50
    }
};

console.log("Sending payload", payload);
Logger.send(payload, function(err, resp, body) {
    // If successful, body will be { text: 'Success', code: 0 }
    console.log("Response from Splunk", body);
});