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
			<div className="pt-12 sm:pt-16 py-4 px-4 bg-white px-4">
				<div className="container px-0 mx-auto flex flex-col items-center gap-6">
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
						tailwindStyling={`grid py-6 px-0 sm:px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
					/>
				</div>
			</div>
		</>
	);
};

export default OurProjectsGrid;
