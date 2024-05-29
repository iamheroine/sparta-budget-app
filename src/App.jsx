// - 지출을 월별로 보여주면서 동시에 등록해주는 기능을 담당하는 메인페이지
//     - 지출을 저장하는 부분
//     - ‘월’을 선택하는 부분
//     - ‘지출’을 나타내는 부분

import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
