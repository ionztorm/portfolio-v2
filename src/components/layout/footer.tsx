import { Container } from '@/components/utility/container';

export const Footer = () => {
	return (
		<footer className='sticky top-0 left-0 flex items-center bg-footer-background py-2 text-footer-text text-sm backdrop-blur-md'>
			<Container className='flex w-full max-w-7xl flex-col items-center justify-center px-4 py-7 text-center'>
				<p>&copy; Leon Lonsdale 2024</p>
				<p>Made with ☕️ using NextJS 15, Tailwind CSS, and TypeScript. Powered by Vercel.</p>
			</Container>
		</footer>
	);
};
