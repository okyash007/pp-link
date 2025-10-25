import Tips from "./Tips";

const Client = ({ creator, blocks }: { creator: any; blocks: any[] }) => {
  return (
    <>
      {blocks.map((block) => {
        if (block.type === "tip") {
          return <Tips key={block.id} creator={creator} tipBlock={block} />;
        }
      })}
    </>
  );
};

export default Client;
