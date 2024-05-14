import React from "react";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap"
});

export const metadata: Metadata = {
	title: "Portfolio de Cyril Clément",
	description: "Portfolio personnel de Cyril Clément"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
