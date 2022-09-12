export type NavigateConfig = INavigate[];

interface INavigate {
  id: number;
  path: string;
  text: string;
  imgSrc: string;
  active: boolean;
}
