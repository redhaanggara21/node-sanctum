// import sequelize 
import { Sequelize } from "sequelize";

// import connection 
import db from "../config/dbconfig.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Sidemenu = db.define('sidemenus', {
  // Define attributes
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.DOUBLE
  },
  published: {
    type: DataTypes.BOOLEAN
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Sidemenu;