import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/widgets/footer';

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Smart table',
	description: 'Project for a Yandex Practicum project month'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div>
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
