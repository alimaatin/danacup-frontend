export default function Footer() {
  return(
    <div className="flex flex-col">
      <div className="flex justify-between flex-wrap items-center p-10 border-b border-t gap-5">
        <div className="flex flex-col gap-2 w-96">
          <h2 className="font-bold text-2xl">فروشگاه دانا کاپ</h2>
          <p className="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد 
          </p>
        </div>
        <div className="flex gap-5">
          <div className="bg-gray-500 w-20 aspect-square rounded-md">t</div>
          <div className="bg-gray-500 w-20 aspect-square rounded-md">t</div>
          <div className="bg-gray-500 w-20 aspect-square rounded-md">t</div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <p>تمام حقوق مادی معنوی متعلق به داناکاپ میباشد</p>
      </div>
    </div>

  );
}