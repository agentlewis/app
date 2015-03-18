var config = {
  isSecure: false,
  data: {
    location: __dirname + "/../data",
  },
  session: {
    host: "localhost",
    port: 6379,
    db: 1,
    secret: "bang!",
    secure: false,
  },
  api: {
    protocol: "http",
    hostname: "localhost",
    port: 3000,
    prefix: "/api",
  },
  ui: {
    debug: true,
    prefix: "/",
    pushState: true,
    hash: false,
  },
};

module.exports = config;
