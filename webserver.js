const browserSync = require('browser-sync');
      staticServer = browserSync.create(),
      config = {
        server: {
          baseDir: './build'
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        injectChanges: true,
        logPrefix: 'BrowserSync Log'};

staticServer.init(config);
