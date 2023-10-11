import NavigationRail from "@/components/NavigationRail";
import NavItem from "@/components/NavigationRail/components/NavItem";
import NavigationRailGroup from "@/components/NavigationRail/components/NavigationItemGroup/NavigationItemGroup";
import { useState } from "react";
import { BiHomeAlt2, BiServer } from "react-icons/bi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside>
      <NavigationRail onCollapse={() => setCollapsed((state) => !state)}>
        <NavigationRailGroup align="top">
          <NavItem
            collapsed={collapsed}
            active
            label="Home"
            Icon={<BiHomeAlt2 size={24} />}
          />
          <NavItem
            collapsed={collapsed}
            label="Test"
            Icon={<BiServer size={24} />}
          />
        </NavigationRailGroup>
      </NavigationRail>
    </aside>
  );
};

export default Sidebar;
