
Credit : tutorial video by Jay Montojo

This program relies on two seperate instances running at the same time, along with a postgresql database.

Important note: 
 
  Both instances require a .env file to function.
  

  When setting up the client, you will also need to include your postgresql setup information such as:
    ```DB_USER
    DB_PASSWORD
    DB_NAME
    DB_HOST
    DB_PORT```
    as well as 
    ```DATABASE_URL_LOCAL```
    if you are setting it up locally.
    
  After which, you can use ```npm run client```.
    
  
  If setting up a server, the server environment must be set as ``` NODE_ENV=development ``` or ```NODE_ENV=production```.  
  
  After which, you can use ```npm run build```.  Afterwhich you can run ```npm run start``` to initialize the server instance.
  
  Warning: Axios implementation is very messy. Please watch out for connection errors.





