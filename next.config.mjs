/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.allo.ua',
            },
        ],
    }
};

export default nextConfig;
