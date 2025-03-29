# @richmd/vue

![NPM License](https://img.shields.io/npm/l/%40richmd%2Fvue)
![NPM Version](https://img.shields.io/npm/v/%40richmd%2Fvue)
![NPM Downloads](https://img.shields.io/npm/dw/%40richmd%2Fvue)

Vue component for [Richmd](https://github.com/richmd/core) - a tool for creating rich content with Markdown.

## Installation

```bash
# Using npm
npm install @richmd/vue

# Using yarn
yarn add @richmd/vue

# Using pnpm
pnpm add @richmd/vue
```

## Usage with Nuxt

### 1. Import CSS in your Nuxt app

First, import the required CSS in your Nuxt app. You can do this in your `app.vue` file or in a plugin:

```vue
<script setup>
import "@richmd/vue/dist/richmd.css";
</script>
```

Alternatively, you can create a plugin in the `plugins` directory:

```ts
// plugins/richmd.ts
import "@richmd/vue/dist/richmd.css";

export default defineNuxtPlugin(() => {
  // Plugin setup if needed
});
```

### 2. Use the Richmd component in your pages or components

```vue
<script setup>
import { Richmd } from "@richmd/vue";

const markdownText = `# Hello, Richmd!

This is a **bold text** and *italic text*.

## Features
- Rich markdown support
- Easy to use
- Customizable

\`\`\`js
// Code block example
const hello = "world";
console.log(hello);
\`\`\`

> Blockquote example

| Table | Example |
|-------|---------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |
`;
</script>

<template>
  <div class="container">
    <Richmd :text="markdownText" class="markdown-content" />
  </div>
</template>
```

### 3. Create a markdown editor (optional)

You can create a simple markdown editor with live preview:

```vue
<script setup>
import { ref } from "vue";
import { Richmd } from "@richmd/vue";

const text = ref('# Start typing here...');
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/2">
      <textarea 
        class="w-full h-[500px] p-4 border rounded"
        v-model="text"
      />
    </div>
    <div class="w-full md:w-1/2 border rounded p-4">
      <Richmd :text="text" class="prose" />
    </div>
  </div>
</template>
```

### 4. Use the RichmdSlide component (optional)

```vue
<script lang="ts">
import { RichmdSlide } from '@richmd/vue';
import "./global.css";
import "@richmd/vue/dist/richmd.css";

export default {
  components: {
    RichmdSlide,
  },
  data() {
    return {
      text: `:use slide:

:---:title.sunset
# Title

subtext
:---:

:<--:content.sunset
# Subtitle

*subtext*
:---:
`,
    };
  },
};
</script>

<template>
  <RichmdSlide :text="text" :is-controller="false" />
</template>
```

## Component API

### `Richmd`

The `Richmd` component accepts the following props:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The markdown text to render |
| `id` | string | No | HTML id attribute for the container div |
| `className` | string | No | CSS class name for the container div |

### `RichmdSlide`

The `RichmdSlide` component accepts the following props:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The markdown text to render |
| `is-controller` | boolean | No | Toggles the display of the slide controller |

## Supported Markdown Features

Richmd supports a wide range of markdown features:

- Basic formatting (bold, italic, strikethrough)
- Headings (h1-h6)
- Lists (ordered and unordered)
- Checkbox lists
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Horizontal rules
- Links and images
- TeX syntax (using [KaTeX](https://katex.org/))
- Color inline blocks
- Dropdown details
- Video (HTML5 video tag)
- Custom HTML tags

For detailed syntax documentation, refer to the [Richmd Markdown Syntax Documentation](https://github.com/richmd/core/blob/main/docs/md-syntax.md).

## License

MIT
