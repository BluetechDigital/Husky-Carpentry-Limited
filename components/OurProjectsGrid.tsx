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
			<div className="py-24 bg-white px-4">
				<div className="container px-0 mx-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center mb-10"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="max-w-sm mx-auto xl:mx-0 text-center xl:text-left text-base text-blue-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center font-extrabold text-lg md:text-xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black text-base text-center"
						/>
					</motion.div>
					<Pagination
						contentType="OurProjectsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.ourProjects}
						tailwindStyling={`grid mb-32 px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-cols-1 md:grid-cols-2`}
					/>
				</div>
			</div>
		</>
	);
};

export default OurProjectsGrid;
