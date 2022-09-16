function sync(){
    const db = require("./models");
    db.sequelize.sync();   
}
sync();