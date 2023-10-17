import HeaderAuth from "./components/HeaderAuth";
import HeaderNotifications from "./components/HeaderNotifications";
import HeaderSearch from "./components/HeaderSearch";

const Header = () => {
  return (
    <div className="py-2 flex justify-between">
      Header
      <div className="flex gap-2 items-center">
        <div>
          <HeaderSearch />
          <HeaderNotifications />
        </div>

        <HeaderAuth
          isAuthenticated={false}
          name="Иван"
          surname="Иванов"
          email="test@mail.com"
          src="https://e-learning.bmstu.ru/iu6/pluginfile.php/8366/mod_label/intro/IMAG0091.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
