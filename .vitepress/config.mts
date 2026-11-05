import { cpSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Career Research',
  description: 'IS117 career and portfolio research: forward deployed engineering and two alternatives',
  base: '/is117-career-research/',
  // The README is the deck, so GitHub and the website share one source file.
  rewrites: { 'README.md': 'index.md' },
  themeConfig: {
    outline: { level: [2, 3], label: 'On This Page' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mnguyenht/is117-career-research' }],
  },
  // The screenshots are linked, not embedded, so Vite never bundles them. Copy them into the build.
  buildEnd({ srcDir, outDir }) {
    cpSync(join(srcDir, 'evidence'), join(outDir, 'evidence'), { recursive: true })
  },
})
