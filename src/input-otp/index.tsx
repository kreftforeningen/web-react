import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const InputOTPGlobalStyles = createGlobalStyle`
  .kf-input-otp__container {
    font-family: var(--kf-font-sans);
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-input-otp__container:has(:disabled) {
    opacity: 0.5;
  }

  .kf-input-otp {
    display: inline-flex;
    width: 100%;
  }

  .kf-input-otp:disabled {
    cursor: not-allowed;
  }

  .kf-input-otp__group {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-input-otp__slot {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--kf-spacing, 0.25rem) * 11);
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    border-top: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-right: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-bottom: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    font-size: var(--kf-text-base, 1rem);
    transition: box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .kf-input-otp__slot:first-of-type {
    border-left: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-radius: var(--kf-radius-md, 0.375rem) 0 0 var(--kf-radius-md, 0.375rem);
  }

  .kf-input-otp__slot:last-of-type {
    border-radius: 0 var(--kf-radius-md, 0.375rem) var(--kf-radius-md, 0.375rem) 0;
  }

  .dark .kf-input-otp__slot {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.1)) 90%, transparent);
  }

  .kf-input-otp__slot[data-active="true"] {
    z-index: 10;
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-input-otp__slot[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-input-otp__slot[data-active="true"][aria-invalid="true"] {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 20%, transparent);
  }

  .kf-input-otp__caret {
    pointer-events: none;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kf-input-otp__caret-bar {
    width: 1px;
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    animation: kf-caret-blink 1s step-end infinite;
    background: var(--kf-color-gray-950, #0f172a);
  }

  @keyframes kf-caret-blink {
    from, to { opacity: 0; }
    50% { opacity: 1; }
  }

  .kf-input-otp__separator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--kf-color-gray-950, #0f172a);
  }
`;

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <>
      <InputOTPGlobalStyles />
      <OTPInput
        data-slot="input-otp"
        containerClassName={cn("kf-input-otp__container", containerClassName)}
        className={cn("kf-input-otp", className)}
        {...props}
      />
    </>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("kf-input-otp__group", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn("kf-input-otp__slot", className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="kf-input-otp__caret">
          <div className="kf-input-otp__caret-bar" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className="kf-input-otp__separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
