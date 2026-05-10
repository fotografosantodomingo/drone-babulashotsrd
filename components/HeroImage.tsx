import ReactDOM from "react-dom";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const DESKTOP_BP = "(min-width: 901px)";

export function HeroImage({ src, alt }: Props) {
  ReactDOM.preload(src, { as: "image", fetchPriority: "high", media: DESKTOP_BP } as Parameters<typeof ReactDOM.preload>[1]);
  const cssEscape = (s: string) => s.replace(/"/g, "%22");
  const style = { "--hero-bg-desktop": `url("${cssEscape(src)}")` } as React.CSSProperties;
  return <div className="hero-image" role="img" aria-label={alt} style={style} />;
}
