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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['vite.config.ts']
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
      files: ['vite.config.ts'],
      parserOptions: {
        project: ['./tsconfig.node.json']
      }
    }
  ]
};
