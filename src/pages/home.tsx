import CarouselCard from "@/components/carousel-card";
import HomeBlock from "@/components/home-block";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return(
    <div className="flex flex-col gap-5">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <CarouselCard />
          </CarouselItem>
          <CarouselItem>
            <CarouselCard />
          </CarouselItem>
          <CarouselItem>
            <CarouselCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <HomeBlock />
      <HomeBlock />
    </div>
  );
}