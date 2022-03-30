module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    URL: process.env.BASE_URL || 'http://localhost:5000',
    DATABASE: {
      development: {
        name: process.env.DB_NAME || 'node_test',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || '',
        host: process.env.DB_HOST || 'localhost'
      }
    }
  };
  