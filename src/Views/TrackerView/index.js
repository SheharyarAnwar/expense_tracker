import React from "react";
import Balance from "../../Components/Balance";
import Tracker from "../../Components/BalanceTracker/index";
import ViewSwitcherContextWrapper from "../../Context/viewSwitcher";
import Container from "../../Components/Container/index";
//import Main from "../../Layouts/Main/index";
export default function index(props) {
  const Layout = props.layout;
  return (
    <>
      <Layout>
        <Balance />
        <Tracker income={350} expense={350} />
        <ViewSwitcherContextWrapper>
          <Container />
        </ViewSwitcherContextWrapper>
      </Layout>
    </>
  );
}
