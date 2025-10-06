import Image from "next/image";

const CreatorCard = () => {
  return (
    <div className="flex gap-4 items-center bg-secondary p-4 rounded-md">
      <div>
        <Image
          className="rounded-full"
          src="https://res.cloudinary.com/dspp405ug/image/upload/v1758616681/IMG_1592_fops9k.png"
          alt="creator-card"
          width={70}
          height={70}
        />
      </div>
      <div>
        <h1>Creator Name</h1>
        <p>Creator Description</p>
      </div>
    </div>
  );
};

export default CreatorCard;
