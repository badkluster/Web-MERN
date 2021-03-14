import React from "react";
import { Button, List, Modal, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getAccessTokenApi } from "../../../api/auth";
import { deleteNewsletterApi } from "../../../api/newsletter";

import "./MenuNewsletterList.scss";

const { confirm } = Modal;

export default function MenuNewsletterList(props) {
  const { newsletter, setReloadNewsletter } = props;

  const deleteNewslatter = (newsletter) => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando post",
      content: `¿Estas segurod de eliminar el post ${newsletter.email}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteNewsletterApi(accessToken, newsletter._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadNewsletter(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor.",
            });
          });
      },
    });
  };

  return (
    <div>
      <List
        dataSource={newsletter}
        renderItem={(newsletter) => (
          <Newsletter
            newsletter={newsletter}
            deleteNewslatter={deleteNewslatter}
          />
        )}
      ></List>
    </div>
  );
}

function Newsletter(props) {
  const { newsletter, deleteNewslatter } = props;

  return (
    <List.Item
      actions={[
        <Button type="danger" onClick={() => deleteNewslatter(newsletter)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={newsletter.email} />
    </List.Item>
  );
}
