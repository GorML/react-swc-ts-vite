import Button from "@/components/Button";
import cn from "@/utils/cn";
import Avatar from "@components/Avatar/Avatar";

type HeaderAuthProps = {
  className?: string;
  src?: string;
  isAuthenticated: boolean;
  email?: string;
  name?: string;
  surname?: string;
};

const HeaderAuth = ({
  className,
  name,
  surname,
  email,
  src,
  isAuthenticated,
}: HeaderAuthProps) => {
  if (!isAuthenticated)
    return (
      <div className="">
        <Button color="info">Войти</Button>
        <Button variant="filled" color="success" size="large">
          Зарегистрироваться
        </Button>
      </div>
    );
  return (
    <div
      className={cn(
        "flex gap-2 rounded-xl py-2 px-3 bg-white  hover:shadow active:translate-y-0.5 cursor-pointer transition-all",
        className
      )}
    >
      <Avatar src={src} />
      <div>
        <p className="font-semibold">
          {name} {surname}
        </p>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
    </div>
  );
};

export default HeaderAuth;
