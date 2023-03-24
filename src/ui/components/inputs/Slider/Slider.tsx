import * as RadixSlider from '@radix-ui/react-slider'
import { useState } from 'react'

import Input from '../Input/Input'

interface SliderProps {
  defaultValue: Array<number>
  disabled?: boolean
  label: string
  maxValue: number
  minValue: number
  name: string
  onChange?: () => void
  step?: number
  showInputControls?: boolean
}

const Slider = ({
  maxValue,
  minValue,
  step = 1,
  defaultValue,
  label,
  disabled = false,
  showInputControls,
}: SliderProps) => {
  const [values, setValues] = useState(defaultValue)
  const [lowerValue, upperValue] = values

  const handleSliderChange = (value: Array<number>) => {
    setValues(value)
  }

  return (
    <>
      <RadixSlider.Root
        className='relative flex touch-none select-none items-center data-[orientation=horizontal]:h-5 data-[orientation=vertical]:h-24 data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col'
        defaultValue={values}
        value={values}
        min={minValue}
        max={maxValue}
        step={step}
        aria-label={label}
        disabled={disabled}
        onValueChange={(values) => handleSliderChange(values)}
        minStepsBetweenThumbs={1}
      >
        <RadixSlider.Track className='relative grow rounded-full bg-surface-200 data-[orientation=horizontal]:h-xs data-[orientation=vertical]:w-xs'>
          <RadixSlider.Range className='absolute h-full rounded-full bg-primary opacity-25' />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={thumbStyles()} />
        <RadixSlider.Thumb className={thumbStyles()} />
      </RadixSlider.Root>
      {showInputControls && (
        <div className='mt-sm-alt flex items-center justify-between [&_input]:rounded-[4px] [&_input]:py-1.5'>
          <div className='w-[45%]'>
            <Input
              type='number'
              step={step}
              id='price-minimum'
              value={Number(lowerValue).toString()}
              max={upperValue}
              min={minValue}
              onChange={(event) =>
                handleSliderChange([Number(event.target.value), upperValue])
              }
              disabled={disabled}
            />
          </div>
          <span className='text-surface-300'>-</span>
          <div className='w-[45%]'>
            <Input
              type='number'
              step={step}
              id='price-maximum'
              value={Number(upperValue).toString()}
              max={maxValue}
              min={lowerValue}
              onChange={(event) =>
                handleSliderChange([lowerValue, Number(event.target.value)])
              }
              disabled={disabled}
            />
          </div>
        </div>
      )}
    </>
  )
}

const thumbStyles = () =>
  `before:content-[" "] relative block h-md w-md rounded-full bg-primary-400 before:absolute before:left-1/2 before:top-1/2 before:h-lg before:w-lg before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary before:opacity-10 hover:cursor-grab focus:shadow-xl hover:scale-110 transition-all focus:outline-none active:cursor-grabbing`

export default Slider
