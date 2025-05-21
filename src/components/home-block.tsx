import ProductCard from "./product-card";

export default function HomeBlock() {
  return(
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">شگفت انگیز ها</h2>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {
          [...Array(5).keys()].map(() => {
            return(
              <ProductCard />
            );
          })
        }
      </div>
    </div>
  );
}