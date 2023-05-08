import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "src/constants/routes";

import "./app.scss";
import { Catalog, Header } from "src/features";
import { DefaultLayout } from "src/components";
import { Home } from "src/pages";

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Header toggleModal={toggleModal} />
      <DefaultLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.CATALOG}
            element={
              <Catalog toggleAddModal={toggleModal} showAddItem={showModal} />
            }
          />
        </Routes>
      </DefaultLayout>
    </>
  );
};
