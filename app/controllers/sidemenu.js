// Import model sidemenu
import Sidemenu from "../models/sidemenu.js";
 
// Get semua sidemenu
export const getSidemenus = async (req, res) => {
  try {
      const sidemenu = await Sidemenu.findAll();
      res.send(sidemenu);
  } catch (err) {
      console.log(err);
  }
}

// Get sidemenu berdasarkan id
export const getSidemenusById = async (req, res) => {
  try {
      const sidemenu = await Sidemenu.findAll({
          where: {
              id: req.params.id
          }
      });
      res.send(sidemenu[0]);
  } catch (err) {
      console.log(err);
  }
}

// Create sidemenu baru
export const createSidemenus = async (req, res) => {
  try {
      await Sidemenu.create(req.body);
      res.json({
          "message": "sidemenu Created"
      });
  } catch (err) {
      console.log(err);
  }
}

// Update sidemenu berdasarkan id
export const updateSidemenus = async (req, res) => {
  try {
      await Sidemenu.update(req.body, {
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "sidemenu Updated"
      });
  } catch (err) {
      console.log(err);
  }
}

// Delete sidemenu berdasarkan id
export const deleteSidemenus = async (req, res) => {
  try {
      await Sidemenu.destroy({
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "sidemenu Deleted"
      });
  } catch (err) {
      console.log(err);
  }
}