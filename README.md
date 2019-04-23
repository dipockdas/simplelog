# simplelog
Quick and simple demonstration of logging to Splunk HEC from a Node JS app

The demo posts a simple message to the Splunk HEC endpoint.

Step 1: 
Get the node dependencies (splunk logging) by running npm install from the command line within the project folder.

Step 2:
Log into your Splunk instance, navigate to Settings »  Data Inputs » HTTP Event Collector. (http://localhost:8000/en-US/manager/search/http-eventcollector). 
Create a new token and copy the Token Value to the index.js file and save the edits.

Notes: 
Recommended that you select a new index and sourcetype when you set up the token. If the index does not exist create a new one.

Step 3: 
If you are accessing a remote Splunk instance then update the second entry with the connections array with your Splunk instance host and update the config to use config[1].
Run the app ```node index.js```

Step 4: In Splunk navigate to the Search and Reporting app (http://localhost:8000/en-US/app/search/search) and run a simple query against your index e.g. index='whateveryoucalledyourindex'

