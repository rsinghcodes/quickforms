module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['vite.config.ts', 'jest.setup.ts', '**/__tests__/**']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ['src/**/*.ts?(x)'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    {
      files: ['vite.config.ts', 'jest.setup.ts'],
      parserOptions: {
        project: ['./tsconfig.node.json']
      }
    }
  ]
};
