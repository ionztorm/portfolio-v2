import { RiDiscordFill, RiGithubFill, RiTwitterXFill } from 'react-icons/ri';

export const SocialLinks = {
	github: { url: 'https://github.com/ionztorm', icon: RiGithubFill },
	twitter: { url: 'https://x.com/LeonLonsdale', icon: RiTwitterXFill },
	discord: { url: 'https://discord.gg/jdH8B8AMzr', icon: RiDiscordFill },
} as const;

export type TSocialLinks = typeof SocialLinks;
export type TSocials = keyof TSocialLinks;
