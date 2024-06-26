/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/404',
        destination: 'https://example.com/404',
        permanent: true,
      },
    ];
  },
};
