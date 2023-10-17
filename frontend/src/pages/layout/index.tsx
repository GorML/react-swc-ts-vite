import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Sidebar />
      <div className="flex flex-col w-full mr-2">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
