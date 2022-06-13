module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  }

  // async redirects() {
  //   return [{ source: "/panel/:slug*", destination: "/", permanent: false }];
  // },
};
