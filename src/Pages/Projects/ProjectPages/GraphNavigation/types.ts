export interface IConfiguration {
  marginLeft?: string | number;
  width: string | number;
  height: string | number;
  img: string | null;
  imageBackgroundColor?: string;
  isActive: boolean;
  isClickable: boolean;
  backgroundColor: string | null;
  text: string;
  bottomBar: boolean;
  barColor?: string | null;
  indicatorColor?: string;
  href?: string;
  arrowConfig: IArrowConfig[] | null;
  content?: IContent;
}

interface IContent {
  [key: string]: IConfiguration;
}

interface IArrowConfig {
  end: string;
  startAnchor: 'bottom' | 'top' | 'left' | 'right' | 'middle';
  endAnchor: 'bottom' | 'top' | 'left' | 'right' | 'middle';
  showTail?: boolean;
  showHead?: boolean;
  path?: 'smooth' | 'grid' | 'straight';
  cpy1Offset?: number;
  cpy2Offset?: number;
  extendSVGcanvas?: number;
  strokeWidth?: number;
  headSize?: number;
  tailSize?: number;
}
