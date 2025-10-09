import Image from "next/image";

interface Creator {
  image: {
    src: string;
  };
  username: string;
  email: string;
}

const CreatorCard = ({ creator }: { creator: Creator }) => {

  console.log(creator);

  return (
    <div className="flex gap-4 items-center bg-secondary p-4 rounded-md">
      <div>
        {creator.image.src && <Image
          className="rounded-full"
          src={creator.image.src}
          alt="creator-card"
          width={70}
          height={70}
        />}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{creator.username}</h1>
        <p className="text-sm text-gray-500">{creator.email}</p>
      </div>
    </div>
  );
};

export default CreatorCard;
