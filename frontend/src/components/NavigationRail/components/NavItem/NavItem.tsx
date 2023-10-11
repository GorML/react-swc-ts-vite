import cn from "@utils/cn";

type NavItemProps = {
  Icon?: React.ReactNode;
  label: React.ReactNode;
  collapsed?: boolean;
  active?: boolean;
};

const NavItem = (props: NavItemProps) => {
  const { Icon, collapsed, label, active } = props;

  return (
    <div
      className={cn(
        active && "bg-gray-200",
        "flex items-center p-2 rounded cursor-pointer transition-all active:scale-95"
      )}
    >
      <div className="text-xl">{Icon}</div>
      {!collapsed && <div className="ml-2">{label}</div>}
    </div>
  );
};

export default NavItem;
