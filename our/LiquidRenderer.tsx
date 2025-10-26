import { useMemo } from "react";
import { Liquid } from "liquidjs";

const LiquidRenderer = ({ html, data, className, style = {} }: { html: string; data: any; className: string; style?: any }) => {


  const renderedHtml = useMemo(() => {
    if (!html?.trim()) {
      return "";
    }

    try {
      const engine = new Liquid();
      // Use parseAndRenderSync for instant rendering
      const htmlString = engine.parseAndRenderSync(html, data || {});
      return htmlString;
    } catch (err: any) {
      console.log(err);
      return "";
    }
  }, [html, data]);

  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

export default LiquidRenderer;
