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
				className={styles.gettingStarted + ` relative py-24 bg-lightGreyTwo`}
			>
				<div className="absolute top-0 right-0">
					<svg
						className="mt-10"
						width="798"
						height="798"
						viewBox="0 0 798 798"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.1">
							<path
								d="M797.81 796.481L698.701 697.372C729.839 655.792 748.256 604.148 748.256 548.328C748.256 442.384 681.803 351.629 588.58 315.365L797.81 1.51892C798 1.13919 798 0.759458 797.81 0.569593C797.81 0.189864 797.43 0 797.051 0H0.949322C0.569593 0 0.189864 0.189864 0.189864 0.569593C0.189864 0.949322 0 1.13919 0.189864 1.51892L178.852 269.607L0.189864 448.08C0 448.27 0 448.46 0 448.839C0 449.219 0 449.409 0.189864 449.599C0.379729 449.789 0.569593 449.789 0.949322 449.789C1.32905 449.789 1.51892 449.789 1.70878 449.599L179.991 271.316L281.949 424.347C260.874 460.801 248.722 503.141 248.722 548.328C248.722 685.98 360.742 798 498.584 798C579.656 798 651.994 759.078 697.562 698.891L796.291 797.62C796.481 797.81 796.671 797.81 797.051 797.81C797.43 797.81 797.62 797.81 797.81 797.62C798 797.43 798 797.241 798 796.861C798 796.481 798 796.671 797.81 796.481ZM181.32 269.797L250.431 200.687C250.621 200.497 250.621 200.307 250.621 199.927C250.621 199.547 250.621 199.358 250.431 199.168C250.051 198.788 249.482 198.788 249.102 199.168L180.181 268.089L2.6581 1.89864H795.342L586.871 314.605C559.341 304.163 529.722 298.467 498.774 298.467C406.879 298.467 326.567 348.211 283.088 422.258L181.32 269.797ZM585.732 316.314L398.905 596.364L284.037 424.157C326.946 350.3 407.069 300.555 498.394 300.555C529.152 300.365 558.581 306.061 585.732 316.314ZM498.584 796.101C361.882 796.101 250.621 684.841 250.621 548.328C250.621 503.9 262.393 462.13 283.088 425.866L398.146 598.453C398.335 598.642 398.525 598.832 398.905 598.832C399.285 598.832 399.475 598.642 399.665 598.453L587.44 317.074C680.284 352.958 746.357 443.143 746.357 548.518C746.357 603.769 728.13 655.032 697.372 696.233L598.642 597.503C598.263 597.124 597.693 597.124 597.313 597.503C597.123 597.693 597.123 597.883 597.123 598.263C597.123 598.642 597.123 598.832 597.313 599.022L696.233 697.941C651.045 757.369 579.276 796.101 498.584 796.101Z"
								fill="#116dff"
							></path>
							<path
								d="M175.055 572.251H0.949322C0.379729 572.251 0 572.631 0 573.201V747.306C0 747.876 0.379729 748.255 0.949322 748.255H175.055C175.625 748.255 176.004 747.876 176.004 747.306V573.201C176.004 572.631 175.625 572.251 175.055 572.251ZM174.106 746.357H1.89864V574.15H174.106V746.357Z"
								fill="#116dff"
							></path>
							<path
								d="M460.612 225.749C460.801 225.939 460.991 225.939 461.181 225.939C461.371 225.939 461.561 225.939 461.751 225.749L573.771 151.132C573.961 150.942 574.15 150.752 574.15 150.373C574.15 149.993 573.961 149.803 573.771 149.613L461.751 74.9964C461.371 74.8065 460.991 74.8065 460.612 74.9964L348.592 149.613C348.402 149.803 348.212 149.993 348.212 150.373C348.212 150.752 348.402 150.942 348.592 151.132L460.612 225.749ZM461.181 76.7052L571.492 150.183L461.181 223.66L350.87 150.183L461.181 76.7052Z"
								fill="#116dff"
							></path>
						</g>
					</svg>
				</div>
				<div className="relative container px-4 mx-auto">
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
						className="mt-3 mb-10 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center lg:text-left font-extrabold text-lg md:text-xl"
					>
						{title}
					</motion.h3>
					<div className="bg-blue-default mb-2">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-wrap -mx-4"
						>
							<div className="relative w-full lg:w-1/2 px-4 order-1 lg:order-0">
								<div className="hidden lg:block lg:absolute top-0 left-0 ml-20 mt-8">
									<svg
										className="h-20 lg:h-auto"
										width="83"
										height="213"
										viewBox="0 0 83 213"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.75"
											d="M1.776 47.552H0.776V48.552H1.776V47.552ZM1.776 1.75999V0.759995H0.776V1.75999H1.776ZM81.552 1.75999H82.552V0.759995H81.552V1.75999ZM81.552 212V213H82.552V212H81.552ZM30.288 212H29.288V213H30.288V212ZM30.288 47.552H31.288V46.552H30.288V47.552ZM2.776 47.552V1.75999H0.776V47.552H2.776ZM1.776 2.75999H81.552V0.759995H1.776V2.75999ZM80.552 1.75999V212H82.552V1.75999H80.552ZM81.552 211H30.288V213H81.552V211ZM31.288 212V47.552H29.288V212H31.288ZM30.288 46.552H1.776V48.552H30.288V46.552Z"
											fill="#11acff"
										></path>
									</svg>
								</div>
								<div className="relative z-10 p-6 py-10 lg:py-6 lg:pl-32 xl:pl-64 lg:pt-12 xl:pt-16">
									<h3 className="mb-2 text-lg font-semibold text-white uppercase text-center lg:text-left">
										{stepOne?.title}
									</h3>
									<Paragraph
										content={stepOne?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-base text-white leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
							<div
								className={
									styles.stepOne + ` w-full lg:w-1/2 px-4 order-0 lg:order-1`
								}
							>
								<Image
									alt={stepOne?.image?.altText}
									src={stepOne?.image?.sourceUrl}
									width={stepOne?.image?.mediaDetails.width}
									height={stepOne?.image?.mediaDetails.height}
									className={`${
										stepOne?.image?.sourceUrl
											? "lg:h-full lg:max-h-[400px] xl:max-h-[350px] lg:min-h-[300px] w-full clip-path-left object-cover object-center"
											: "hidden"
									}`}
								/>
							</div>
						</motion.div>
					</div>
					<div className="bg-blue-default mb-2">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-wrap -mx-4"
						>
							<div className={styles.stepTwo + ` w-full lg:w-1/2 px-4`}>
								<Image
									alt={stepTwo?.image?.altText}
									src={stepTwo?.image?.sourceUrl}
									width={stepTwo?.image?.mediaDetails.width}
									height={stepTwo?.image?.mediaDetails.height}
									className={`${
										stepTwo?.image?.sourceUrl
											? "h-[300px] lg:h-full lg:max-h-[400px] xl:max-h-[350px] lg:min-h-[300px] w-full clip-path-right object-cover object-center"
											: "hidden"
									}`}
								/>
							</div>
							<div className="relative w-full lg:w-1/2 px-4">
								<div className="hidden lg:block lg:absolute top-0 right-0 mr-20 mt-8">
									<svg
										className="h-20 lg:h-auto"
										width="148"
										height="215"
										viewBox="0 0 148 215"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.75"
											d="M2.232 176.544L1.61012 175.761L1.232 176.061V176.544H2.232ZM11.16 169.344L10.5229 168.573L11.7147 170.176L11.16 169.344ZM55.512 131.04L54.838 130.301L54.8316 130.307L55.512 131.04ZM88.92 49.248L88.149 49.8849L88.92 49.248ZM55.224 50.976L54.4273 50.3716L54.424 50.376L55.224 50.976ZM49.176 74.016V75.016H50.176V74.016H49.176ZM1.656 74.016L0.656277 73.9925L0.632194 75.016H1.656V74.016ZM12.024 33.12L11.1718 32.5967L11.1652 32.6077L12.024 33.12ZM38.232 8.92799L37.8039 8.02423L37.7977 8.02722L38.232 8.92799ZM126.072 18.72L125.359 19.4212L125.365 19.4271L126.072 18.72ZM122.616 121.824L123.396 122.45L123.399 122.446L122.616 121.824ZM69.048 173.088L68.438 172.296L66.1099 174.088H69.048V173.088ZM146.808 173.088H147.808V172.088H146.808V173.088ZM146.808 213.12V214.12H147.808V213.12H146.808ZM2.232 213.12H1.232V214.12H2.232V213.12ZM2.85388 177.327C6.11812 174.735 8.49662 172.837 9.98775 171.634C10.7317 171.034 11.2607 170.603 11.5692 170.344C11.7095 170.226 11.8406 170.114 11.9166 170.038C11.9201 170.034 11.9985 169.959 12.066 169.856C12.0855 169.826 12.1316 169.752 12.1692 169.65C12.1918 169.588 12.3023 169.283 12.1546 168.924C11.9601 168.452 11.5303 168.329 11.3264 168.309C11.1449 168.291 11.0048 168.329 10.9633 168.34C10.8598 168.368 10.7832 168.407 10.766 168.416C10.735 168.432 10.7095 168.447 10.6934 168.456C10.6606 168.476 10.6295 168.496 10.6053 168.512L11.7147 170.176C11.7265 170.168 11.7245 170.17 11.7138 170.176C11.7088 170.179 11.6926 170.189 11.6692 170.201C11.6596 170.205 11.5888 170.242 11.4895 170.269C11.4501 170.28 11.3116 170.317 11.1313 170.3C10.9285 170.28 10.4995 170.157 10.3053 169.686C10.158 169.328 10.2683 169.024 10.2904 168.964C10.3274 168.862 10.3726 168.791 10.3907 168.763C10.4307 168.702 10.468 168.66 10.4758 168.652C10.4894 168.636 10.4995 168.626 10.5024 168.623C10.5089 168.617 10.4978 168.628 10.4517 168.668C10.4111 168.704 10.3553 168.751 10.2828 168.812C9.99129 169.057 9.47631 169.478 8.73225 170.078C7.24738 171.275 4.87388 173.169 1.61012 175.761L2.85388 177.327ZM11.7971 170.115C30.6196 154.557 45.4202 141.776 56.1925 131.773L54.8316 130.307C44.0998 140.272 29.3324 153.027 10.5229 168.573L11.7971 170.115ZM56.186 131.779C67.1804 121.749 76.449 111.227 83.9853 100.213L82.3347 99.0833C74.895 109.957 65.7316 120.363 54.838 130.301L56.186 131.779ZM83.9853 100.213C91.5555 89.1486 95.392 78.2991 95.392 67.68H93.392C93.392 77.7969 89.7405 88.2594 82.3347 99.0833L83.9853 100.213ZM95.392 67.68C95.392 59.662 93.5341 53.2633 89.691 48.6111L88.149 49.8849C91.6019 54.0647 93.392 59.9539 93.392 67.68H95.392ZM89.691 48.6111C85.803 43.9047 80.0098 41.624 72.504 41.624V43.624C79.5902 43.624 84.741 45.7593 88.149 49.8849L89.691 48.6111ZM72.504 41.624C64.9112 41.624 58.8499 44.5419 54.4273 50.3716L56.0207 51.5804C60.0461 46.2741 65.5048 43.624 72.504 43.624V41.624ZM54.424 50.376C50.2127 55.991 48.176 63.9159 48.176 74.016H50.176C50.176 64.1481 52.1713 56.713 56.024 51.576L54.424 50.376ZM49.176 73.016H1.656V75.016H49.176V73.016ZM2.65572 74.0395C3.03678 57.8445 6.46459 44.3922 12.8828 33.6323L11.1652 32.6077C4.52741 43.7357 1.04322 57.5475 0.656277 73.9925L2.65572 74.0395ZM12.8762 33.6432C19.5039 22.8496 28.1001 14.9232 38.6663 9.82876L37.7977 8.02722C26.8599 13.3008 17.9841 21.5024 11.1718 32.5967L12.8762 33.6432ZM38.6601 9.83173C49.4581 4.71688 61.406 2.15199 74.52 2.15199V0.151985C61.138 0.151985 48.8939 2.7711 37.8039 8.02425L38.6601 9.83173ZM74.52 2.15199C97.2068 2.15199 114.091 7.96503 125.359 19.4212L126.785 18.0187C115.013 6.05094 97.5292 0.151985 74.52 0.151985V2.15199ZM125.365 19.4271C136.863 30.9255 142.64 45.922 142.64 64.512H144.64C144.64 45.47 138.705 29.9385 126.779 18.0129L125.365 19.4271ZM142.64 64.512C142.64 84.8079 135.723 103.697 121.833 121.202L123.399 122.446C137.541 104.623 144.64 85.3041 144.64 64.512H142.64ZM121.836 121.198C107.879 138.596 90.0843 155.63 68.438 172.296L69.6581 173.88C91.4037 157.138 109.321 139.996 123.396 122.45L121.836 121.198ZM69.048 174.088H146.808V172.088H69.048V174.088ZM145.808 173.088V213.12H147.808V173.088H145.808ZM146.808 212.12H2.232V214.12H146.808V212.12ZM3.232 213.12V176.544H1.232V213.12H3.232Z"
											fill="#11acff"
										></path>
									</svg>
								</div>
								<div className="relative z-10 px-6 py-10 lg:py-6 lg:pr-32 lg:pt-12 xl:pt-16">
									<h3 className="lg:max-w-md mx-auto lg:mx-0 mb-2 text-lg font-semibold text-white uppercase text-center lg:text-left">
										{stepTwo?.title}
									</h3>
									<Paragraph
										content={stepTwo?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-base text-white leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
						</motion.div>
					</div>
					<div className="bg-blue-default mb-2">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-wrap -mx-4"
						>
							<div className="relative w-full lg:w-1/2 px-4 order-1 lg:order-0">
								<div className="hidden lg:block lg:absolute top-0 left-0 ml-20 mt-8">
									<svg
										className="h-20 lg:h-auto"
										width="149"
										height="220"
										viewBox="0 0 149 220"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.75"
											d="M3.688 66.088L2.6887 66.0506L2.64992 67.088H3.688V66.088ZM23.848 18.568L24.5081 19.3192L23.848 18.568ZM112.264 9.352L111.824 10.2498L111.83 10.253L112.264 9.352ZM135.592 29.8L134.735 30.3145L134.739 30.3214L134.743 30.3283L135.592 29.8ZM134.152 89.992L134.931 90.619L134.938 90.6098L134.152 89.992ZM111.976 106.12L111.653 105.173L110.976 105.404V106.12H111.976ZM111.976 107.272H110.976V107.993L111.66 108.221L111.976 107.272ZM139.048 189.64L138.192 189.123L138.189 189.128L139.048 189.64ZM115.144 210.952L114.703 210.054L114.697 210.058L115.144 210.952ZM22.696 201.736L22.0569 202.505L22.0622 202.509L22.696 201.736ZM1.096 150.472V149.472H0.0618229L0.0965652 150.506L1.096 150.472ZM48.904 150.472L49.9037 150.449L49.8815 149.472H48.904V150.472ZM56.104 170.632L55.3692 171.31L55.3758 171.317L55.3826 171.325L56.104 170.632ZM93.544 171.496L92.8214 170.805L92.8206 170.806L93.544 171.496ZM90.952 134.344L90.3606 135.15L90.3757 135.161L90.3912 135.172L90.952 134.344ZM53.8 128.008H52.8V129.008H53.8V128.008ZM53.8 87.976V86.976H52.8V87.976H53.8ZM86.632 83.08L87.1129 83.9569L87.1223 83.9516L86.632 83.08ZM90.088 48.808L90.7951 48.1009L90.088 48.808ZM57.832 49.672L57.061 49.0351L57.0526 49.0453L57.0445 49.0557L57.832 49.672ZM51.784 66.088V67.088H52.6997L52.7801 66.1759L51.784 66.088ZM4.6873 66.1253C5.44745 45.7913 12.0863 30.2353 24.5081 19.3192L23.1879 17.8168C10.2657 29.1727 3.46455 45.2967 2.6887 66.0506L4.6873 66.1253ZM24.5081 19.3192C36.9503 8.38509 53.8756 2.86399 75.4 2.86399V0.863991C53.5324 0.863991 36.0897 6.4789 23.1879 17.8168L24.5081 19.3192ZM75.4 2.86399C89.6874 2.86399 101.817 5.34069 111.824 10.2498L112.704 8.45421C102.359 3.37929 89.9126 0.863991 75.4 0.863991V2.86399ZM111.83 10.253C122.048 15.1727 129.665 21.8648 134.735 30.3145L136.449 29.2855C131.151 20.4552 123.216 13.5153 112.698 8.451L111.83 10.253ZM134.743 30.3283C140.015 38.8006 142.656 48.3117 142.656 58.888H144.656C144.656 47.9603 141.921 38.0794 136.441 29.2717L134.743 30.3283ZM142.656 58.888C142.656 71.39 139.533 81.5246 133.366 89.3742L134.938 90.6098C141.443 82.3313 144.656 71.73 144.656 58.888H142.656ZM133.373 89.365C127.14 97.1095 119.899 102.362 111.653 105.173L112.299 107.067C120.949 104.118 128.492 98.6185 134.931 90.619L133.373 89.365ZM110.976 106.12V107.272H112.976V106.12H110.976ZM111.66 108.221C122.43 111.811 130.893 117.746 137.096 126.016L138.696 124.816C132.227 116.19 123.411 110.029 112.292 106.323L111.66 108.221ZM137.096 126.016C143.272 134.251 146.4 144.873 146.4 157.96H148.4C148.4 144.551 145.192 133.477 138.696 124.816L137.096 126.016ZM146.4 157.96C146.4 169.702 143.656 180.079 138.192 189.123L139.904 190.157C145.576 180.769 148.4 170.026 148.4 157.96H146.4ZM138.189 189.128C132.924 197.966 125.111 204.945 114.703 210.054L115.585 211.85C126.297 206.591 134.42 199.362 139.907 190.152L138.189 189.128ZM114.697 210.058C104.497 215.157 92.2736 217.728 77.992 217.728V219.728C92.5104 219.728 105.055 217.115 115.591 211.846L114.697 210.058ZM77.992 217.728C55.1152 217.728 36.9288 212.106 23.3298 200.963L22.0622 202.509C36.1112 214.022 54.7888 219.728 77.992 219.728V217.728ZM23.3351 200.967C9.98245 189.871 2.8568 173.089 2.09544 150.438L0.0965652 150.506C0.871197 173.551 8.14556 190.945 22.0569 202.505L23.3351 200.967ZM1.096 151.472H48.904V149.472H1.096V151.472ZM47.9043 150.495C48.1004 159.125 50.5585 166.099 55.3692 171.31L56.8388 169.954C52.4335 165.181 50.0916 158.715 49.9037 150.449L47.9043 150.495ZM55.3826 171.325C60.235 176.379 67.2525 178.832 76.264 178.832V176.832C67.6115 176.832 61.189 174.485 56.8254 169.939L55.3826 171.325ZM76.264 178.832C83.9439 178.832 89.997 176.66 94.2674 172.186L92.8206 170.806C89.027 174.78 83.5601 176.832 76.264 176.832V178.832ZM94.2666 172.187C98.6975 167.555 100.88 161.533 100.88 154.216H98.88C98.88 161.107 96.8385 166.605 92.8214 170.805L94.2666 172.187ZM100.88 154.216C100.88 144.773 97.8162 137.786 91.5128 133.516L90.3912 135.172C95.9918 138.966 98.88 145.227 98.88 154.216H100.88ZM91.5434 133.538C85.5214 129.122 75.9433 127.008 63.016 127.008V129.008C75.8167 129.008 84.8626 131.118 90.3606 135.15L91.5434 133.538ZM63.016 127.008H53.8V129.008H63.016V127.008ZM54.8 128.008V87.976H52.8V128.008H54.8ZM53.8 88.976H63.016V86.976H53.8V88.976ZM63.016 88.976C72.9065 88.976 80.9626 87.3295 87.1128 83.9568L86.1512 82.2032C80.3974 85.3585 72.7095 86.976 63.016 86.976V88.976ZM87.1223 83.9516C93.6568 80.2759 96.848 73.8412 96.848 64.936H94.848C94.848 73.3108 91.8952 78.9721 86.1417 82.2084L87.1223 83.9516ZM96.848 64.936C96.848 57.8347 94.8703 52.1761 90.7951 48.1009L89.3809 49.5151C92.9857 53.1199 94.848 58.2133 94.848 64.936H96.848ZM90.7951 48.1009C86.7251 44.0309 81.1665 42.048 74.248 42.048V44.048C80.7695 44.048 85.7709 45.9051 89.3809 49.5151L90.7951 48.1009ZM74.248 42.048C66.7422 42.048 60.949 44.3287 57.061 49.0351L58.603 50.3089C62.011 46.1833 67.1618 44.048 74.248 44.048V42.048ZM57.0445 49.0557C53.4504 53.6482 51.3779 59.3126 50.7879 66.0001L52.7801 66.1759C53.3421 59.8073 55.3016 54.5278 58.6195 50.2883L57.0445 49.0557ZM51.784 65.088H3.688V67.088H51.784V65.088Z"
											fill="#11acff"
										></path>
									</svg>
								</div>
								<div className="relative z-10 p-6 py-10 lg:py-6 lg:pl-32 xl:pl-64 lg:pt-12 xl:pt-16">
									<h3 className="mb-2 text-lg font-semibold text-white uppercase text-center lg:text-left">
										{stepThree?.title}
									</h3>
									<Paragraph
										content={stepThree?.paragraph}
										tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-base text-white leading-relaxed text-center lg:text-left"
									/>
								</div>
							</div>
							<div
								className={
									styles.stepThree + ` w-full lg:w-1/2 px-4 order-0 lg:order-1`
								}
							>
								<Image
									alt={stepThree?.image?.altText}
									src={stepThree?.image?.sourceUrl}
									width={stepThree?.image?.mediaDetails.width}
									height={stepThree?.image?.mediaDetails.height}
									className={`${
										stepThree?.image?.sourceUrl
											? "lg:h-full lg:max-h-[400px] xl:max-h-[350px] lg:min-h-[300px] w-full clip-path-left object-cover object-center"
											: "hidden"
									}`}
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GettingStarted;
