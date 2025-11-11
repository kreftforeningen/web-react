import {
  Feedback,
  FeedbackAction,
  FeedbackButtonNegative,
  FeedbackButtonPositive,
  FeedbackButtons,
  FeedbackComment,
  FeedbackCommentInput,
  FeedbackContent,
  FeedbackDescription,
  FeedbackHeader,
  FeedbackSubmit,
  FeedbackTitle,
} from "@/lib/main";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function FeedbackDemo() {
  return (
    <>
      <h2>Feedback</h2>
      <Feedback>
        <FeedbackHeader>
          <FeedbackTitle>We value your feedback</FeedbackTitle>
          <FeedbackDescription>
            Please let us know if our service met your expectations.
          </FeedbackDescription>
          <FeedbackAction>
            <ThumbsUpIcon size={16} />
            <ThumbsDownIcon size={16} />
          </FeedbackAction>
        </FeedbackHeader>
        <FeedbackContent>
          <FeedbackButtons>
            <FeedbackButtonPositive>Positiv</FeedbackButtonPositive>
            <FeedbackButtonNegative>Negativ</FeedbackButtonNegative>
          </FeedbackButtons>
          <FeedbackComment>
            <FeedbackCommentInput />
            <FeedbackSubmit>Submit Feedback</FeedbackSubmit>
          </FeedbackComment>
        </FeedbackContent>
      </Feedback>
    </>
  );
}

