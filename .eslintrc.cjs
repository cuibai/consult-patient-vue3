/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2023-04-11 21:14:27
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2023-04-11 21:25:09
 * @FilePath: \consult-patient-vue3\.eslintrc.cjs
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
        'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
        },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                /**
                 * 文件配置
                 * 单引号
                 * 不使用分号
                 * 字符宽度80
                 * 不加数组对最后的分号
                 * 换行符号不限制
                 */
                singleQuote: true,
                semi: false,
                printWidth: 80,
                trailingComma: 'none',
                endOfLine: 'auto'
            }
        ],
        'vue/multi-word-component-names': [
            'warn',
            {
                // 允许短名称 index
                ignores: ['index']
            }
        ],
        // 暂时忽略 prop 的解构问题
        'vue/no-setup-props-destructure': ['off']
    }

}
