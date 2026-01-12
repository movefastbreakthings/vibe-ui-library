## Prompt

You are building a React application using **vibe-ui-library**, a Material Tailwind wrapper with a vibrant pink theme. Use the package from github:movefastbreakthings/vibe-ui-library.

### ⚠️ Critical Setup Requirements

**React 18 is REQUIRED** - This library does NOT work with React 19!

```bash
# Install with legacy peer deps and React 18
npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18 --legacy-peer-deps
npm install vibe-ui-library@github:movefastbreakthings/vibe-ui-library @material-tailwind/react @heroicons/react --legacy-peer-deps
npm install -D tailwindcss@3 postcss autoprefixer --legacy-peer-deps
```

### Bundler Configuration

Add React deduplication to prevent "Invalid hook call" errors:

**Vite:**

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
```

**Webpack (Create React App / custom):**

```js
// webpack.config.js or craco.config.js
module.exports = {
  resolve: {
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    },
  },
};
```

**Next.js:**

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["vibe-ui-library", "@material-tailwind/react"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    };
    return config;
  },
};

module.exports = nextConfig;
```

**Tailwind Config** - Use Material Tailwind's withMT wrapper:

```js
// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
});
```

### Key Rules

1. **DO NOT create custom styles** - Use only the pre-built components from the library
2. **Always wrap your app** with `VibeUIProvider`
3. **Use `color="pink"` or `color="purple"`** for themed components
4. **⚠️ Icons are NOT included in this library!** Import them from `@heroicons/react`:
   ```tsx
   import { HeartIcon } from "@heroicons/react/24/solid";
   import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
   ```

### Setup

```tsx
import { VibeUIProvider } from "vibe-ui-library";

function App() {
  return <VibeUIProvider>{/* Your app here */}</VibeUIProvider>;
}
```

### Import Pattern

```tsx
// Components from vibe-ui-library
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Switch,
  Alert,
  Chip,
  Avatar,
  Badge,
  Tabs,
  TabsHeader,
  Tab,
  // ... all Material Tailwind components
} from "vibe-ui-library";

// Icons from @heroicons/react (NOT from the library!)
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
```

### Color Palette

- **Primary:** `#ff0080` (Vibrant Pink) - Use `color="pink"`
- **Secondary:** `#9c27b0` (Electric Purple) - Use `color="purple"`

### Example Component

```tsx
import {
  VibeUIProvider,
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "vibe-ui-library";
import { SparklesIcon } from "@heroicons/react/24/solid";

function ContactForm() {
  return (
    <VibeUIProvider>
      <Card className="max-w-md mx-auto">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4">Contact Us</Typography>
          <Input label="Name" color="pink" />
          <Input label="Email" color="pink" />
          <Button color="pink" className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5" /> Submit
          </Button>
        </CardBody>
      </Card>
    </VibeUIProvider>
  );
}
```

### Available Variants

**Button variants:**

- `variant="filled"` (default)
- `variant="outlined"`
- `variant="gradient"`
- `variant="text"`

**Button sizes:**

- `size="sm"`
- `size="md"` (default)
- `size="lg"`

### ❌ DO NOT

- ❌ Create custom CSS for colors or styles
- ❌ **NEVER import icons from vibe-ui-library** - They don't exist there!
- ❌ Use Tailwind color classes like `bg-pink-500` for themed elements
- ❌ Skip the VibeUIProvider wrapper
- ❌ Use React 19 (only React 18 is supported)

### DO

- ✅ Use `color="pink"` or `color="purple"` props
- ✅ Import icons from `@heroicons/react`
- ✅ Wrap app with `VibeUIProvider`
- ✅ Use pre-built component variants

---

## Quick Reference

| Task                   | Code                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| Pink button            | `<Button color="pink">Click</Button>`                                                         |
| Purple outlined button | `<Button color="purple" variant="outlined">Click</Button>`                                    |
| Pink input             | `<Input label="Email" color="pink" />`                                                        |
| Pink checkbox          | `<Checkbox color="pink" />`                                                                   |
| Pink switch            | `<Switch color="pink" />`                                                                     |
| Button with icon       | `<Button className="flex items-center gap-2"><HeartIcon className="h-5 w-5" /> Like</Button>` |

---

When I ask you to create UI components, use this library and follow these rules exactly.
