// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	servicesLinks,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col"}>
				<div className="lg:relative pt-[85px] lg:pt-[110px] lg:h-[60vh] flex flex-col lg:flex-row">
					<div
						className={
							styles.leftSideContent +
							" px-4 xl:px-28 py-16 lg:py-8 bg-blue-darkerTwo w-full xl:w-1/2 bg-cover bg-center bg-no-repeat"
						}
						style={{
							backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker.svg")`,
						}}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className="container px-4 lg:px-10 xl:px-0 mx-auto max-w-xl flex flex-col justify-center h-full"
						>
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left uppercase text-lg md:text-xl xl:text-3xl text-white font-extrabold xl:leading-[2.5rem]"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-2 text-white leading-[1.75rem] text-base text-center lg:text-left"
							/>
						</motion.div>
					</div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							styles.rightSideContent + " flex flex-col w-full xl:w-1/2"
						}
					>
						<Image
							alt={backgroundImage?.altText}
							src={backgroundImage?.sourceUrl}
							width={backgroundImage?.mediaDetails.width}
							height={backgroundImage?.mediaDetails.height}
							className={`${
								backgroundImage?.sourceUrl
									? "w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover object-center"
									: "hidden"
							}`}
						/>
					</motion.div>
				</div>
				<div className="relative flex flex-row py-0 justify-start items-center lg:justify-between">
					<ul className="hidden md:grid grid-cols-4 w-full lg:w-[70%] xl:w-[60%] 2xl:w-[55%] absolute mb-[130px] lg:mb-[-30px] 2xl:mb-[0px] right-0 flex-row items-center justify-end">
						{servicesLinks?.length > 0 ? (
							servicesLinks?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.li
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											key={keys}
											href={`${item?.buttonLink?.url}`}
											target={item?.buttonLink?.target}
										>
											<div
												className={`p-2 pr-0 hover:bg-blue-two w-full sm:min-h-[14vh] lg:min-h-[14vh] sm:max-h-[20vh] lg:max-h-[20vh] transition-all ease-in-out duration-500 ${
													keys === 0
														? "bg-blue-default"
														: keys === 1
														? "bg-blue-three"
														: keys === 2
														? "bg-blue-dark"
														: keys === 3
														? "bg-blue-darker"
														: "bg-blue-default"
												}`}
											>
												<Image
													alt={item?.icon?.altText}
													src={item?.icon?.sourceUrl}
													width={item?.icon?.mediaDetails?.width}
													height={item?.icon?.mediaDetails?.height}
													className={
														item?.icon?.sourceUrl
															? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
															: `hidden`
													}
												/>

												<span className="flex items-center justify-center pl-4">
													<Title
														content={item?.buttonLink?.title}
														tailwindStyling="text-white font-semibold text-base leading-[1.5rem] text-center tracking-[0.10rem]"
													/>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-white.svg"
														className="my-auto ml-2 mb-20 rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
													/>
												</span>
											</div>
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Hero;
