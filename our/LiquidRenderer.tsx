import { useMemo } from "react";
import { Liquid } from "liquidjs";

const LiquidRenderer = ({ html, data, className }: { html: string; data: any; className: string }) => {


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

  return <div className={className} dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

export default LiquidRenderer;
