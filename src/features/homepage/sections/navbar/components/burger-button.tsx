import type { BurgerButtonProps } from '@/features/homepage/sections/navbar/types/types';

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
				className={`h-0.5 w-6 bg-burger-colour transition-transform duration-300 ease-in-out before:absolute before:block before:h-0.5 before:w-6 before:bg-burger-colour before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:block after:h-0.5 after:w-6 after:bg-burger-colour after:transition-transform after:duration-300 after:ease-in-out after:content-[''] ${
					isOpen
						? 'before:-translate-y-0 after:-translate-y-0 after:-rotate-90 rotate-45 before:rotate-90'
						: 'before:-translate-y-[7px] after:translate-y-[7px]'
				}`}
			/>
		</button>
	);
};
