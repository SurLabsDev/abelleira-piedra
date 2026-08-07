import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Fijo la raiz porque hay un package-lock.json suelto en el home del usuario
    // y sin esto Next infiere mal el workspace root.
    turbopack: { root: __dirname },
    experimental: {
        // Para que los iconos entren de a uno y no la familia entera.
        optimizePackageImports: ["@phosphor-icons/react"],
    },
};

export default nextConfig;
