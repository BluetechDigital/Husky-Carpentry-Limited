// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOurLocation} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const OurLocation: FC<IOurLocation> = ({title, paragraph}) => {
	return (
		<>
			<div className="bg-white">
				<div className="container x-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={`${
							title && paragraph
								? "flex flex-col items-center py-12 sm:py-16 px-4"
								: "hidden"
						}`}
					>
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
				</div>
				<div>
					<iframe
						width="100%"
						height="350"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gatcombe%20House,%20Copnor%20Road,%20Portsmouth,%20England,%20PO3%205EJ+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default OurLocation;
