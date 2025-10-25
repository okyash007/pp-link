import LiquidRenderer from "@/our/LiquidRenderer";

const Tip = ({ tip, overlay }: { tip: any; overlay: any }) => {

  return (
    <LiquidRenderer
      key={tip.id}
      className={overlay.className}
      style={overlay.style}
      html={overlay.template}
      data={{ ...tip, data: overlay.data }}
    />
  );
};

export default Tip;
