'use strict';

/**
 * egg-sequelize default config
 * @member Config#sequelize
 * @property {String} SOME_KEY - some description
 */
exports.sequelize = {
    // client:{
    //   singleton: 'model', // models in `app/${instance}`
    //   singletonSrc: ['core/model'],
    //   dialect: 'mysql',
    //   database: '',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    // },
    app: true,
    agent: false,
};
