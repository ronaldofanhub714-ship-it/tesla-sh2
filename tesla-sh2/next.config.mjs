/** @type {import('next').NextConfig} */
export default {
  // Generate a fully‑static site (required for Cloudflare Pages)
  output: 'export',
  images: { unoptimized: true },
};
