import { twMerge } from 'tailwind-merge'

import {
  Carousel,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
  CarouselTrack,
  CarouselDots,
} from '@/components/Carousel'

const reviews = [
  {
    quote:
      'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!',
    author: 'Ronald Richards',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Doe',
  },
  {
    quote:
      'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!',
    author: 'Ronald Richards',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Doe',
  },
] as const

export default function ReviewsCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      className={twMerge(
        'grid grid-rows-[repeat(2,auto)] place-items-center gap-x-6 gap-y-8 lg:grid-cols-[--spacing(8)_1fr_--spacing(8)]',
        className
      )}>
      <CarouselPrev className="max-lg:hidden" />
      <CarouselTrack>
        {reviews.map(({ quote, author }, index) => (
          <CarouselSlide key={index} className="text-center">
            <blockquote className="italic">
              <p className="text-lg/1.4">&ldquo;{quote}&rdquo;</p>
            </blockquote>
            <p className="mt-4">- {author}</p>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <CarouselNext className="max-lg:hidden" />
      <CarouselDots
        className="lg:col-start-2"
        dotClassName="bg-light-gray aria-current:bg-gray rounded-full size-1"
      />
    </Carousel>
  )
}
