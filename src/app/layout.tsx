import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Leon Lonsdale',
	description:
		'Personal Portfolio of Leon Lonsdale, fullstack web developer utilising modern technologies to build clean, cutting edge web applications.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
			<head>
				<script>
					{`
            (function() {
              const storedTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
              document.documentElement.classList.toggle("dark", initialTheme === "dark");
            })();
          `}
				</script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} grid min-h-[100dvh] grid-rows-[40px_1fr_auto] bg-background text-foreground antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
