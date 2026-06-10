import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Icon from '@/components/Icon'
import { input, button } from '@/components/variants'
import productRosyDelight from '@/images/products/product-rosy_delight.jpg'

export const CheckoutFunction = () => {
  const [step, setStep] = useState<number>(1)
  const shipping = step === 3 ? 0 : null

  return (
    <main className="grid grid-flow-row-dense lg:min-h-[calc(100dvh-var(--header-height))] lg:grid-cols-2">
      <details
        className="bg-extra-light group @container grid grid-rows-[auto_1fr] px-4 py-6 details-content:min-h-0 sm:px-(--grid-padding-fluid) sm:py-10 lg:col-start-2 lg:min-h-full lg:border-l"
        open>
        <summary className="grid grid-cols-[--spacing(6)_auto_--spacing(6)_1fr] items-center gap-x-2 uppercase lg:pointer-events-none lg:grid-cols-[1fr]">
          <Icon name="cart" className="lg:hidden" />
          Order summary
          <Icon
            name="chevron-right"
            className="rotate-90 transition-transform group-open:-rotate-90 motion-reduce:transition-none lg:hidden"
          />
          <span className="text-right lg:hidden">
            {shipping !== null && `$${shipping}`}
          </span>
        </summary>
        <div className="grid-rule-y *:border-light-gray grid h-full min-h-0 grid-rows-[repeat(3,auto)_1fr] *:py-6 *:last:pb-0">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 @max-sm:grid-rows-[auto_1fr_auto] @sm:grid-cols-[auto_1fr_auto] @sm:items-center">
            <img
              src={productRosyDelight.src}
              alt="Rosy Delight"
              className="size-40 border object-cover @max-sm:col-span-2"
            />
            <div className="space-y-2">
              <h3 className="text-lg/1.4 font-medium">Rosy Delight</h3>
              <p className="text-base/1.4">Quantity (1)</p>
            </div>
            <p className="text-lg/1.4 font-medium">$100</p>
          </div>
          <div className="grid gap-x-4 gap-y-4 @md:grid-cols-2">
            <p className="text-base/1.4 @md:col-span-full">
              If you have our gift card, enter the code to get discounts
            </p>
            <input
              type="text"
              name="gift-code"
              placeholder="Gift card"
              className={twMerge(input(), '')}
            />
            <button type="button" className={twMerge(button(), 'uppercase')}>
              Apply
            </button>
          </div>
          <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-6">
            <dt className="text-base/1.4">Subtotal</dt>
            <dd className="text-base/1.4 text-right">$100.00</dd>
            <dt className="text-base/1.4">Shipping</dt>
            <dd className="text-base/1.4 text-right">
              {shipping === null ? (
                <span className="text-gray">Calculated at next step</span>
              ) : (
                `$${shipping}`
              )}
            </dd>
          </dl>
          <div className="grid min-h-0 grid-rows-[auto_1fr] gap-y-16 pb-0">
            <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-6">
              <dt className="text-base/1.4">Total</dt>
              <dd className="text-xl/1.2 text-right">$100.00</dd>
            </dl>
            <p className="text-sm/1.2 flex items-end gap-x-1 self-end justify-self-center">
              Secure Checkout
              <Icon name="lock" />
            </p>
          </div>
        </div>
      </details>
      <section className="px-4 py-10 sm:px-10">
        <ol className="text-sm/1.2 flex gap-x-2 uppercase">
          <li className="contents">Information</li>
          <li className="contents">
            <Icon name="chevron-right" className="w-3.5" />
            Shipping
          </li>
          <li className="contents">
            <Icon name="chevron-right" className="w-3.5" />
            payment
          </li>
        </ol>

        <p className="bg-light-gray mt-8 px-4 py-6 sm:p-10">
          Already have an account? Log in for faster checkout.
        </p>

        <Step isOpen={step === 1} isCompleted={step > 1}>
          <StepSummary
            step={1}
            isCompleted={step > 1}
            onEdit={() => setStep(1)}>
            Contact information
          </StepSummary>
          <div className="grid gap-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
            <input
              type="tel"
              name="tel"
              placeholder="Your Phone Number"
              autoComplete="tel"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className={twMerge(button(), 'w-full uppercase')}>
            Continue to shipping
          </button>
        </Step>

        <Step isOpen={step === 2} isCompleted={step > 2}>
          <StepSummary
            step={2}
            isCompleted={step > 2}
            onEdit={() => setStep(2)}>
            Shipping details
          </StepSummary>
          <div className="grid gap-3 @md:grid-cols-2">
            <input
              type="text"
              name="recipients-name"
              placeholder="Recipients Name"
              autoComplete="name"
              required
              aria-required="true"
              className={twMerge(input(), '@md:col-span-full')}
            />
            <input
              type="tel"
              name="recipients-phone"
              placeholder="Recipients Phone Number"
              autoComplete="tel"
              required
              aria-required="true"
              className={twMerge(input(), '@md:col-span-full')}
            />
            <input
              type="date"
              name="delivery-date"
              placeholder="Date of Delivery"
              autoComplete="off"
              required
              aria-required="true"
              className={twMerge(input(), '@md:col-span-full')}
            />
            <select
              name="delivery-time"
              required
              aria-required="true"
              className={twMerge(
                input(),
                'invalid:text-gray @md:col-span-full'
              )}>
              <option value="">Delivery Time</option>
              <option value="morning">Morning (10:00 - 12:00)</option>
              <option value="afternoon">Afternoon (12:00 - 14:00)</option>
              <option value="evening">Evening (14:00 - 16:00)</option>
            </select>
            <input
              type="text"
              name="street"
              placeholder="Street"
              autoComplete="off"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
            <input
              type="text"
              name="apartment-number"
              placeholder="Apartment Number"
              autoComplete="off"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
            <label className="flex items-baseline gap-x-2 @md:col-span-full">
              <input type="checkbox" name="i-dont-know-the-address" />I don't
              know the address, please call the recipient.
            </label>
          </div>
          <button
            type="button"
            onClick={() => setStep(3)}
            className={twMerge(button(), 'w-full uppercase')}>
            Continue to payment
          </button>
        </Step>

        <Step isOpen={step === 3} isCompleted={step > 3}>
          <StepSummary
            step={3}
            isCompleted={step > 3}
            onEdit={() => setStep(3)}>
            Payment
          </StepSummary>
          <div className="grid gap-3 @md:grid-cols-2">
            <p className="@md:col-span-full">
              Pay by card. Your payment is secure.
            </p>
            <input
              type="text"
              name="card-number"
              placeholder="Card Number"
              autoComplete="cc-number"
              required
              aria-required="true"
              className={twMerge(input(), '@md:col-span-full')}
            />
            <input
              type="text"
              name="card-exp"
              placeholder="MM/YY"
              autoComplete="cc-exp"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
            <input
              type="text"
              name="card-csc"
              placeholder="CVV Code"
              autoComplete="cc-csc"
              required
              aria-required="true"
              className={twMerge(input(), '')}
            />
          </div>
          <button
            type="button"
            onClick={() => alert('Purchase successful by card')}
            className={twMerge(button(), 'w-full uppercase')}>
            Make a purchhase
          </button>
          <div className="grid gap-3 @md:grid-cols-2">
            <p className="@md:col-span-full">Or pay using:</p>
            <button
              type="button"
              onClick={() => alert('Purchase successful by Apple Pay')}
              className={twMerge(
                button({ color: 'secondary' }),
                'w-full uppercase'
              )}>
              <Icon name="apple" />
              Apple Pay
            </button>
            <button
              type="button"
              onClick={() => alert('Purchase successful by Google Pay')}
              className={twMerge(
                button({ color: 'secondary' }),
                'w-full uppercase'
              )}>
              <Icon name="google" />
              Google Pay
            </button>
          </div>
        </Step>
      </section>
    </main>
  )
}

const StepSummary = ({
  step,
  isCompleted,
  onEdit,
  children,
}: {
  step: number
  isCompleted: boolean
  onEdit: () => void
  children: React.ReactNode
}) => {
  return (
    <summary
      onClick={(e) => e.preventDefault()}
      className={twMerge(
        'relative grid cursor-default grid-cols-[auto_1fr_--spacing(6)] items-center gap-x-1'
      )}>
      {isCompleted ? <Icon name="check" /> : <span>{step}</span>}
      {children}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onEdit()
        }}
        className={twMerge('cursor-pointer', !isCompleted && 'invisible')}>
        <Icon name="edit" />
      </button>
    </summary>
  )
}

type StepProps = {
  isOpen: boolean
  isCompleted: boolean
  children: React.ReactNode
}

const Step = ({ isOpen, isCompleted, children }: StepProps) => {
  return (
    <details
      className={twMerge(
        'border-light-gray mt-10 space-y-4 border-b open:details-content:pb-6',
        isCompleted && 'border-current'
      )}
      open={isOpen}>
      {children}
    </details>
  )
}

export default CheckoutFunction
