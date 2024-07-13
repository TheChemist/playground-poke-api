import { SVGProps } from "react";

export function WaterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <circle fill="#3099e1" cx="128" cy="128" r="128" />
      <path
        fill="#fff"
        d="M128.35,206.24c-34.24,.13-56.14-32.39-43.8-64.78,4.18-10.98,10.78-20.6,16.8-30.49,9.43-15.5,15.71-32.11,19.91-49.63,.54-2.25,.94-4.58,1.88-6.66,.93-2.07,2.13-4.29,5.02-4.17,2.83,.12,3.84,2.41,4.87,4.44,.74,1.45,1.09,3.12,1.41,4.73,4.46,22.12,13.91,42.06,26.04,60.93,7.77,12.08,14.46,24.58,14.13,39.75-.57,26.48-19.82,45.79-46.27,45.89Z"
      />
      <path
        fill="#3a9de2"
        d="M129.16,193.51c-13.8-1.05-25.57-4.53-32.92-16.53-1.35-2.2-3.13-5.02-1.71-7.44,1.88-3.21,4.73-.71,7.03,.08,17.88,6.19,35.7,6.17,53.52-.27,2.06-.75,4.33-2.73,6.36-.43,1.92,2.18,.05,4.41-.92,6.39-6.52,13.39-18.86,16.49-31.35,18.19Z"
      />
    </svg>
  );
}
