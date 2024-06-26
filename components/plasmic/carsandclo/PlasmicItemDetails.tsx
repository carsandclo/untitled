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
import Button from "../../Button"; // plasmic-import: WoUXpKFRVp6X/component

import { useScreenVariants as useScreenVariantsqExrow76Zrl } from "../blank_website_mobile_first/PlasmicGlobalVariant__Screen"; // plasmic-import: QExrow-76Zrl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_website_mobile_first/plasmic.module.css"; // plasmic-import: c4FCQiVEmUqfPef3MjSmg8/projectcss
import sty from "./PlasmicItemDetails.module.css"; // plasmic-import: cOK-sZ_QtzrG/css

import ChecksvgIcon from "../blank_website_mobile_first/icons/PlasmicIcon__Checksvg"; // plasmic-import: wSb16lybm7DS/icon
import IconIcon from "../blank_website_mobile_first/icons/PlasmicIcon__Icon"; // plasmic-import: m3IaC3t3OSQT/icon

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
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  freeBox?: Flex__<"div">;
  desc?: Flex__<"div">;
  size?: Flex__<"div">;
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
                src: "/plasmic/carsandclo/images/fallbackpng.png",
                fullWidth: 120,
                fullHeight: 120,
                aspectRatio: undefined
              };
            }
            throw e;
          }
        })()}
      />

      {(() => {
        const child$Props = {
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
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
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
                                  document.getElementById("main_image").src =
                                    $props.prodProp[currentIndex].image2;
                                  document.getElementById("lblname").innerText =
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
                                    $props.prodProp[currentIndex].prod_size);
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
                          return $props.prodProp[0].image2;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return {
                              src: "/plasmic/carsandclo/images/fallbackpng.png",
                              fullWidth: 120,
                              fullHeight: 120,
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
                  return "not found";
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
                  return "not found";
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
                  return "size not found";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        hasGap={true}
        className={classNames(projectcss.all, sty.link)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__bmtzi
          )}
        >
          {"Available on"}
        </div>
        <Button
          className={classNames("__wab_instance", sty.button___7AXbL)}
          color={"sand"}
          link={(() => {
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
          onClick={async event => {
            const $steps = {};

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {};
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
          shape={"sharp"}
        >
          {"Tokopedia"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__c9ITl)}
          color={"sand"}
          link={(() => {
            try {
              return $props.prodProp[0].shopee_link;
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
          shape={"sharp"}
        >
          {"Shopee"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__i1Pi)}
          color={"sand"}
          link={(() => {
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
          shape={"sharp"}
        >
          {"International Order"}
        </Button>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sliderCarousel", "freeBox", "desc", "size", "link"],
  sliderCarousel: ["sliderCarousel", "freeBox"],
  freeBox: ["freeBox"],
  desc: ["desc"],
  size: ["size"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sliderCarousel: typeof SliderWrapper;
  freeBox: "div";
  desc: "div";
  size: "div";
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
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    freeBox: makeNodeComponent("freeBox"),
    desc: makeNodeComponent("desc"),
    size: makeNodeComponent("size"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicItemDetails
    internalVariantProps: PlasmicItemDetails__VariantProps,
    internalArgProps: PlasmicItemDetails__ArgProps
  }
);

export default PlasmicItemDetails;
/* prettier-ignore-end */
