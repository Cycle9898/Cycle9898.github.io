/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	distDir: "./dist",
	webpack: config => {
		config.module.rules.push({
			test: /\.(pdf)$/,
			type: "asset/resource"
		});
		return config;
	}
};

export default nextConfig;
