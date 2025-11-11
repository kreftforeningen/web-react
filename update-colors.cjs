const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'src');

const derivedMap = {
  'color-background': 'kf-color-gray-50',
  'color-foreground': 'kf-color-gray-950',
  'color-card': 'kf-color-gray-100',
  'color-card-foreground': 'kf-color-gray-950',
  'color-popover': 'kf-color-gray-50',
  'color-popover-foreground': 'kf-color-gray-950',
  'color-primary': 'kf-color-blue-600',
  'color-primary-foreground': 'kf-color-blue-50',
  'color-secondary': 'kf-color-pink-600',
  'color-secondary-foreground': 'kf-color-pink-50',
  'color-muted': 'kf-color-gray-50',
  'color-muted-foreground': 'kf-color-gray-500',
  'color-accent': 'kf-color-gray-200',
  'color-accent-foreground': 'kf-color-gray-900',
  'color-destructive': 'kf-color-red-700',
  'color-success': 'kf-color-green-700',
  'color-border': 'kf-color-gray-300',
  'color-input': 'kf-color-gray-50',
  'color-ring': 'kf-color-blue-400',
  'color-sidebar': 'kf-color-gray-100',
  'color-sidebar-foreground': 'kf-color-gray-950',
  'color-sidebar-primary': 'kf-color-gray-900',
  'color-sidebar-primary-foreground': 'kf-color-gray-50',
  'color-sidebar-accent': 'kf-color-gray-200',
  'color-sidebar-accent-foreground': 'kf-color-gray-900',
  'color-sidebar-border': 'kf-color-gray-100',
  'color-sidebar-ring': 'kf-color-blue-400',
  'color-chart-1': 'kf-color-orange-800',
  'color-chart-2': 'kf-color-green-800',
  'color-chart-3': 'kf-color-blue-800',
  'color-chart-4': 'kf-color-orange-400',
  'color-chart-5': 'kf-color-orange-600'
};

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')))
      return [fullPath];
    return [];
  });

const files = walk(root);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content;

  for (const [key, value] of Object.entries(derivedMap)) {
    const regex = new RegExp(`var\\(--${escapeRegex(key)}(?=[^A-Za-z0-9_-])`, 'g');
    updated = updated.replace(regex, `var(--${value}`);
  }

  updated = updated.replace(/var\(--color-/g, 'var(--kf-color-');

  if (updated !== content) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('updated', path.relative(process.cwd(), file));
  }
}
