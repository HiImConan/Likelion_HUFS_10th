import { Main, MediaDiv } from "./styledComponent";

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from "./Footer";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route path="/" element={<ShowPostList />}></Route>
              <Route path="/write" element={<WritePost></WritePost>}></Route>
              <Route
                path="/post/:postId"
                element={<ShowPost></ShowPost>}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
