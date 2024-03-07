// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IOurProjectsGrid} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const OurProjectsGrid: FC<IOurProjectsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-12 px-4 bg-white">
				<div className="container px-0 mx-auto flex flex-col items-center gap-6 lg:gap-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-blue-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<Pagination
						contentType="OurProjectsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.ourProjects}
						tailwindStyling={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-0 sm:px-4 lg:-m-4 gap-16 lg:gap-6`}
					/>
				</div>
			</div>
		</>
	);
};

export default OurProjectsGrid;
