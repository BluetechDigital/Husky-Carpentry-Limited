// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import OurClients from "../OurClients";
import OurServices from "../OurServices";
import ContactForm from "../ContactForm";
import OurLocation from "../OurLocation";
import ErrorPage from "../Global/ErrorPage";
import GettingStarted from "../GettingStarted";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import OurProjectsGrid from "../OurProjectsGrid";
import TestimonialsGrid from "../TestimonialsGrid";
import TitleContentImage from "../TitleContentImage";
import TestimonialsSlider from "../TestimonialsSlider";
import OurServicesGridTwo from "../OurServicesGridTwo";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;
	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` ? (
							<>
								<Hero heroSlider={item?.heroSlider} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TitleContentImage` ? (
							<>
								<TitleContentImage
									title={item?.title}
									image={item?.image}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayContentOption={item?.displayContentOption}
									displayBackgroundIcon={item?.displayBackgroundIcon}
									displayBackgroundColor={item?.displayBackgroundColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurClients` ? (
							<>
								<OurClients
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` ? (
							<>
								<OurServices
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_OurServicesGridTwo` ? (
							<>
								<OurServicesGridTwo
									title={item?.title}
									buttonLink={item?.buttonLink}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurLocation` ? (
							<>
								<OurLocation title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_GettingStarted` ? (
							<>
								<GettingStarted
									title={item?.title}
									subtitle={item?.subtitle}
									stepOne={item?.stepOne}
									stepTwo={item?.stepTwo}
									stepThree={item?.stepThree}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_OurProjectsGrid` ? (
							<>
								<OurProjectsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									paragraph={item?.paragraph}
									itemsDisplayedPerPage={item?.itemsDisplayedPerPage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsSlider` ? (
							<>
								<TestimonialsSlider />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsGrid` ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
