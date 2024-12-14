const config = {
  development: {
    database: {
      host: 'localhost',
      port: 5432,
      username: 'dev_user',
      password: 'dev_password',
      database: 'dev_db',
    },
    server: {
      port: 3000,
    },
    jwt: {
      secret: 'dev_secret',
      expiresIn: '1h',
    },
  },
  production: {
    database: {
      host: 'prod_db_host',
      port: 5432,
      username: 'prod_user',
      password: 'prod_password',
      database: 'prod_db',
    },
    server: {
      port: 8000,
    },
    jwt: {
      secret: 'prod_secret',
      expiresIn: '1h',
    },
  },
  test: {
    database: {
      host: 'localhost',
      port: 5432,
      username: 'test_user',
      password: 'test_password',
      database: 'test_db',
    },
    server: {
      port: 3001,
    },
    jwt: {
      secret: 'test_secret',
      expiresIn: '1h',
    },
  },
};

module.exports = config;
