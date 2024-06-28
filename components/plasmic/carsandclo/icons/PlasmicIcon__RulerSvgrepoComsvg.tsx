// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RulerSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RulerSvgrepoComsvgIcon(props: RulerSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.636 14.124l1.414 1.414m1.414-4.243L9.88 12.71m1.414-4.243l1.414 1.414m1.414-4.243l1.415 1.415m-12.728 9.9l4.242 4.242L21.192 7.053 16.95 2.81 2.808 16.952z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RulerSvgrepoComsvgIcon;
/* prettier-ignore-end */
