/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: starmbest@qq.com
 * @Date: 2021-01-20 14:58:14
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 15:44:52
 */
module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "axios": "^0.19.2",
      "core-js": "^3.6.5",
      "element-ui": "^2.13.2",
      "moment": "^2.29.1",
      "qs": "^6.9.4",
      "vue": "^2.6.11",
      "vue-router": "^3.2.0",
      "vue-splitpane": "^1.0.6",
      "vuex": "^3.4.0"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.4.0",
      "@vue/cli-service": "^4.4.0",
      "less": "^3.0.4",
      "less-loader": "^5.0.0",
      "style-resources-loader": "^1.3.3",
      "vue-cli-plugin-style-resources-loader": "^0.1.4",
      "vue-template-compiler": "^2.6.11"
    },
    scripts: {
      'dev': 'vue-cli-service serve',
      'build:testing': 'vue-cli-service build --mode testing',
      'build:staging': 'vue-cli-service build --mode staging',
      'build:production': 'vue-cli-service build',
      'commit': 'git add . && npx git-cz'
    },
  })
 
}