import React, { useEffect } from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
// import { getAccessTokenApi } from "../../../api/auth";

import "./MenuNewsletterList.scss";

export default function MenuNewsletterList(props) {
  const { newsletter, setReloadNewsletter } = props;

  useEffect(() => {
    const listItemsArray = [];
    newsletter.forEach((item) => {
      listItemsArray.push({
        content: (
          <ul>
            {" "}
            <li>{item.email} </li>
          </ul>
        ),
      });
    });
    setReloadNewsletter(listItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsletter]);

  return (
    <div className="newsletter-list">
      <h1>Lista de Newsletter</h1>

      {newsletter.map((item) => (
        <ul>
          <li>
            {item.email}
            <Button
              type="danger"
              onClick={() => console.log("eliminando news")}
              className="btn-news"
            >
              <DeleteOutlined />
            </Button>{" "}
          </li>
        </ul>
      ))}
    </div>
  );
}
