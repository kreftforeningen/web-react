# @kreftforeningen/web-react

A modern, accessible, and customizable React component library built with [Radix UI](https://www.radix-ui.com/) and [Vite](https://vitejs.dev/), powered by Kreftforeningen design tokens. Perfect for building beautiful, production-ready UIs with speed and consistency.

## Features

- **Accessible**: Built on top of Radix UI primitives for accessibility out of the box.
- **Customizable**: Override styles with CSS variables and design tokens.
- **Comprehensive**: Includes Accordions, Alerts, Badges, Buttons, Cards, Carousels, Dropdowns, Forms, Tables, Tooltips, and more.
- **Type-safe**: Written in TypeScript with full type definitions.
- **Fast**: Powered by Vite for instant HMR and fast builds.

## Installation

```bash
pnpm add @kreftforeningen/web-react

```

## Usage

Import components directly from the library:

```tsx
import {
  Button,
  Card,
  Badge,
  Accordion,
  Alert,
  // ...and more
} from "@kreftforeningen/web-react";
```

Example:

```tsx
import { Button, Card, Badge } from "@kreftforeningen/web-react";

function Example() {
  return (
    <Card>
      <Badge>New</Badge>
      <h2>Card Title</h2>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Components

- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toaster, Toggle, ToggleGroup, Tooltip, and more.

See the [source code](./src/lib/main.ts) for a full list of exports.

## Theming

All components rely on CSS custom properties (the `--kf-*` tokens) and authored styles.  
You can override styles using the `className` prop, extend the provided variables, or supply your own tokens.

## Development

### Scripts

- `pnpm dev` – Start the development server
- `pnpm build` – Build the library for production
- `pnpm lint` – Lint the source code
- `pnpm check-types` – Type-check the codebase
- `pnpm test` – Run tests

### Requirements

- Node.js 18+
- pnpm

## Daily Development

This project uses a straightforward feature-branch workflow. Branch off `main`, do the work, and merge back into `main`. Every push to `main` runs the release workflow and publishes to npm.

### Development Workflow

1. Start from `main`

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a branch for your work

   ```bash
   git checkout -b feature/new-component
   # or: git checkout -b fix/button-styling
   ```

3. Implement changes and push

   ```bash
   # edit files...
   git add .
   git commit -m "Implement feature"
   git push -u origin HEAD
   ```

4. Merge the branch locally (no PR workflow):

   ```bash
   git checkout main
   git pull origin main
   git merge feature/new-component   # or your branch name
   ```

5. Prepare the release commit on `main` (manual version bump):

   ```bash
   git checkout main
   git pull origin main
   # update package.json version by hand
   pnpm install --lockfile-only --ignore-scripts
   git add package.json pnpm-lock.yaml
   git commit -m "chore: release vX.Y.Z"
   git push origin main
   ```

6. The `Release` GitHub Action runs automatically on every push to `main` and publishes the package to npm.

Notes:

- `package.json` has a `packageManager` field. Run `corepack enable` locally to use the pinned pnpm version.
- Prefer regenerating the lockfile over manual conflict resolution.

### Branch Strategy

- **`main`** - Source of truth & release branch
- **`feature/*`** - Feature development branches
- **`fix/*`** - Bug fix branches
- **`docs/*`** - Documentation update branches

## Contributing

1. Fork the repo and create your branch.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm dev` to start the playground.
4. Submit a pull request!

## License

MIT

## Author

Asbjørn Ness, Kreftforeningen.
