// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoCircleSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoCircleSvgrepoCom2SvgIcon(
  props: InfoCircleSvgrepoCom2SvgIconProps
) {
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

      <circle
        cx={"12"}
        cy={"12"}
        r={"10"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></circle>

      <path
        d={"M12 17v-6"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <circle
        cx={"1"}
        cy={"1"}
        r={"1"}
        transform={"matrix(1 0 0 -1 11 9)"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default InfoCircleSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
