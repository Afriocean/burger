// module.exports = function(sequelize, DataTypes) {
//     var Burger = sequelize.define("Burger", {
//       burger_name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate:{
//               len: [1, 140]
//           }
//         },
//       devoured: {
//        type: DataTypes.BOOLEAN,
//       defaultValue: false
//       }

//     });
//     return Burger;
//   };
var orm = require ("../config/orm");

var burger = {
    create : function (name, callback){
        // var newburger = {name:name, devoured: false};
       orm.addBurger("burger", ["burger_name", "devoured"],
       
       ) 

        // orm.addBurger (newburger, callback);
    },
    selectAll : function (callback){
     orm.getBurger (callback)
    }
}
module.exports = burger