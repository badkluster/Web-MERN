import React, { useState, useEffect } from "react";

import MenuNewsletterList from "../../../component/Admin/MenuNewsletterList";

import { getNewsletterApi } from "../../../api/newsletter";

export default function MenuNewsletter() {
  const [newsletter, setNewsletter] = useState([]);
  const [reloadNewsletter, setReloadNewsletter] = useState(false);

  useEffect(() => {
    getNewsletterApi().then((response) => {
      setNewsletter(response.newsletter);
    });
    setReloadNewsletter(false);
  }, [reloadNewsletter]);

  return (
    <MenuNewsletterList
      newsletter={newsletter}
      setReloadNewsletter={setReloadNewsletter}
    />
  );
}
