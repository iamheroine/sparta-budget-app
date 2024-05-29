// ‘월’을 선택하는 부분

import React, { useState } from "react";
import styled from "styled-components";

const MonthButton = styled.button`
  background-color: #999999;
  margin: 2px;
`;

const Months = ({ selectedMonth, setSelectedMonth }) => {
  const eachMonth = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const handleClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <section>
      <div>
      {eachMonth.map((month, index) => (
          <MonthButton
            key={index}
            value={month}
            selected={selectedMonth === month}
            onClick={() => handleClick(month)}
          >
            {month}
          </MonthButton>
        ))}
      </div>
    </section>
  );
};

export default Months;
