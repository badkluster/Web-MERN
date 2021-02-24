import React, { useState } from "react";
import { Switch, List, Avatar, Button } from "antd";
import {} from "@ant-design/icons";
import NoAvatar from "../../../../assets/img/jpg/no-avatar.png";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>
      {viewUsersActives ? (
        <UsersActive userActive={usersActive} />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
      )}
    </div>
  );
}

function UsersActive(props) {
  const { usersActive } = props;

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
            title={`
                ${user.name ? user.name : "..."}
                ${user.lastname ? user.lasname : "..."}             
              `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}

function UsersInactive() {
  return <h3>Lista de Usuarios Inactivos</h3>;
}
