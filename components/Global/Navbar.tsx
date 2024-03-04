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
				<div className="flex p-0 bg-white border-t-4 border-solid border-blue-default">
					<div className="container mx-auto bg-white w-full lg:w-[40%]">
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Husky Carpentry Limited Logo"
								src="/img/logos/husky-carpentry-logo.png"
								className="object-contain object-center w-full h-[65px] lg:h-[75px]"
							/>
						</Link>
					</div>
					<div className="py-2 lg:pb-5 2xl:pb-11 px-6 xl:px-16 2xl:px-28 w-full lg:w-[60%] flex justify-start gap-8 2xl:gap-12 xl:gap-24">
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="hidden lg:flex items-center justify-center gap-6"
						>
							<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-two sm:mr-1">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path
											d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</g>
								</svg>
							</div>
							<div className="flex flex-col items-baseline justify-center">
								<Link
									className="font-semibold text-tiny tracking-wide text-black"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									<span className="">Call Us:</span>
									<span className="hover:underline hover:text-blue-default">
										{globalContext?.themesOptionsContent?.phoneNumber}
									</span>
								</Link>
								<Paragraph
									content={"Monday - Saturday"}
									tailwindStyling="px-4 lg:px-0 max-w-full lg:max-w-xl text-tiny text-black text-center lg:text-left"
								/>
							</div>
						</motion.div>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="hidden lg:flex items-center justify-center gap-6"
						>
							<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-two sm:mr-1">
								<svg
									fill="#ffffff"
									height="200px"
									width="200px"
									version="1.1"
									id="Capa_1"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 368.553 368.553"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<g>
											<g>
												<path d="M184.277,0c-71.683,0-130,58.317-130,130c0,87.26,119.188,229.855,124.263,235.883c1.417,1.685,3.504,2.66,5.705,2.67 c0.011,0,0.021,0,0.032,0c2.189,0,4.271-0.957,5.696-2.621c5.075-5.926,124.304-146.165,124.304-235.932 C314.276,58.317,255.96,0,184.277,0z M184.322,349.251C160.385,319.48,69.277,201.453,69.277,130c0-63.411,51.589-115,115-115 s115,51.589,115,115C299.276,203.49,208.327,319.829,184.322,349.251z"></path>
												<path d="M184.277,72.293c-30.476,0-55.269,24.793-55.269,55.269s24.793,55.269,55.269,55.269s55.269-24.793,55.269-55.269 S214.753,72.293,184.277,72.293z M184.277,167.83c-22.204,0-40.269-18.064-40.269-40.269s18.064-40.269,40.269-40.269 s40.269,18.064,40.269,40.269S206.48,167.83,184.277,167.83z"></path>
											</g>
											<g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
											<g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
											<g> </g> <g> </g> <g> </g>
										</g>
									</g>
								</svg>
							</div>
							<div className="flex flex-col items-baseline justify-center">
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									tailwindStyling="px-4 lg:px-0 max-w-[250px] text-tiny text-black text-center lg:text-left"
								/>
							</div>
						</motion.div>
						<motion.div className="flex flex-col lg:hidden">
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
				</div>
				<div
					className="relative lg:mt-[-15px] xl:mt-[-15px] 2xl:mt-[-35px] z-10 w-fit mx-auto hidden lg:flex items-center justify-center"
					style={{
						boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					}}
				>
					<div className="bg-white">
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
														className="relative group py-6 px-8"
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
															className="py-6 px-8 font-bold text-pureBlack hover:text-blue-two text-tiny text-center"
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
						<div className="opacity-0 xl:hidden" />
					</div>
					<Link href="/contact" target="">
						<div className="py-6 pl-4 pr-10 cursor-pointer bg-blue-default hover:bg-blue-dark transition-all ease-in-out duration-500">
							<span className="relative flex items-center justify-center pl-4 text-lightGrey text-tiny text-center font-semibold">
								Get a quote today
								<Image
									width={550}
									height={550}
									alt="Black Arrow Icon"
									src="/svg/navigation-menu-dropdown-arrow-white.svg"
									className="my-auto ml-2 absolute top-[-25px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
								/>
							</span>
						</div>
					</Link>
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
