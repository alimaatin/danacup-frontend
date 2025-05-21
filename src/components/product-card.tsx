import { Button } from "./ui/button";

export default function ProductCard() {
  return(
    <div className="flex flex-col gap-1">
      <div className="bg-gray-500 rounded-md w-44 h-48">t</div>
      <h2 className="mt-2">تیشرت مردانه سفید</h2>
      <p className="text-sm"><span className="text-red-500">450</span> هزار تومان</p>
      <p className="text-sm mt-2">#پوشاک</p>
      <Button className="bg-blue-300 text-blue-600 hover:bg-blue-200 h-6">افزودن به سبد خرید</Button>
    </div>
  );
}