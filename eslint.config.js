import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import lintJsxA11y from 'eslint-plugin-jsx-a11y';
import lintReact from 'eslint-plugin-react';
import lintImport from 'eslint-plugin-no-relative-import-paths';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, , ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-import': lintImport,
      'react-lint': lintReact,
      'react-recommended': lintJsxA11y,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
