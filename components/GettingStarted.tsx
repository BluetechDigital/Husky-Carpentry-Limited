// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IGettingStarted} from "@/types/components";
import fadeInUp, {initial, stagger} from "@/animations/animations";

// Styling
import styles from "../styles/components/GettingStarted.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const GettingStarted: FC<IGettingStarted> = ({
	title,
	subtitle,
	stepOne,
	stepTwo,
	stepThree,
}) => {
	return (
		<>
			<div
				className={styles.gettingStarted + ` relative pt-24 pb-4 bg-pureBlack`}
			>
				<div className="container px-4 mx-auto">
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center text-base text-blue-default"
					>
						{subtitle}
					</motion.h4>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mt-3 mb-10 max-w-xl mx-auto uppercase text-white text-center font-extrabold text-lg md:text-xl"
					>
						{title}
					</motion.h3>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="mb-2 p-6 lg:p-0 bg-lightGreyTwo lg:bg-pureBlack"
					>
						<div className="container px-0 mx-auto">
							<div className={styles.stepOne + ` relative p-6 sm:p-8`}>
								<Image
									alt={stepOne?.image?.altText}
									src={stepOne?.image?.sourceUrl}
									width={stepOne?.image?.mediaDetails.width}
									height={stepOne?.image?.mediaDetails.height}
									className={`${
										stepOne?.image?.sourceUrl
											? "absolute top-0 left-0 h-full w-full object-cover object-center"
											: "hidden"
									}`}
								/>
								<div className="relative max-w-sm lg:max-w-xl mx-auto lg:mr-0 lg:ml-auto p-6 sm:p-10 bg-white">
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-center lg:text-left text-medium md:text-lg uppercase text-black mb-6"
									>
										{stepOne?.title}
									</motion.h3>
									<Paragraph
										content={stepOne?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-tiny sm:text-base text-black leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="mb-2 p-6 lg:p-0 bg-lightGreyTwo lg:bg-pureBlack"
					>
						<div className="container px-0 mx-auto">
							<div className={styles.stepTwo + ` relative p-6 sm:p-8`}>
								<Image
									alt={stepTwo?.image?.altText}
									src={stepTwo?.image?.sourceUrl}
									width={stepTwo?.image?.mediaDetails.width}
									height={stepTwo?.image?.mediaDetails.height}
									className={`${
										stepTwo?.image?.sourceUrl
											? "absolute top-0 left-0 h-full w-full object-cover object-center"
											: "hidden"
									}`}
								/>
								<div className="relative max-w-sm lg:max-w-xl mx-auto lg:ml-0 lg:mr-auto p-6 sm:p-10 bg-white">
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-center lg:text-left text-medium md:text-lg uppercase text-black mb-6"
									>
										{stepTwo?.title}
									</motion.h3>
									<Paragraph
										content={stepTwo?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-tiny sm:text-base text-black leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="mb-2 p-6 lg:p-0 bg-lightGreyTwo lg:bg-pureBlack"
					>
						<div className="container px-0 mx-auto">
							<div className={styles.stepThree + ` relative p-6 sm:p-8`}>
								<Image
									alt={stepThree?.image?.altText}
									src={stepThree?.image?.sourceUrl}
									width={stepThree?.image?.mediaDetails.width}
									height={stepThree?.image?.mediaDetails.height}
									className={`${
										stepThree?.image?.sourceUrl
											? "absolute top-0 left-0 h-full w-full object-cover object-center"
											: "hidden"
									}`}
								/>
								<div className="relative max-w-sm lg:max-w-xl mx-auto lg:mr-0 lg:ml-auto p-6 sm:p-10 bg-white">
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-center lg:text-left text-medium md:text-lg uppercase text-black mb-6"
									>
										{stepThree?.title}
									</motion.h3>
									<Paragraph
										content={stepThree?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-tiny sm:text-base text-black leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default GettingStarted;
