// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<>
			<GlobalContext.Provider
				value={{
					blogs: globalProps?.blogs,
					mobileLinks: globalProps?.mobileLinks,
					testimonials: globalProps?.testimonials,
					aboutUsSublinks: globalProps?.aboutUsSublinks,
					copyrightLinks: globalProps?.copyrightLinks,
					locationsLinks: globalProps?.locationsLinks,
					footerMenuLinks: globalProps?.footerMenuLinks,
					blogsThreeCards: globalProps?.blogsThreeCards,
					navbarMenuLinks: globalProps?.navbarMenuLinks,
					featuredProjects: globalProps?.featuredProjects,
					servicesSublinks: globalProps?.servicesSublinks,
					themesOptionsContent: globalProps?.themesOptionsContent,
				}}
			>
				{children}
			</GlobalContext.Provider>
		</>
	);
};

export default GlobalContextProvider;
