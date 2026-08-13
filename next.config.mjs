/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Separate the dev webpack cache from the production build cache
  // so running `npm run build` never corrupts the running dev server
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        ...config.cache,
        cacheDirectory: undefined, // use default in-memory for dev
      }
    }
    return config
  },
}

export default nextConfig
