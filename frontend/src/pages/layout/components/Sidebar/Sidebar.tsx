import NavigationRail from "@/components/NavigationRail";
import NavItem from "@/components/NavigationRail/components/NavItem";
import NavigationRailGroup from "@/components/NavigationRail/components/NavigationItemGroup/NavigationItemGroup";
import { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="p-2">
      <NavigationRail
        collapsed={collapsed}
        onCollapse={() => setCollapsed((state) => !state)}
      >
        <NavigationRailGroup align="top">
          <NavItem
            collapsed={collapsed}
            active
            label="Главная"
            Icon={<BiHomeAlt2 size={24} />}
          />
          <NavItem
            collapsed={collapsed}
            label="Помощь"
            Icon={<FiHelpCircle size={24} />}
          />
        </NavigationRailGroup>
      </NavigationRail>
    </aside>
  );
};

export default Sidebar;
