import { Marker, MarkerIcon, MarkerContent, Page, Spinner } from "@/lib/main";
import { GitBranchIcon, SearchIcon, BookOpenCheckIcon } from "lucide-react";

export default function MarkerDemo() {
  return (
    <Page.Block width="xl" gutters>
      <h2>Marker</h2>
      <div className="app-centered-column-sm">
        <h3>Default</h3>
        <Marker>
          <MarkerIcon>
            <GitBranchIcon />
          </MarkerIcon>
          <MarkerContent>Switched to a new branch</MarkerContent>
        </Marker>

        <Marker>
          <MarkerIcon>
            <SearchIcon />
          </MarkerIcon>
          <MarkerContent>Explored 4 files</MarkerContent>
        </Marker>

        <h3>With Status</h3>
        <Marker role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent>Compacting conversation</MarkerContent>
        </Marker>

        <h3>Separator</h3>
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>

        <Marker variant="separator">
          <MarkerContent>Worked for 42s</MarkerContent>
        </Marker>

        <h3>Border</h3>
        <Marker variant="border">
          <MarkerIcon>
            <GitBranchIcon />
          </MarkerIcon>
          <MarkerContent>Switched to release-candidate</MarkerContent>
        </Marker>

        <Marker variant="border">
          <MarkerIcon>
            <SearchIcon />
          </MarkerIcon>
          <MarkerContent>Reviewed 8 related files</MarkerContent>
        </Marker>

        <Marker variant="border">
          <MarkerIcon>
            <BookOpenCheckIcon />
          </MarkerIcon>
          <MarkerContent>Syncing completed</MarkerContent>
        </Marker>

        <h3>Link</h3>
        <Marker render={<a href="#" />}>
          <MarkerIcon>
            <GitBranchIcon />
          </MarkerIcon>
          <MarkerContent>View the pull request</MarkerContent>
        </Marker>
      </div>
    </Page.Block>
  );
}
