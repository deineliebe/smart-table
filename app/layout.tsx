import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/widgets/footer';
import styles from '../src/shared/ui/styles.module.css';
import { Sidebar } from '@/widgets/sidebar';

const inter = Inter({ weight: ['500', '700'], subsets: ['latin'] });

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
				<div className={styles.page}>
					<Sidebar />
					<main className={styles.main}>{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
