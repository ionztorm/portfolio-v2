import { BurgerButtonProps } from '@/features/homepage/sections/navbar/types/types';

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
	return (
		<button
			type='button'
			onClick={() => onClick(!isOpen)}
			className='group relative flex h-5 w-8 items-center justify-center sm:hidden'
			aria-label='Toggle Menu'
			aria-expanded={isOpen}
		>
			<div
				className={`h-0.5 w-6 bg-slate-50 transition-transform duration-300 ease-in-out before:absolute before:block before:h-0.5 before:w-6 before:bg-slate-50 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:block after:h-0.5 after:w-6 after:bg-slate-50 after:transition-transform after:duration-300 after:ease-in-out after:content-[''] ${
					isOpen
						? 'rotate-45 before:-translate-y-0 before:rotate-90 after:-translate-y-0 after:-rotate-90'
						: 'before:-translate-y-1.5 after:translate-y-1.5'
				}`}
			/>
		</button>
	);
};
