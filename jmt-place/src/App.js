import { Routes, Route } from "react-router-dom";
import ShowMenuList from "./models/ShowMenuList";
import NotFound from "./NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:categoryID" element={<ShowMenuList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
