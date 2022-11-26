# benchmark-backend
Backend for benchmark APPs

## Running this project
> ```$ npm run dev```

## Default directories
### For download endpoint
The ```/files/download/:name``` endpoint searches for files at ```/public/files``` directory. The path variable **name**** is the name of the file (e.g. image-file.png).

### For upload endpoint
The ```/files/upload``` endpoint saves all files in the ``` /public/uploads```  directory. The current date and time are added to the file name (e.g. ```image-file_20221031_001606.png```).