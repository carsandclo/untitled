// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shopeesvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shopeesvg2Icon(props: Shopeesvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.697 9.52a1.643 1.643 0 01-1.012 1.347 2.623 2.623 0 01-1.091.187 3.602 3.602 0 01-1.486-.386 4.65 4.65 0 01-.595-.407c-.046-.044-.055-.066-.02-.112.014-.027.047-.075.115-.175.104-.146.114-.165.126-.184.032-.047.083-.05.136-.013a13.077 13.077 0 00.037.032c.019.015.034.022.037.03a2.856 2.856 0 001.655.63c.808-.01 1.39-.374 1.496-.935.11-.61-.37-1.145-1.312-1.442-.296-.089-1.044-.386-1.182-.47-.646-.377-.949-.873-.905-1.489.067-.85.855-1.483 1.855-1.49.444 0 .89.092 1.315.27.153.066.425.213.517.285.054.04.066.085.032.134-.012.03-.044.075-.1.172-.084.126-.086.13-.1.16-.03.046-.072.05-.128.017a2.742 2.742 0 00-1.522-.473c-.694.01-1.214.425-1.248.991-.007.509.372.88 1.195 1.158 1.673.54 2.313 1.168 2.19 2.165M5.635.745c1.086 0 1.975 1.032 2.02 2.324H3.618c.04-1.294.93-2.324 2.017-2.324zm5.635 2.569a.24.24 0 00-.239-.245H8.413C8.347 1.364 7.126 0 5.633 0 4.14 0 2.923 1.364 2.856 3.07H.238A.243.243 0 000 3.313v.019h-.003l.372 8.23c0 .021.006.043.006.07v.031l.003.006c.056.573.47 1.03 1.037 1.054v.005h8.35v-.005c.575-.014 1.046-.48 1.09-1.06v-.01l.002-.017c0-.017.005-.027.005-.044l.407-8.263v-.012"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shopeesvg2Icon;
/* prettier-ignore-end */
