import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Avatar,
  Button,
  Modal as ModalAndt,
  notification,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  StopOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";
import { getAccessTokenApi } from "../../../../api/auth";

import "./MenuWebList.scss";

const { confirm } = ModalAndt;

export default function MenuWebList(props) {
  const { menu, setReloadMenuWeb } = props;
  const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  console.log(listItems);

  useEffect(() => {
    const listItemsArray = [];
    menu.forEach((item) => {
      listItemsArray.push({
        content: (
          <div>
            <p>{item.title}</p>
          </div>
        ),
      });
    });
    setListItems(listItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  const onSort = (sortedList, dropEvent) => {
    console.log(sortedList);
    // const accesToken = getAccessTokenApi();

    // sortedList.forEach(item => {
    //     const { _id } = item.content.props.item;
    //     const order = item.rank;
    //     updateMenuApi(accesToken, _id, { order });
    //   });
  };

  //   const addMenuWebModal = () => {
  //     setIsVisibleModal(true);
  //     setModalTitle("Creando nuevo menú");
  //     setModalContent(
  //       <AddMenuWebForm
  //         setIsVisibleModal={setIsVisibleModal}
  //         setReloadMenuWeb={setReloadMenuWeb}
  //       />
  //     );
  //   };

  // const deleteMenu = menu => {
  //     const accesToken = getAccessTokenApi();

  //     confirm({
  //       title: "Eliminando menu",
  //       content: `¿Estas seguro de que quieres eliminar el menu ${menu.title}?`,
  //       okText: "Eliminar",
  //       okType: "danger",
  //       cancelText: "Cancelar",
  //       onOk() {
  //         deleteMenuApi(accesToken, menu._id)
  //           .then(response => {
  //             notification["success"]({
  //               message: response
  //             });
  //             setReloadMenuWeb(true);
  //           })
  //           .catch(() => {
  //             notification["error"]({
  //               message: "Error del servidor, intentelo más tarde."
  //             });
  //           });
  //       }
  //     });
  //   };

  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary">Menu menu</Button>
      </div>

      <div className="menu-web-list__items">
        <DragSortableList />
      </div>
    </div>
  );
}
