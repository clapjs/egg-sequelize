'use strict';

const sequelize = require('./lib/sequelize');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    if (this.app.config.sequelize.app) sequelize(this.app);
  }

  async willReady() {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
  }
}

module.exports = AppBootHook;
