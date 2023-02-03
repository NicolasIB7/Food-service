//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { dietsHandler } = require('./src/handlers/dietHandler.js');
require('dotenv').config();
const {PORT}=process.env; //le indico que me traiga todo lo de ese archivo



// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT,async () => {  // en vez de poner el puerto, le indico que se fije el .env y vea a qué puero tiene que escuchar
    console.log('%s listening at', process.env.PORT);
    await dietsHandler();
    
     // eslint-disable-line no-console

  });
});
