# Loading: Principles of Use

## Usage

Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway.

### How to import

`import { Loading } from '@/component/utility`

### Anatomy

`  <Loading variant={ disabled ? 'white' : buttonFamilyClasses['loadingIcon'][variant] } size='md' />`

### Props

- size: 'sm' | 'md' | 'lg'
- variant: 'primary' | 'neutral' | 'white'

### Available Customisations

- variants
- disabled
- sizes

## Accessibility

### Behaviour

The primary accessibility consideration for the loading component is to convey its meaning to assistive technologies so users are aware of changes in status. Carbon achieves this by exposing the title value (normally “loading”) of the spinning wheel SVG image.

### Keyboard interactions

The loading component has no keyboard accessibility considerations since it is intentionally not operable or navigable. However, Carbon incorporates other accessibility considerations, some of which are described below.

### Research

-​

## Notes

Add `aria-hidden='true'` display something but hide it from being read

## Update log

### [11 july 2023]

Added .md file, aria-hidden applied.
