// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Styling
import styles from "../styles/components/TitleContentImage.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	paragraph,
	buttonLink,
	displayContentOption,
	displayBackgroundIcon,
	displayBackgroundColor,
}) => {
	let titleColor;
	let textareaColor;
	let buttonColor;
	let buttonHoverColor;
	let backgroundColor;

	switch (displayBackgroundColor) {
		case "White":
			titleColor = "text-black";
			textareaColor = "text-black";
			buttonColor = "bg-blue-default";
			buttonHoverColor = "hover:bg-blue-dark";
			backgroundColor = "bg-white";
			break;
		case "Grey":
			titleColor = "text-black";
			textareaColor = "text-black";
			buttonColor = "bg-blue-default";
			buttonHoverColor = "hover:bg-blue-dark";
			backgroundColor = "bg-lightGreyTwo";
			break;
		case "Blue":
			titleColor = "text-white";
			textareaColor = "text-white";
			buttonColor = "bg-blue-darker";
			buttonHoverColor = "hover:bg-blue-dark";
			backgroundColor = "bg-blue-default";
			break;
		case "DarkBlue":
			titleColor = "text-white";
			textareaColor = "text-white";
			buttonColor = "bg-blue-default";
			buttonHoverColor = "hover:bg-blue-dark";
			backgroundColor = "bg-blue-darker";
			break;
	}
	return (
		<>
			<div className={styles.titleContentImage + ` ${backgroundColor}`}>
				<div
					className={`flex ${
						displayContentOption == "Right" ? "flex-col-reverse" : "flex-col"
					} gap-y-4 gap-x-16 p-0 mx-auto items-center justify-center lg:flex-row`}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Right"
								? "relative bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px]"
								: "hidden"
						}`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					>
						<Image
							width={550}
							height={550}
							alt="Husky Carpentry Logo White"
							src="/svg/logo/husky-carpentry-logo-white.svg"
							className={
								displayBackgroundIcon
									? "absolute ml-2 mb-2 bottom-0 left-0 w-[50px] h-[50px] object-contain object-center"
									: "hidden"
							}
						/>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Left" ? "lg:items-end" : "lg:items-start"
						} lg:px-8 lg:w-1/2 h-full`}
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`flex flex-col items-center py-10 px-4 lg:items-baseline ${
								displayContentOption == "Left" ? "xl:pl-12" : "xl:px-"
							}`}
						>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={`my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg md:text-xl ${titleColor}`}
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling={`lg:max-w-xl leading-[1.75rem] text-base text-center lg:text-left ${textareaColor}`}
							/>
							<div className={buttonLink?.title ? "flex mt-6" : "hidden"}>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={`${buttonLink?.url ? "block" : "hidden"}`}
								>
									<div
										className={`py-4 pl-4 pr-10 w-fit mx-auto lg:mx-0 cursor-pointer ${buttonColor} ${buttonHoverColor} transition-all ease-in-out duration-500`}
									>
										<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
											{buttonLink?.title}
											<Image
												width={550}
												height={550}
												alt="Black Arrow Icon"
												src="/svg/navigation-menu-dropdown-arrow-white.svg"
												className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
											/>
										</h3>
									</div>
								</Link>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Left"
								? "relative bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px]"
								: "hidden"
						}`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					>
						<Image
							width={550}
							height={550}
							alt="Husky Carpentry Logo White"
							src="/svg/logo/husky-carpentry-logo-white.svg"
							className={
								displayBackgroundIcon
									? "absolute mr-2 mb-2 bottom-0 right-0 w-[50px] h-[50px] object-contain object-center"
									: "hidden"
							}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
