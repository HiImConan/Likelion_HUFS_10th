import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./Context";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import CategoryPage from "./components/pages/categoryPage";
import Mypage from "./components/pages/mypage";
import NotFound from "./components/pages/404";

const GlobalStyles = createGlobalStyle`
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

const App = () => {
  return (
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/:categoryID" element={<CategoryPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
