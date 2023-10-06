import cn from "@/utils/cn";
import { EventHandler, MouseEventHandler } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Logo from "../Logo";

type NavigationRailProps = {
  children: React.ReactNode;
  collapsed?: boolean;
  onCollapse: MouseEventHandler<HTMLDivElement>;
};

const NavigationRail: React.FC<NavigationRailProps> = (props) => {
  const { children, collapsed, onCollapse } = props;
  return (
    <div className="bg-white h-96 flex flex-col p-2 rounded-lg shadow transition-all">
      <Logo
        collapsed={collapsed}
        className="mb-2 p-2 "
        svgClassName="w-6 h-6"
      />
      {children}
      <div
        className="p-2 flex gap-4 items-center hover:bg-gray-200 cursor-pointer transititon-all rounded"
        onClick={onCollapse}
      >
        <MdOutlineKeyboardDoubleArrowRight
          className={cn("w-6 h-6", !collapsed && "rotate-180")}
        />
        {!collapsed && <span>Collapse</span>}
      </div>
    </div>
  );
};

export default NavigationRail;
