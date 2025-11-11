import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const AvatarGlobalStyles = createGlobalStyle`
  .kf-avatar {
    font-family: var(--kf-font-sans);
    position: relative;
    display: inline-flex;
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    flex-shrink: 0;
    overflow: hidden;
    border-radius: var(--kf-radius-full, 9999px);
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.2));
  }

  .kf-avatar__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
  }

  .kf-avatar__fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.2));
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.7));
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
  }
`;

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <>
      <AvatarGlobalStyles />
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn("kf-avatar", className)}
        {...props}
      />
    </>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("kf-avatar__image", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("kf-avatar__fallback", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
