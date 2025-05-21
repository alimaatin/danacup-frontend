import { AlignJustify, Heart, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4 bg-[#F4F4F4] text-[#4B4B4B]">
        <div className="flex gap-2 items-center text-sm">
          <div className="flex items-center gap-2 bg-[#E0E0E0] rounded-md p-2">
            <AlignJustify size={17}/>
            فهرست
          </div>
          <div className="flex gap-2 items-center bg-[#E0E0E0] rounded-md p-2 w-40">
            <Search size={17}/>
            <input className="w-full focus:outline-none" placeholder="جستجو..."/>
          </div>
        </div>
        <div>
          <p className="font-extrabold text-xl text-black">لوگو</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to={'/auth'}><User size={20}/></Link>
          <Heart size={20}/>
          <ShoppingCart size={20}/>
        </div>
      </div>
    </div>
  );
}