const config = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI || "mongodb://localhost/mydb",
};

export default config;
