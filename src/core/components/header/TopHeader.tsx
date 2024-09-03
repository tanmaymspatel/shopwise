import {
  IconDeviceMobile,
  IconArrowsShuffle,
  IconHeart,
  IconUser,
} from "@tabler/icons-react";

const TopHeader = () => {
  return (
    <div className="container mx-auto py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <IconDeviceMobile size={20} />
          <p>+91 12345 12345</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center gap-1 cursor-pointer">
            <IconArrowsShuffle size={20} />
            <p className="text-sm">Compare</p>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer">
            <IconHeart size={20} />
            <p className="text-sm">Wishlist</p>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer">
            <IconUser size={20} />
            <p className="text-sm">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
