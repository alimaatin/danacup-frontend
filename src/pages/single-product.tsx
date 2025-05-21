import BreadCrumbHeader from "@/components/breadcrumb-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function SingleProduct() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState();

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
      {
        title: "نام محصول",
        href: "/product-id"
      },
    ]
  }

  return(
    <div className="flex flex-col gap-4">
      <BreadCrumbHeader title={config.title} breadcrumbs={config.breadcrumbs} /> 
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center gap-10 w-full">
          <div className="bg-gray-500 w-72 aspect-square rounded-md">
            t
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl">نام محصول</h2>
              <p className="text-lg">450 هزار تومان</p>
            </div>
            <div className="space-y-4">
              <p>#پوشاک</p>
              <Button className="bg-blue-300 text-blue-600 hover:bg-blue-200 h-10 w-64  ">افزودن به سبد خرید</Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="description" className="flex justify-center items-center gap-8">
          <TabsList className="bg-transparent scale-125">
            <TabsTrigger value="description" className="">بررسی اجمالی</TabsTrigger>
            <TabsTrigger value="specifications" className="">مشخصات</TabsTrigger>
            <TabsTrigger value="reviews" className="">نظرات کاربران</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}