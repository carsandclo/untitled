// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c4FCQiVEmUqfPef3MjSmg8
// Component: cOK-sZ_QtzrG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import { useScreenVariants as useScreenVariantsqExrow76Zrl } from "../blank_website_mobile_first/PlasmicGlobalVariant__Screen"; // plasmic-import: QExrow-76Zrl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_website_mobile_first/plasmic.module.css"; // plasmic-import: c4FCQiVEmUqfPef3MjSmg8/projectcss
import sty from "./PlasmicItemDetails.module.css"; // plasmic-import: cOK-sZ_QtzrG/css

import RulerSvgrepoComsvgIcon from "./icons/PlasmicIcon__RulerSvgrepoComsvg"; // plasmic-import: dW6yKXuCsOFn/icon
import CheckShieldSvgrepoComsvgIcon from "./icons/PlasmicIcon__CheckShieldSvgrepoComsvg"; // plasmic-import: s4a-67yLiToA/icon
import FastDeliverySvgrepoComsvgIcon from "./icons/PlasmicIcon__FastDeliverySvgrepoComsvg"; // plasmic-import: in6WJerUDdTP/icon

createPlasmicElementProxy;

export type PlasmicItemDetails__VariantMembers = {};
export type PlasmicItemDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicItemDetails__VariantsArgs;
export const PlasmicItemDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicItemDetails__ArgsType = {
  prodProp?: any;
};
type ArgPropType = keyof PlasmicItemDetails__ArgsType;
export const PlasmicItemDetails__ArgProps = new Array<ArgPropType>("prodProp");

export type PlasmicItemDetails__OverridesType = {
  root?: Flex__<"div">;
  slider?: Flex__<"div">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  desc?: Flex__<"div">;
  size?: Flex__<"div">;
  material?: Flex__<"div">;
  material2?: Flex__<"div">;
  careInstruction?: Flex__<"div">;
  proof?: Flex__<"div">;
  link?: Flex__<"div">;
};

export interface DefaultItemDetailsProps {
  prodProp?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicItemDetails__RenderFunc(props: {
  variants: PlasmicItemDetails__VariantsArgs;
  args: PlasmicItemDetails__ArgsType;
  overrides: PlasmicItemDetails__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqExrow76Zrl()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__t7LeR)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant(globalVariants, "screen", "desktopOnly") ? "800px" : "auto"
        }
        id={"main_image"}
        loading={"lazy"}
        src={(() => {
          try {
            return $props.prodProp[0].image1;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return {
                src: "/plasmic/carsandclo/images/fallbackpng2.png",
                fullWidth: 600,
                fullHeight: 600,
                aspectRatio: undefined
              };
            }
            throw e;
          }
        })()}
      />

      <div className={classNames(projectcss.all, sty.freeBox__txGkc)}>
        <Stack__
          as={"div"}
          data-plasmic-name={"slider"}
          data-plasmic-override={overrides.slider}
          hasGap={true}
          className={classNames(projectcss.all, sty.slider)}
        >
          {(() => {
            const child$Props = {
              arrows: hasVariant(globalVariants, "screen", "desktopOnly")
                ? false
                : false,
              beforeChange: generateStateOnChangePropForCodeComponents(
                $state,
                "currentSlide",
                ["sliderCarousel", "currentSlide"],
                SliderWrapper_Helpers
              ),
              centerMode: false,
              className: classNames("__wab_instance", sty.sliderCarousel),
              initialSlide: generateStateValueProp($state, [
                "sliderCarousel",
                "currentSlide"
              ]),
              ref: ref => {
                $refs["sliderCarousel"] = ref;
              },
              sliderScopeClassName: sty["sliderCarousel__slider"],
              slidesPerRow: 4
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "currentSlide",
                  plasmicStateName: "sliderCarousel.currentSlide"
                }
              ],
              [],
              SliderWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <SliderWrapper
                data-plasmic-name={"sliderCarousel"}
                data-plasmic-override={overrides.sliderCarousel}
                {...child$Props}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $props.prodProp;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__kJZuU)}
                      key={currentIndex}
                    >
                      <PlasmicLink__
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__eUo0U
                        )}
                        component={Link}
                        onClick={async event => {
                          const $steps = {};

                          $steps["runCode"] = true
                            ? (() => {
                                const actionArgs = {
                                  customFunction: async () => {
                                    return (() => {
                                      document.getElementById(
                                        "main_image"
                                      ).src =
                                        $props.prodProp[currentIndex].image1;
                                      document.getElementById(
                                        "lblname"
                                      ).innerText =
                                        $props.prodProp[currentIndex].prod_name;
                                      document.getElementById(
                                        "lbldescription"
                                      ).innerText =
                                        $props.prodProp[
                                          currentIndex
                                        ].prod_description;
                                      return (document.getElementById(
                                        "lblsize"
                                      ).innerText =
                                        $props.prodProp[
                                          currentIndex
                                        ].prod_size);
                                    })();
                                  }
                                };
                                return (({ customFunction }) => {
                                  return customFunction();
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["runCode"] != null &&
                            typeof $steps["runCode"] === "object" &&
                            typeof $steps["runCode"].then === "function"
                          ) {
                            $steps["runCode"] = await $steps["runCode"];
                          }
                        }}
                        platform={"nextjs"}
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__p1Nft)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          src={(() => {
                            try {
                              return currentItem.image1;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return {
                                  src: "/plasmic/carsandclo/images/fallbackpng2.png",
                                  fullWidth: 600,
                                  fullHeight: 600,
                                  aspectRatio: undefined
                                };
                              }
                              throw e;
                            }
                          })()}
                        />
                      </PlasmicLink__>
                    </div>
                  );
                })}
              </SliderWrapper>
            );
          })()}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"desc"}
          data-plasmic-override={overrides.desc}
          hasGap={true}
          className={classNames(projectcss.all, sty.desc)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nDepQ
            )}
            id={"lblname"}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.prodProp[0].prod_name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "911 GT3 Cup";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7EKux
            )}
            id={"lbldescription"}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.prodProp[0].prod_description;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "A special highlight for Porsche fans are our limited Porsche T-shirts with collector's themes. The tasteful and sometimes colorful prints on these T-shirts show different Porsche themes such as cars, model logos or historical themes.";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"size"}
          data-plasmic-override={overrides.size}
          hasGap={true}
          className={classNames(projectcss.all, sty.size)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__igDfm)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1H7O4
              )}
            >
              {"Size"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hLgmX
              )}
              id={"lblsize"}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.prodProp[0].prod_size;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "S, M, L, XL";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__lGpPf)}
          >
            <RulerSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__ytTi)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k7D2B
              )}
            >
              {"Size Guide"}
            </div>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"material"}
          data-plasmic-override={overrides.material}
          hasGap={true}
          className={classNames(projectcss.all, sty.material)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__a6CMg
            )}
          >
            {"Material"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__chSZu
            )}
            id={"lblsize"}
          >
            {"40% Polyester, 60% Cotton, 270gsm"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"material2"}
          data-plasmic-override={overrides.material2}
          hasGap={true}
          className={classNames(projectcss.all, sty.material2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gat5N
            )}
          >
            {"Cutting Style"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6UhKf
            )}
            id={"lblsize"}
          >
            {"Oversized Tee"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"careInstruction"}
          data-plasmic-override={overrides.careInstruction}
          hasGap={true}
          className={classNames(projectcss.all, sty.careInstruction)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vzi58
            )}
          >
            {"Care Instruction"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__avaSs
            )}
            id={"lblsize"}
          >
            {
              "Machine wash cold. Permanent press cycle. Do not bleach. Do not tumble dry. Drying line dry. Cool iron. Do not dry-clean. Wash with similar colours. Wash and iron inside out. Use detergent for colours. Do not iron on print. Do not wring."
            }
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"proof"}
          data-plasmic-override={overrides.proof}
          hasGap={true}
          className={classNames(projectcss.all, sty.proof)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z6GfV)}
          >
            <CheckShieldSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__aWlGh)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gfd8C
              )}
            >
              {"Porsche Sprint Challenge Indonesia Official Apparels Partner"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mvYJj)}
          >
            <FastDeliverySvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__vfIrq)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tWyd1
              )}
            >
              {"Shipping within 3 to 4 working days"}
            </div>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          hasGap={true}
          className={classNames(projectcss.all, sty.link)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__jw0OQ
            )}
            component={Link}
            href={(() => {
              try {
                return $props.prodProp[0].tokopedia_link;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            platform={"nextjs"}
          >
            {"Tokopedia"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__iE6N7
            )}
            component={Link}
            href={(() => {
              try {
                return $props.prodProp[0].tokopedia_link;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            platform={"nextjs"}
          >
            {"Shopee"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__jkbAp
            )}
            component={Link}
            href={(() => {
              try {
                return $props.prodProp[0].bigcartel_link;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            platform={"nextjs"}
          >
            {"International Order"}
          </PlasmicLink__>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "slider",
    "sliderCarousel",
    "desc",
    "size",
    "material",
    "material2",
    "careInstruction",
    "proof",
    "link"
  ],
  slider: ["slider", "sliderCarousel"],
  sliderCarousel: ["sliderCarousel"],
  desc: ["desc"],
  size: ["size"],
  material: ["material"],
  material2: ["material2"],
  careInstruction: ["careInstruction"],
  proof: ["proof"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  slider: "div";
  sliderCarousel: typeof SliderWrapper;
  desc: "div";
  size: "div";
  material: "div";
  material2: "div";
  careInstruction: "div";
  proof: "div";
  link: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicItemDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicItemDetails__VariantsArgs;
    args?: PlasmicItemDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicItemDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicItemDetails__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicItemDetails__ArgProps,
          internalVariantPropNames: PlasmicItemDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicItemDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItemDetails";
  } else {
    func.displayName = `PlasmicItemDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicItemDetails = Object.assign(
  // Top-level PlasmicItemDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    slider: makeNodeComponent("slider"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    desc: makeNodeComponent("desc"),
    size: makeNodeComponent("size"),
    material: makeNodeComponent("material"),
    material2: makeNodeComponent("material2"),
    careInstruction: makeNodeComponent("careInstruction"),
    proof: makeNodeComponent("proof"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicItemDetails
    internalVariantProps: PlasmicItemDetails__VariantProps,
    internalArgProps: PlasmicItemDetails__ArgProps
  }
);

export default PlasmicItemDetails;
/* prettier-ignore-end */
