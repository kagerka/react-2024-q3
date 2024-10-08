/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  eslint: {
    dirs: ['src'],
  },
};

export default nextConfig;
