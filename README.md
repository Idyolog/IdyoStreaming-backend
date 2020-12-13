# IdeoStreaming-backend
### What is IdeoStreaming-backend
IdeoStreaming-backend is a backend used by the IdeoStreaming platform that allows you to stream contents from several sources to several outputs.  
IdeoStreaming platform is composed by a backend and a yocto layer that can be used to compose your Embedded Linux distribution, ready to stream contents over the internet or maybe just over a file.
### What can I do with IdeoStreaming-backend?
You can configure the inputs and the outputs of your stream by CRUD endpoits and you can start and stop the stream by streaming endpoints.
### Technologies and Dependencies
IdeoStreaming-backend uses ffmpeg to stream, so it has to be installed on your system.
### System Configuration
Settings folder contains the configuration. You can configure multiple enviroments simply creating a new js file and requiring root.js file, which contains the dafault settings.  
Here is an example of development enviroment, which redefines some properties
```javascript
let  settings = require('./root')
settings.db.dbName = "C:/test/IdeoStreaming.db"
settings.ffmpeg.start.input.webcam.command = '-y -f vfwcap -r 25 -i %%input%%'
settings.ffmpeg.stop.command = 'Taskkill /IM ffmpeg.exe /F'
module.exports = settings
```
Some properties are used to compose ffmpeg commands, in order to run streams. Commands are subdivided in input part and output part and they are specified for each input and output type, so you can flexibly compose your ffmpeg command.

### Output Configuration
You can configure outputs by CRUD endpoints, specifying the output string, the output type and if it is active or not. Actually are supported file and twitch as output type.
### Input Configuration
You can configure inputs by CRUD endpoints, specifying the input string, the input type and if it is active or not. Actually webcam is supported as input type.  

Active inputs and outputs are used to compose ffmpeg commands, replacing the placeholder %%input%% or %%output%% in command strings. 
### Database
An Sqlite database is used to store inputs, outputs and their types. Under sys folder is contained a script that initialize the db.

### Start the server
You can start the server with command 
```
node main.js development
```
where "development" can be replaced with the name of your enviroment.

### Endpoints
In order to correctly call endpoints, a jwt is required. The jwt secret is configured in settings.jwt.secret. Every request must have an Authorization param in header that contains the jwt, otherwise an 401 error will be returned.
##### CRUD Endpoints
```
GET /sysconfig/input
Return [{"input": "0", "inputType": 1, "active": 1 }] 
 
POST /sysconfig/input
POST Params {"input":"0", "active":true, "inputType":1} 
Return  code: 201 or code: 500

PUT /sysconfig/input
PUT Params {"input":"0", "active":true, "inputType":1} 
Return  code: 201 or code: 500

DELETE /sysconfig/input
DELETE Params {"input":"0"} 
Return  code: 201 or code: 500

GET /sysconfig/output
Return [{"output": "testOut.mpeg", "outputType": 1, "active": 1 }] 
 
POST /sysconfig/output
POST Params {"output":"testOut.mpeg", "active":true, "outputType":1} 
Return  code: 201 or code: 500

PUT /sysconfig/output
PUT Params {"output":"testOut.mpeg", "active":true, "outputType":1} 
Return  code: 201 or code: 500

DELETE /sysconfig/output
DELETE Params {"output":"testOut.mpeg"} 
Return  code: 201 or code: 500
```
##### Streming Endpoints
```
POST /streaming/start
Description: streaming start
Return  code: 201 or code: 500

POST /streaming/stop
Description: streaming stop
Return  code: 201 or code: 500  
```
### Disclaimer
The project works fine for our requirements, but it is a one day project so it can be optimized a lot and new features can be added.