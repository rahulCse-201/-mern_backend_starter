// this file basically for connecting the things or starting like db connection , starting server etc

import app from './app.js';






const PORT= 5000;




app.listen(PORT, ()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})