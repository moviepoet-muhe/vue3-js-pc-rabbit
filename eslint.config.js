import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    rules: {
      // 禁用组件命名必须为多单词的规则
      'vue/multi-word-component-names': 'off',
      'vue/multi-word-component-names': '0'
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]
