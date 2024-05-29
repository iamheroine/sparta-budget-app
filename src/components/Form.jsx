// 지출을 저장하는 부분

// 월별 지출 항목 등록 구현 (Home - Create)

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const SaveButton = styled.button`
  background-color: #999999;
  margin: 2px;
`

const Form = ({ setExpenses }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      id: uuidv4(),
      date,
      item,
      amount: Number(amount),
      description,
    };

    setExpenses((prev) => [...prev, expenseData]);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="date">날짜</label>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item">항목</label>
          <input
            type="text"
            placeholder="지출 항목"
            id="item"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            placeholder="지출 금액"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">내용</label>
          <input
            type="text"
            placeholder="지출 내용"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <SaveButton type="submit">저장</SaveButton>
      </form>
    </section>
  );
};

export default Form;
