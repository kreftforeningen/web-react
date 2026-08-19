import {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentGroup,
  Page,
} from "@/lib/main";
import { FileTextIcon, FileCodeIcon, ImageIcon, XIcon } from "lucide-react";

export default function AttachmentDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Attachment</h2>
      <div className="app-centered-column-sm">
        <h3>Default</h3>
        <Attachment>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
            <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>

        <h3>States</h3>
        <Attachment state="idle">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>selected-file.pdf</AttachmentTitle>
            <AttachmentDescription>Ready to upload</AttachmentDescription>
          </AttachmentContent>
        </Attachment>

        <Attachment state="uploading">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>design-system.zip</AttachmentTitle>
            <AttachmentDescription>Uploading · 64%</AttachmentDescription>
          </AttachmentContent>
        </Attachment>

        <Attachment state="error">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
            <AttachmentDescription>
              Upload failed. Try again.
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>

        <h3>Sizes</h3>
        <Attachment size="sm">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>Small attachment</AttachmentTitle>
            <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>

        <Attachment size="xs">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>Extra small attachment</AttachmentTitle>
          </AttachmentContent>
        </Attachment>

        <h3>Image</h3>
        <Attachment orientation="vertical">
          <AttachmentMedia variant="image">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=200&fit=crop"
              alt="workspace"
            />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>workspace.png</AttachmentTitle>
            <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>

        <h3>Group</h3>
        <AttachmentGroup>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>briefing-notes.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 1.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment>
            <AttachmentMedia>
              <ImageIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>workspace.png</AttachmentTitle>
              <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment>
            <AttachmentMedia>
              <FileCodeIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>renderer.tsx</AttachmentTitle>
              <AttachmentDescription>TSX · 12 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </div>
    </Page.Block>
  );
}
