"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { House, Image as ImageIcon, Handshake, Trophy, Calendar, Users, Info, Phone } from 'lucide-react';

const NAV_ITEMS = [
	{ id: 'home', label: 'Home', activeIcon: '/Home.svg', icon: House, href: '/' },
	{ id: 'image', label: 'Image', activeIcon: '/Picture.svg', icon: ImageIcon, href: '/gallery' },
	{ id: 'activity', label: 'Activity', activeIcon: '/Sponsor.svg', icon: Handshake, href: '/activity' },
	{ id: 'updates', label: 'Updates', activeIcon: '/Prizes.svg', icon: Trophy, href: '/updates' },
	{ id: 'calendar', label: 'Calendar', activeIcon: '/Calendar.svg', icon: Calendar, href: '/calendar' },
	{ id: 'users', label: 'Users', activeIcon: '/People.svg', icon: Users, href: '/users' },
	{ id: 'info', label: 'Info', activeIcon: '/About.svg', icon: Info, href: '/faq' },
	{ id: 'phone', label: 'Phone', activeIcon: '/Contact.svg', icon: Phone, href: '/contact' },
];

const GlassNavBar: React.FC = () => {
	const pathname = usePathname();
	const [hoveredTab, setHoveredTab] = useState<string | null>(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [mounted, setMounted] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!navRef.current) return;
		const rect = navRef.current.getBoundingClientRect();
		setMousePos({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	const handleMouseLeave = () => {
		setHoveredTab(null);
	};

	return (
		<div className="fixed sm:block hidden top-8 left-10 z-50 perspective-[1000px]">
			<div className="relative group">

				<div />

				<nav
					ref={navRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="
            relative
            flex items-center gap-2 px-6 py-[5]
            rounded-full
            bg-white/5 
            backdrop-blur-[20px] 
            backdrop-saturate-150
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
            overflow-hidden
            transition-all duration-300 ease-out
             hover:border-white/20 
            chromatic-shadow
          "
				>
					<div
						className="absolute inset-0 rounded-full pointer-events-none"
						style={{
							background: `
                radial-gradient(
                  150px circle at ${mousePos.x}px ${mousePos.y}px, 
                  rgba(255,255,255,0.3), 
                  transparent 60%
                )
              `,
							mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
							maskComposite: 'exclude',
							WebkitMaskComposite: 'xor',
							padding: '1px',
						}}
					/>

					<div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
					<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-30 pointer-events-none rounded-t-full" />

					{NAV_ITEMS.map((item) => {
						const isActive = pathname === item.href;
						const isHovered = hoveredTab === item.id;
						const LucideIcon = item.icon;

						return (
							<Link
								key={item.id}
								href={item.href}
								onMouseEnter={() => setHoveredTab(item.id)}
								onMouseLeave={() => setHoveredTab(null)}
								className="
                  relative
                  group/item
                  flex items-center justify-center
                  w-12 h-12 md:w-18 md:h-12
                  rounded-full
                  transition-all duration-300 ease-out
                  focus:outline-none
                "
							>
								<div
									className={`
                    relative z-10 
                    transition-all duration-500 ease-out
                    ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}
                    ${isActive && mounted ? 'scale-150 -rotate-12' : 'scale-100 rotate-0'}
                  `}
								>
									{isActive ? (
										<Image
											src={item.activeIcon}
											alt={item.label}
											width={26}
											height={26}
										/>
									) : (
										<LucideIcon
											size={26}
											strokeWidth={2}
										/>
									)}
								</div>

								<span
									className={`
                    absolute -top-10 
                    px-2 py-1 
                    bg-black/50 backdrop-blur-md 
                    border border-white/10 
                    rounded-md 
                    text-[10px] font-medium tracking-wide uppercase text-white/90
                    transition-all duration-300
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                  `}
								>
									{item.label}
								</span>
							</Link>
						);
					})}
				</nav>

				<div
					className="
            absolute -bottom-8 left-0 right-0 h-full 
            opacity-20 blur-sm scale-y-[-1] 
            pointer-events-none
            mask-image-gradient-to-t
          "
					style={{
						maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
					}}
				>
				</div>
			</div>
		</div>
	);
};

export default GlassNavBar;