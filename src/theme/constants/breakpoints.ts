import {Device} from "./device";

export const breakpoints: Record<Device, number> = {
    // mobile: 320,
    // tablet: 768,
    desktop: 1440,
};

// const MOBILE_LANDSCAPE_HEIGHT = 414;

// const heightMoreThanMobile = MOBILE_LANDSCAPE_HEIGHT + 1;
const widthLessThanDesktop = breakpoints.desktop - 1;
// const widthLessThanTablet = breakpoints.tablet - 1;

export const mediaFeatures = {
    // mobileWidth: `(max-width: ${widthLessThanTablet}px)`,
    // heightLessThanTablet: `(max-height: ${MOBILE_LANDSCAPE_HEIGHT}px)`,
    // widthLessThanDesktop: `(max-width: ${widthLessThanDesktop}px)`,
    // tabletWidth: `(min-width: ${breakpoints.tablet}px) and (max-width: ${widthLessThanDesktop}px)`,
    // heightMoreThanMobile: `(min-height: ${heightMoreThanMobile}px)`,
    desktopWidth: `(min-width: ${breakpoints.desktop}px)`,
};

export const breakpoint: Record<Device, string> = {
    // mobile: `@media screen and ${mediaFeatures.mobileWidth}, ${mediaFeatures.heightLessThanTablet} and ${mediaFeatures.widthLessThanDesktop}`,
    // tablet: `@media screen and ${mediaFeatures.tabletWidth} and ${mediaFeatures.heightMoreThanMobile}`,
    desktop: `@media screen and ${mediaFeatures.desktopWidth}`,
};
