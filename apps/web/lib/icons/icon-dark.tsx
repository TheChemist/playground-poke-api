import type { SVGProps } from "react";

export function DarkIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
			<circle fill="#4f4747" cx="128" cy="128" r="128" />
			<path
				fill="#fff"
				d="M74.46,84.24c7.49,7.56,17.75,14.95,27.04,16.93-1.38,2.84-1.88,5.07-2.37,8.23-2.78,17.82-1.19,34.63,12.15,48.3,10.06,10.31,23.45,10.28,33.51-.09,13.29-13.71,14.91-30.51,12.01-48.33-.43-2.62-1.93-9.15-1.88-9.24,.1-.18,0-.08,1-.38,6.48-1.51,18.62-7.99,26.05-15.5,15.36,11.88,23.65,36.91,14.18,56.85-12.94,27.24-43.16,51.76-81.43,43.96-29.15-5.94-49.04-24.49-57.95-53.21-4.14-13.33,1.67-35.98,17.7-47.52Z"
			/>
			<path
				fill="#fff"
				d="M139.92,124.38c-.27,5.3-.79,12.61-6.05,18.45-4.12,4.57-7.96,4.83-11.66-.03-7.43-9.75-7.46-20.89-4.48-32.19,1.96-7.42,2.86-7.9,10.26-7.9,7.41,0,7.97,.58,10.38,7.85,1.28,3.88,1.58,7.78,1.56,13.83Z"
			/>
		</svg>
	);
}
