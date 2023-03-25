/* eslint-disable import/no-anonymous-default-export */
const size = {
    extraSmall: '0',
    mobile: '400px',
    tablet: '640px',
    desktop: '1024px',
    largeScreens: '1200px'
}

const device = {
    extraSmall: `(min-width: ${size.extraSmall})`,
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    largeScreens: `(min-width: ${size.largeScreens})`,
}

export default {size, device};