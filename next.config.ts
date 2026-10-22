import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a plain folder of files (out/) for hosts without GitHub or a Node server,
// e.g. drag-and-drop preview hosting. Images are served as-is in that mode.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport ? { output: "export", images: { unoptimized: true } } : {};

export default nextConfig;
