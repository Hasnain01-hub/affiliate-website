import { Route, Routes } from "react-router-dom";

import AddAdmins from "./Components/Admins/AddAdmins";
import AddDeals from "./Components/Admins/AddDeals";
import ViewAdmins from "./Components/Admins/ViewAdmins";
import ViewDeals from "./Components/Admins/ViewDeals";
import AddAffiliateId from "./Components/Affiliate/AddAffiliateId";
import AttachAffiliate from "./Components/Affiliate/AttachAffiliate";
import AddBanners from "./Components/Banners/AddBanners";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddProduct from "./Components/Products/AddProduct";
import AddProductCategory from "./Components/Products/AddProductCategory";
import ViewCategoryProducts from "./Components/Products/ViewCategoryProducts";
import ViewProducts from "./Components/Products/ViewProducts";
import AddStores from "./Components/Stores/AddStores";
import ShowSingleUser from "./Components/Users/ShowSingleUser";
import ShowUsers from "./Components/Users/ShowUsers";

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
      <Route path="/Add-Affiliate-ID" element={<AddAffiliateId />} />
      <Route path="/Attach-Affiliate" element={<AttachAffiliate />} />
      <Route path="/Add-Products/:id" element={<AddProduct />} />
      <Route path="/View-Products" element={<ViewProducts />} />
      <Route path="/Add-Category" element={<AddProductCategory />} />
      <Route path="/products/:cat" element={<ViewCategoryProducts />} />
      <Route path="/users" element={<ShowUsers />} />
      <Route path="/single-user/:id" element={<ShowSingleUser />} />
      <Route path="/Banners" element={<AddBanners />} />
    </Routes>
  );
}

export default App;
