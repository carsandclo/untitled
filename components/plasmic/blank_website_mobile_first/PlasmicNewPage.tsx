// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c4FCQiVEmUqfPef3MjSmg8
// Component: hSQBkSnUA7tC

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

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import { useScreenVariants as useScreenVariantsqExrow76Zrl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: QExrow-76Zrl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: c4FCQiVEmUqfPef3MjSmg8/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: hSQBkSnUA7tC/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
};

export interface DefaultNewPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__kRbuf
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__dkqhs)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: "/plasmic/blank_website_mobile_first/images/cncXPscIsvg.svg",
                    fullWidth: 449.49,
                    fullHeight: 98.63,
                    aspectRatio: 4.557335
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__xbgik)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ui2Im
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Home"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__hqvtb
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__taIue
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Contact"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__xnhun)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <div className={classNames(projectcss.all, sty.freeBox__k1JgD)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__ulege)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              id={"main_image"}
              loading={"lazy"}
              src={{
                src: "/plasmic/blank_website_mobile_first/images/frontViewpng.png",
                fullWidth: 1000,
                fullHeight: 1000,
                aspectRatio: undefined
              }}
            />

            {(() => {
              const child$Props = {
                beforeChange: generateStateOnChangePropForCodeComponents(
                  $state,
                  "currentSlide",
                  ["sliderCarousel", "currentSlide"],
                  SliderWrapper_Helpers
                ),
                className: classNames("__wab_instance", sty.sliderCarousel),
                initialSlide: generateStateValueProp($state, [
                  "sliderCarousel",
                  "currentSlide"
                ]),
                ref: ref => {
                  $refs["sliderCarousel"] = ref;
                },
                rows: 1,
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bjhUh)}
                  >
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__hGls4
                      )}
                      component={Link}
                      onClick={async event => {
                        const $steps = {};

                        $steps["runCode"] = true
                          ? (() => {
                              const actionArgs = {
                                customFunction: async () => {
                                  return (() => {
                                    return ($state.main_image = "image1");
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
                        className={classNames(sty.img__kjaX)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        id={"image1"}
                        src={{
                          src: "/plasmic/blank_website_mobile_first/images/fontAPriwapng.png",
                          fullWidth: 1000,
                          fullHeight: 1000,
                          aspectRatio: undefined
                        }}
                      />
                    </PlasmicLink__>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__zpH3)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___7Pleh)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={
                        "https://static1.plasmic.app/components/react-slick/slide2.png"
                      }
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__cxNf2)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__lcQL)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={
                        "https://static1.plasmic.app/components/react-slick/slide3.png"
                      }
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__rltZo)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__c5X9P)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={
                        "https://static1.plasmic.app/components/react-slick/slide3.png"
                      }
                    />
                  </div>
                </SliderWrapper>
              );
            })()}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "sliderCarousel"],
  navigationBar: ["navigationBar"],
  sliderCarousel: ["sliderCarousel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  sliderCarousel: typeof SliderWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
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
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
