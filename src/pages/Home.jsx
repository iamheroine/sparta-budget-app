// - 지출을 월별로 보여주면서 동시에 등록해주는 기능을 담당하는 메인페이지
//     - 지출을 저장하는 부분
//     - ‘월’을 선택하는 부분
//     - ‘지출’을 나타내는 부분

import React from "react";
import Form from "../components/Form";
import Months from "../components/Months";
import List from "../components/List";
import styled from "styled-components";

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;
`;

const Home = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <HomeMain>
      <Form />
      <Months
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <List />
    </HomeMain>
  );
};

export default Home;
