import {breakpoint} from "../constants/breakpoints";
import {Device} from "../constants/device";

export const adaptTo = (device: Device): string => {
    return `${breakpoint[device]}`;
};
