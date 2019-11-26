const config = {
  common: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
};

export default Object.assign(config.common, config[config.common.env]);
