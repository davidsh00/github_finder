import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchUsersPage from "./pages/SearchUsersPage";
import SavedUsersPage from "./pages/SavedUsersPage";
import UserPage from "./pages/UserPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/users" element={<SearchUsersPage />} />
          <Route path="/saved" element={<SavedUsersPage />} />
          <Route path="/user/:uId" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
