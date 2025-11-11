import * as React from "react";

import { Button } from "@/button";
import { Textarea } from "@/textarea";
import { Label } from "@/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/card";

import { cn } from "@/lib/utils";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

type FeedbackType = "positive" | "negative" | null;

const feedbackContext = React.createContext<{
  feedback: FeedbackType;
  setFeedback: (feedback: FeedbackType) => void;
  commentText: string;
  setCommentText: (value: string) => void;
}>({
  feedback: null,
  setFeedback: () => {},
  commentText: "",
  setCommentText: () => {},
});

const FeedbackGlobalStyles = createGlobalStyle`
  .kf-feedback {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-feedback__header {
    padding-bottom: 0;
  }

  .kf-feedback__title {
    margin-top: 0;
  }

  .kf-feedback__description {
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    padding-bottom: 0;
  }

  .kf-feedback__content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-feedback__buttons {
    display: flex;
    flex-direction: row;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-feedback__choice {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    background: transparent;
    outline: 1px solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-feedback__choice[data-active="true"] {
    background: var(--kf-color-blue-700, #1d4ed8);
    color: var(--kf-color-white, #ffffff);
    outline-color: transparent;
  }

  .kf-feedback__comment {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    align-items: flex-start;
    animation: kf-feedback-fade-in 200ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-feedback__comment-input {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    width: 100%;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-feedback__comment-input {
      width: 66%;
    }
  }

  @keyframes kf-feedback-fade-in {
    from {
      opacity: 0;
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Feedback({ children }: React.ComponentProps<"div">) {
  const [feedback, setFeedback] = React.useState<FeedbackType>(null);
  const [commentText, setCommentText] = React.useState<string>("");

  return (
    <feedbackContext.Provider
      value={{ feedback, setFeedback, commentText, setCommentText }}
    >
      <>
        <FeedbackGlobalStyles />
        <Card data-slot="feedback" className="kf-feedback">
          {children}
        </Card>
      </>
    </feedbackContext.Provider>
  );
}

function FeedbackHeader({ ...props }: React.ComponentProps<"div">) {
  return <CardHeader className="kf-feedback__header" {...props} />;
}

function FeedbackTitle({ ...props }: React.ComponentProps<"h3">) {
  return <CardTitle className="kf-feedback__title" {...props} />;
}

function FeedbackDescription({ ...props }: React.ComponentProps<"div">) {
  return <CardDescription className="kf-feedback__description" {...props} />;
}

function FeedbackAction({ ...props }: React.ComponentProps<"div">) {
  return <CardAction {...props} />;
}

function FeedbackButtons({ className, children }: React.ComponentProps<"div">) {
  return (
    <div className={cn("kf-feedback__buttons", className)}>{children}</div>
  );
}

function FeedbackContent({ ...props }: React.ComponentProps<"div">) {
  return <CardContent className="kf-feedback__content" {...props} />;
}

function FeedbackButtonPositive({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { feedback, setFeedback } = React.useContext(feedbackContext);
  const isActive = feedback === "positive";
  return (
    <Button
      variant="outline"
      className={cn("kf-feedback__choice", className)}
      aria-pressed={isActive}
      data-active={isActive ? "true" : "false"}
      onClick={() => setFeedback("positive")}
    >
      <ThumbsUpIcon />
      <span>{children || "Positive"}</span>
    </Button>
  );
}
function FeedbackButtonNegative({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { feedback, setFeedback } = React.useContext(feedbackContext);
  const isActive = feedback === "negative";
  return (
    <Button
      variant="outline"
      className={cn("kf-feedback__choice", className)}
      aria-pressed={isActive}
      data-active={isActive ? "true" : "false"}
      onClick={() => setFeedback("negative")}
    >
      <ThumbsDownIcon />
      <span>{children || "Negative"}</span>
    </Button>
  );
}

function FeedbackComment({ children }: React.ComponentProps<"div">) {
  const { feedback } = React.useContext(feedbackContext);
  if (feedback === null) return null;
  return <div className="kf-feedback__comment">{children}</div>;
}

function FeedbackCommentInput({
  className,
  label,
  placeholder,
}: React.ComponentProps<"div"> & { label?: string; placeholder?: string }) {
  const { commentText, setCommentText } = React.useContext(feedbackContext);
  return (
    <div className={cn("kf-feedback__comment-input", className)}>
      <Label>{label || "Comment"}</Label>
      <Textarea
        placeholder={placeholder || "Enter your comment here"}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </div>
  );
}
function FeedbackSubmit({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { commentText } = React.useContext(feedbackContext);
  const isDisabled = commentText.trim().length === 0;
  return (
    <Button
      variant="default"
      className={cn("", className)}
      disabled={isDisabled}
    >
      {children || "Submit"}
    </Button>
  );
}

export {
  Feedback,
  FeedbackHeader,
  FeedbackTitle,
  FeedbackDescription,
  FeedbackAction,
  FeedbackButtons,
  FeedbackContent,
  FeedbackComment,
  FeedbackCommentInput,
  FeedbackButtonPositive,
  FeedbackButtonNegative,
  FeedbackSubmit,
};
