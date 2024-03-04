"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import NoticeInfoBanner from "../NoticeInfoBanner";
import Paragraph from "@/components/Elements/Paragraph";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hover*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav className={styles.navbar + ` z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
				<div className="flex px-4 py-1 bg-white border-t-4 border-solid border-blue-default">
					<div className="container mx-auto bg-white w-full lg:w-[40%]">
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Husky Carpentry Limited Logo"
								src="/img/logos/husky-carpentry-logo.png"
								className="object-contain object-center w-[65px] h-[65px]"
							/>
						</Link>
					</div>
					<div className="w-full lg:w-[60%] flex justify-start gap-8 2xl:gap-12 xl:gap-24">
						<div className="w-full mx-auto hidden lg:flex items-center justify-center">
							<div className="hidden lg:flex items-center gap-8">
								<ul className="flex lg:items-center">
									{globalContext?.navbarMenuLinks?.length > 0 ? (
										globalContext?.navbarMenuLinks?.map(
											(item: any, keys: number) => (
												<Fragment key={keys}>
													{item?.node?.url === "/services" ? (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="relative group py-0 px-8"
															onClick={displayOurServicesSublinks}
														>
															<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
																<Link
																	href={`${item?.node?.url}`}
																	className="font-bold text-pureBlack group-hover:text-blue-two text-tiny text-center"
																>
																	{item?.node?.label}
																</Link>
																<Image
																	width={550}
																	height={550}
																	alt="Black Arrow Icon"
																	src="/svg/navigation-menu-dropdown-arrow-black.svg"
																	className={`${
																		ourServicesSublinksOpen
																			? "rotate-180"
																			: "rotate-0"
																	} cursor-pointer w-[22px] h-[22px] object-contain object-center`}
																/>
															</div>
															{ourServicesSublinksOpen ? (
																<>
																	<div
																		onMouseLeave={resetNavbarStyling}
																		onMouseEnter={displayNavBackgroundColor}
																	></div>
																</>
															) : null}
														</motion.li>
													) : (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
														>
															<Link
																href={`${item?.node?.url}`}
																className="py-0 px-8 font-bold text-pureBlack hover:text-blue-two text-tiny text-center"
															>
																{item?.node?.label}
															</Link>
														</motion.li>
													)}
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</ul>
							</div>
							<Link href="/contact" target="">
								<div className="py-4 pl-4 pr-10 cursor-pointer bg-blue-default hover:bg-blue-dark transition-all ease-in-out duration-500">
									<span className="relative flex items-center justify-center pl-4 text-lightGrey text-tiny text-center font-semibold">
										Get a quote today
										<Image
											width={550}
											height={550}
											alt="Black Arrow Icon"
											src="/svg/navigation-menu-dropdown-arrow-white.svg"
											className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
										/>
									</span>
								</div>
							</Link>
						</div>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col lg:hidden items-center justify-center"
					>
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={
								menuActive
									? styles.navToggleOpen
									: styles.navToggle +
									  ` ${
											globalContext?.themesOptionsContent?.displayNoticeBanner
												? "top-[62.5px]"
												: "top-[20px]"
									  }`
							}
						>
							<span aria-hidden="true"></span>
						</button>
					</motion.div>
				</div>

				{/* Hidden Tablet & Mobile  Side Menu */}
				<div className={menuActive ? "flex flex-col lg:hidden" : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
