'use strict';

const sequelize = require('./lib/sequelize');

class AppBootHook {
  constructor(agent) {
    this.agent = agent;
  }

  async didLoad() {
    if (this.agent.config.clearSequelize.agent) sequelize(this.agent);
  }

  async willReady() {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
  }
}

module.exports = AppBootHook;
