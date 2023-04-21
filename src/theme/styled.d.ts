import {IDefaultTheme} from "./types";
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends IDefaultTheme {}
}
