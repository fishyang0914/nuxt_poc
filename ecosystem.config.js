module.exports = {
    apps: [
        {
            name: 'nuxt_poc',
            port: 3002,
            script: './node_modules/nuxt/bin/nuxt.js',
            cwd: './',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            error_file: './log/err.txt',
            out_file: './log/log.txt',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
