import { hostname } from 'os';

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "",
                pathname: "/img/**",
            },
        ],
    }
};

export default nextConfig;
