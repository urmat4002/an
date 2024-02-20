import { CSSProperties, ReactNode } from "react";

export interface BaseButtonProps {
  disabled?: boolean;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "outlined" | "contained";
export type ButtonIconPosition = "left" | "right";
export type ButtonType = "primary" | "secondary" | "link" | "icon";

export interface ButtonConfig
  extends Record<
    ButtonType,
    Partial<BaseButtonProps> & {
      classes: string;
      icon?: ReactNode;
      size?: ButtonSize;
      variant?: ButtonVariant;
    }
  > {}

export interface ButtonProps extends BaseButtonProps {
  type: Exclude<ButtonType, "link"> | "link";
  // eslint-disable-next-line no-unused-vars
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
  iconPosition?: ButtonIconPosition;
  customClasses?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children?: ReactNode;
  href?: string;
  target?: string;
  loadingText?: string;
}
