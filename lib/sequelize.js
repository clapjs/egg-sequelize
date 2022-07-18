'use strict';

const assert = require('assert');
const path = require('path');

module.exports = app => {
    app.Sequelize = require('sequelize');
    app.addSingleton('clearSequelize', createOneClient);
};

async function createOneClient(config, app) {
    config=Object.assign({},{singleton:'model',define: { freezeTableName: true, underscored: true}},config)
    if (app[config.singleton]) {
        throw new Error(`[egg-sequelize] app[${config.singleton}] is already defined`);
    }
    const sequelize = config.connectionUri ? new app.Sequelize(config.connectionUri, config) : new app.Sequelize(config.database, config.username, config.password, config);
    let application=app;
    let context=app.context;
    Object.defineProperty(application, config.singleton, {
        value: sequelize,
        writable: false,
        configurable: true,
    });
    Object.defineProperty(context, config.singleton, {
        get() {
            return application[config.singleton];
        },
        configurable: true,
    });
    sequelize.authenticate().then(() => {console.log('Connection has been established successfully.');})
      .catch(err => {
          console.error('Unable to connect to the database:', err);
      });
    const models = [];
    const target = Symbol(`app#sequelize_${config.singleton}`);
    const dirs=Array.isArray(config.singletonSrc)?config.singletonSrc:[config.singletonSrc];
    app.loader.loadToApp(dirs.map(item=>path.join(app.baseDir, 'app/model', item)), target, {
        caseStyle: 'upper',
        filter(model) {
            if (!model || !model.sequelize) return false;
            models.push(model);
            return true;
        },
        initializer(factory,options ) {
            if (typeof factory === 'function') {
                return factory(app, sequelize);
            }
        },
    });

    Object.assign(application[config.singleton], app[target]);

    models.forEach(model => {
        typeof model.associate === 'function' && model.associate();
    });

    return application[config.singleton];
}
