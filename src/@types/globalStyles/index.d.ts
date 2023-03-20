import { ThemeType } from '../../themes/themes';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{
    mainColor: string;
  }
}
