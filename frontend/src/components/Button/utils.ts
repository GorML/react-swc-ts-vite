import cn from "@utils/cn";
import { ButtonColor, ButtonSize, ButtonVariant } from "./types";

const getFilledStyleByColor = (color: ButtonColor) => {
  switch (color) {
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "info":
      return "bg-info";
    case "error":
      return "bg-error";
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
  }
};

const getOutlinedStyleByColor = (color: ButtonColor) => {
  switch (color) {
    case "primary":
      return "border border-2 border-primary";
    case "secondary":
      return "border border-2 border-secondary";
    case "info":
      return "border border-2 border-info";
    case "error":
      return "border border-2 border-error";
    case "success":
      return "border border-2 border-success";
    case "warning":
      return "border border-2 border-warning";
  }
};

const getTextStyleByColor = (color: ButtonColor) => {
  switch (color) {
    case "primary":
      return "text-primary";
    case "secondary":
      return "text-secondary";
    case "info":
      return "text-info";
    case "error":
      return "text-error";
    case "success":
      return "text-success";
    case "warning":
      return "text-warning";
  }
};

const getStyleByDisabled = (disabled: boolean) => {
  return disabled
    ? "grayscale contrast-50 brightness-125 pointer-events-none"
    : "";
};

const getStyleByVariantAndColor = (
  variant: ButtonVariant,
  color: ButtonColor
) => {
  switch (variant) {
    case "filled":
      return getFilledStyleByColor(color);
    case "outlined":
      return getOutlinedStyleByColor(color);
    case "text":
      return getTextStyleByColor(color);
  }
};

const getStyleBySize = (size: ButtonSize) => {
  switch (size) {
    case "large":
      return "py-2 px-6";
    case "medium":
      return "py-1 px-4";
    case "small":
      return "py-0.5 px-3";
  }
};

const defaultStyles =
  "rounded-full hover:brightness-95 transition-all active:brightness-90";

export const getStyleString = (
  color: ButtonColor,
  disabled: boolean,
  variant: ButtonVariant,
  size: ButtonSize
) => {
  return cn(
    defaultStyles,
    getStyleByVariantAndColor(variant, color),
    getStyleByDisabled(disabled),
    getStyleBySize(size)
  );
};
