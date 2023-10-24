import cn from "@/utils/cn";
import { IoClose } from "react-icons/io5";
import IconButton from "../IconButton";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  closable?: boolean;
};

const Modal = ({
  open,
  onClose,
  children,
  className,
  title,
  closable,
}: Props) => {
  return (
    <dialog
      open={open}
      onClose={onClose}
      className={cn(
        className,
        "p-4 rounded-xl bg-green backdrop:backdrop-blur-sm shadow-md"
      )}
    >
      {title ? (
        <header className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-black mr-2">{title}</h2>
          {closable ? (
            <IconButton onClick={onClose}>
              <IoClose size={26} />
            </IconButton>
          ) : null}
        </header>
      ) : null}
      <div>{children}</div>
    </dialog>
  );
};

export default Modal;
