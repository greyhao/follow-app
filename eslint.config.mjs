// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    ignores: ['api/hono.ts', 'drizzle'],
    typeChecked: 'essential',
    project: true,
    tsconfigRootDir: import.meta.dirname,
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
