module.exports = {
  apps: [
    {
      name: "reddit-proxy",
      script: "server.js",
      instances: "max",       // one worker per CPU core
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        // PROXY_API_KEY is set via: pm2 set reddit-proxy:PROXY_API_KEY <value>
        // or export PROXY_API_KEY=... before pm2 start
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
