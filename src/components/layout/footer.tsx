import { Container } from '@/components/utility/container';

export const Footer = () => {
	return (
		<footer className='sticky left-0 top-0 flex items-center bg-gray-950 py-2 text-sm text-gray-300 backdrop-blur-md'>
			<Container className='flex w-full max-w-7xl flex-col items-center justify-center px-4'>
				<p>&copy; Leon Lonsdale 2024</p>
				<p>Made with ❤️ using NextJS 15, Tailwind CSS, and TypeScript. Powered by Vercel.</p>
			</Container>
		</footer>
	);
};
