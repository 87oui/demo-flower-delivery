import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'inline-flex cursor-pointer items-center justify-center gap-x-2',
    'border',
    'sm:text-base/1.2 text-sm/none font-medium tracking-wide',
    'transition-colors',
  ],
  variants: {
    color: {
      primary: [
        'border-black bg-black text-white',
        'hover:bg-dark-gray',
        'active:bg-black',
        'disabled:bg-light-gray disabled:text-gray disabled:border-light-gray',
      ],
      secondary: [
        'border-black bg-white text-black',
        'hover:bg-black hover:text-white',
        'active:bg-white active:text-black',
        'disabled:border-light-gray disabled:text-gray',
      ],
      tertiary: [
        'border-current bg-transparent text-white',
        'hover:bg-white hover:text-black',
        'avtive:bg-white avtive:text-black',
        'disabled:border-light-gray disabled:text-gray',
      ],
      ghost: 'text-gray border-transparent',
    },
    size: {
      sm: '',
      md: 'px-6 py-4 sm:py-5',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

export const input = tv({
  base: [
    'placeholder:text-gray text-base/1.2 border-light-gray border bg-white p-3 font-bold sm:p-5',
  ],
})

export const dialog = tv({
  base: [
    'fixed inset-0 m-0 max-h-none overflow-y-auto border border-black bg-white',
    'transition-transform duration-500',
    'not-open:block',
    'open:max-h-none',
    'backdrop:bg-light-gray/35 backdrop:backdrop-blur-xs',
  ],
  variants: {
    direction: {
      left: 'right-auto not-open:-translate-x-full open:translate-x-0',
      right: 'left-auto not-open:translate-x-full open:translate-x-0',
      bottom: 'top-auto mx-auto not-open:translate-y-full open:translate-y-0',
    },
  },
})
