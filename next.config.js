const nextConfig = {
  images: {
    domains: ['images.dog.ceo'],
  },
  async rewrites() {
    return [
      {
        source: '/products/',
        destination: '/products/[...productId]',
      },
    ];
  },
};

module.exports = nextConfig;
