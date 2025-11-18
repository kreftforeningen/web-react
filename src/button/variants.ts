import { cva } from "class-variance-authority";

const buttonVariants = cva("kf-btn", {
  variants: {
    variant: {
      default: "kf-btn--default",
      destructive: "kf-btn--destructive",
      outline: "kf-btn--outline",
      secondary: "kf-btn--secondary",
      ghost: "kf-btn--ghost",
      link: "kf-btn--link",
    },
    size: {
      default: "kf-btn--size-default",
      sm: "kf-btn--size-sm",
      lg: "kf-btn--size-lg",
      icon: "kf-btn--size-icon",
    },
    shape: {
      default: "kf-btn--shape-default",
      square: "kf-btn--shape-square",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { buttonVariants };
