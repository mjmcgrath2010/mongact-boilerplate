module.exports = {
  env: () => process.env.NODE_ENV,
  dbHost: () =>
    process.env.NODE_ENV === 'production'
      ? 'liveURL'
      : 'mongodb://localhost/mongact-boilerplate',
};
