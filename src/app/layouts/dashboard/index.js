import React, { Fragment } from "react";

import Wrapper from "../../custom-components/wrapper";
import Sidebar from "../../custom-components/side-bar";
import Main from "../../custom-components/main";
import Navbar from "../../custom-components/nav-bar";
import Content from "../../custom-components/content";
import Footer from "../../custom-components/footer";
import Settings from "../../custom-components/settings";

const Dashboard = ({ children }) => (
  <Fragment>
    <Wrapper>
      <Sidebar />
      <Main>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Main>
    </Wrapper>
    <Settings />
  </Fragment>
);

export default Dashboard;