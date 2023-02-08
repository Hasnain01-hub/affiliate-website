import { Route, Routes } from "react-router-dom";

import AddAdmins from "./Components/Admins/AddAdmins";
import AddDeals from "./Components/Admins/AddDeals";
import ViewAdmins from "./Components/Admins/ViewAdmins";
import ViewDeals from "./Components/Admins/ViewDeals";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddStores from "./Components/Stores/AddStores";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-admins" element={<AddAdmins />} />
      <Route path="/view-admins" element={<ViewAdmins />} />
      <Route path="/add-deals" element={<AddDeals />} />
      <Route path="/view-deals" element={<ViewDeals />} />
      <Route path="/Add-Store" element={<AddStores />} />
    </Routes>
  );
}

export default App;
