import { dirname, join, resolve } from 'path';
const __dirname = resolve();

const config = {
    sassOptions: {
        includePaths: [join(__dirname, 'src/kit/styles')],
    },
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
};

export default config;