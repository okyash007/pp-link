import { getYouTubeVideoId } from "@/lib/utils";
import LiquidRenderer from "@/our/LiquidRenderer";

const Tip = ({ tip, overlay }: { tip: any; overlay: any }) => {

  console.log(tip);

  if (tip.type === "media-share" && tip.media) {

    const youtubeVideoId = getYouTubeVideoId(tip.media);

    return (
      <LiquidRenderer
        key={tip.id}
        className={overlay.className}
        style={overlay.style}
        html={overlay.template}
        data={{ ...tip, youtube_video_key: youtubeVideoId, data: overlay.data }}
      />
    );
  }

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
