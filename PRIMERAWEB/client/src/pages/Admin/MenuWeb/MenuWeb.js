import React, { useState, useEffect } from "react";
import { getMenuApi } from "../../../api/menu";
import MenuWebList from "../../../component/Admin/MenuWeb/MenuWebList";

export default function MenuWeb() {
  const [menu, setMenu] = useState([]);
  const [reloadMenuWeb, setReloadMenuweb] = useState(false);

  useEffect(() => {
    getMenuApi().then((response) => {
      setMenu(response.menu);
    });
    setReloadMenuweb(false);
  }, [reloadMenuWeb]);

  return (
    <div className="menu-web">
      <h1> Menu Web....</h1>
      <MenuWebList menu={menu} setReloadMenuweb={setReloadMenuweb} />
    </div>
  );
}
