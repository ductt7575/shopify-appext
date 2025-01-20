import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,

  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'simple-import-sort': simpleImportSort
    }
  },
  {
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },

  {
    settings: {}
  },

  {
    ignores: [
      '.config/*',
      'build/*',
      'dist/*',
      'public/*',
      'node_modules/*',
      '.git/*',
      'tailwind.config.ts',
      'postcss.config.ts',
      '.output/*',
      '.wxt/*',
      'assets/*',
      'frontend/styled-system/*'
    ]
  }
]
