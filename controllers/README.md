#An example of how express connects with MySQL
from <https://www.terlici.com/2015/08/13/mysql-node-express.html>

Uses pug to server templates out of views (see express/pug <https://expressjs.com/en/guide/using-template-engines.html>)

**Files**
-app.js - server that connects to db by calling db.js and loads controllers

-db.js - connects to db

-controllers/comments.js - handles routes (express.Router()) and calls queries through methods

-methods/comments.js - handles queries to db through db.js.

**Process**  
1. app.js - loads db.js to establish initial connection and render server.

2. db.js - establishes connection with db.

3. app.js - loads controller (controllers/comments.js) which handles routes using express.Router().

4. controllers/comments.js - handles routing and load methods/comments.js to query db based on route.

5. methods/comments.js - handles querying db by loading in db.js

6. views/comments.pug - template for rendering engine, pug.js

**Tech**
-node/express

-mySQL

-js

-pug
