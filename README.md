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

This project follows a **feature branch workflow** with automated releases using [Changesets](https://github.com/changesets/changesets).

### Development Workflow

1. Start from develop

```bash
git checkout develop
git pull origin develop
```

2. Create a branch

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

Open a PR: feature/fix → develop. Merge after review.

Lockfile policy:

- Lockfile conflicts are avoided via `.gitattributes` (`pnpm-lock.yaml merge=ours`) which keeps `develop`’s lockfile.
- If your change updates `package.json`, do not hand-merge the lockfile in the PR; let `develop` win and regenerate on `develop` later.

4. Prepare release on develop (after features are merged)

```bash
git checkout develop
git pull origin develop

# Bump versions with Changesets
pnpm changeset
pnpm changeset version
```

5. Regenerate lockfile deterministically

```bash
rm -f pnpm-lock.yaml
pnpm install --lockfile-only --ignore-scripts

git add .changeset/ package.json pnpm-lock.yaml
git commit -m "chore: version and lockfile"
git push origin develop
```

6. Release PR: develop → main

- Open PR from `develop` into `main`.
- If `package.json` conflicts, keep `develop` (it already contains the version bumped above).
- Merge to `main` to release.

Notes:

- `package.json` has a `packageManager` field. Run `corepack enable` locally to use the pinned pnpm version.
- Prefer regenerating the lockfile over manual conflict resolution.

### Branch Strategy

- **`main`** - Production releases, triggers automatic npm publishing
- **`develop`** - Integration branch for features
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

Asbjørn Ness, Kreftforeningen
