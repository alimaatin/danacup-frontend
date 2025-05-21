import BreadCrumbHeader from "@/components/breadcrumb-header";
import ProductCard from "@/components/product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const config = {
  title: "فروشگاه",
  breadcrumbs: [
    {
      title: "خانه",
      href: "/"
    },
    {
      title: "فروشگاه",
      href: "/store"
    },
  ]
}

export default function Products() {
  return(
    <div className="flex flex-col gap-4">
      <BreadCrumbHeader title={config.title} breadcrumbs={config.breadcrumbs}/>
      <div className="flex items-center justify-between">
        <Select>
          <SelectTrigger className="bg-[#E0E0E0]">
            <SelectValue placeholder="فیلتر ها"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test">تست</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-[#E0E0E0]">
            <SelectValue placeholder="دسته بندی ها"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test">تست</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-4 justify-start items-center">
        {
          [...Array(10).keys()].map(() => {
            return(
              <ProductCard />
            );
          })
        }
      </div>
    </div>
  );
}