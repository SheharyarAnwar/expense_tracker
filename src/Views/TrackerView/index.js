import React from "react";
import Balance from "../../Components/Balance";
import Tracker from "../../Components/BalanceTracker/index";
import ViewSwitcherContextWrapper from "../../Context/viewSwitcher";
import Container from "../../Components/Container/index";
//Redux
import { useSelector } from "react-redux";
//import Main from "../../Layouts/Main/index";
export default function Index(props) {
  const { income, balance, expense } = useSelector(
    (state) => state.expenseReducer
  );
  const Layout = props.layout;
  return (
    <>
      <Layout>
        <Balance balance={balance} />
        <Tracker income={income} expense={expense} />
        <ViewSwitcherContextWrapper>
          <Container />
        </ViewSwitcherContextWrapper>
      </Layout>
    </>
  );
}
