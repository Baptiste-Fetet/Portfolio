import photo from "@assets/ProfilePicture.jpg";

export const ProfilePicture = () => {
  return (
    <div className="flex items-center justify-center w-64 h-64 bg-border rounded-full">
      <img src={photo} alt="Profile" className="w-58 h-58 rounded-full" />
    </div>
  );
};
