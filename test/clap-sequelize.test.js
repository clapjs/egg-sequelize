'use strict';

const mock = require('egg-mock');

describe('test/clap-sequelize.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/clap-sequelize-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, clapSequelize')
      .expect(200);
  });
});
