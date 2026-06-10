import { twMerge } from 'tailwind-merge'

import {
  Carousel,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
  CarouselTrack,
} from '@/components/Carousel'
import bamboo from '@/images/shop/product/vase-bamboo.jpg'
import ceramic from '@/images/shop/product/vase-ceramic.jpg'
import glass from '@/images/shop/product/vase-glass.jpg'
import hammershoi from '@/images/shop/product/vase-hammershoi.jpg'
import steel from '@/images/shop/product/vase-steel.jpg'

const vases = [
  {
    image: glass,
    title: 'Glass Vase',
    price: 15,
  },
  {
    image: hammershoi,
    title: 'Hammershoi',
    price: 45,
  },
  {
    image: ceramic,
    title: 'Ceramic Vase',
    price: 35,
  },
  {
    image: steel,
    title: 'Steel Vase',
    price: 25,
  },
  {
    image: bamboo,
    title: 'Bamboo',
    price: 15,
  },
  {
    image: glass,
    title: 'Glass Vase',
    price: 15,
  },
  {
    image: hammershoi,
    title: 'Hammershoi',
    price: 45,
  },
  {
    image: ceramic,
    title: 'Ceramic Vase',
    price: 35,
  },
  {
    image: steel,
    title: 'Steel Vase',
    price: 25,
  },
  {
    image: bamboo,
    title: 'Bamboo',
    price: 15,
  },
] as const

export default function ReviewsCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      options={{
        align: 'start',
      }}
      className={twMerge(
        'grid grid-cols-[--spacing(8)_1fr_--spacing(8)] place-items-center gap-x-9 @md:gap-x-4',
        '[--slide-spacing:--spacing(4)] @md:[--slide-size:20%]',
        className
      )}>
      <CarouselPrev className="" />
      <CarouselTrack>
        {vases.map(({ image, title, price }, index) => (
          <CarouselSlide key={index} className="@container grid gap-y-2">
            <img
              src={image.src}
              alt=""
              width={200}
              height={200}
              className="border-light-gray aspect-square h-auto w-full border object-cover"
            />
            <p className="leading-1.2 text-[min(14cqi,0.875rem)]">{title}</p>
            <p className="leading-1.2 text-gray text-[min(14cqi,0.875rem)]">
              ${price}
            </p>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <CarouselNext className="" />
    </Carousel>
  )
}
