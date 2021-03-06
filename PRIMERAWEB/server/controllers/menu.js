const Menu = require("../models/menu");

function addMenu(req, res) {
  const { title, url, order, active } = req.body;
  const menu = new Menu();

  menu.title = title;
  menu.url = url;
  menu.order = order;
  menu.active = active;

  menu.save((err, createdMenu) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!createdMenu) {
        res.status(404).send({ message: "Error al crear el menu." });
      } else {
        res.status(200).send({ message: "Menu craedo correctamente." });
      }
    }
  });
}

function getMenus(req, res) {
  Menu.find()
    .sort({ order: "asc" })
    .exec((err, menuStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!menuStored) {
          res
            .status(404)
            .send({ message: "No se ha encontrado elemento en el menu." });
        } else {
          res.status(200).send({ menu: menuStored });
        }
      }
    });
}

module.exports = {
  addMenu,
  getMenus,
};
