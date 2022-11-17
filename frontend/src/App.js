import "./App.css";
import Form from "./components/Form";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Table from "./components/Table/Table";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<Form />} />
        <Route path="/users" exact={true} element={<Table />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
