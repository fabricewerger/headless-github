# Accordion: Principles of Use

## Usage

An accordion is a vertically stacked list of headers that reveal or hide associated sections of content. Use to organize related information, to shorten pages and reduce scrolling when content is not crucial to read in full, When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.

### How to import

`import { Accordion } from '@/component/content`

### Anatomy

```
<Accordion id='filters-all' className='hidden md:block'>
       <Accordion.Title
           id='filters-all'
           className='relative flex-1 text-left'
       >
       </Accordion.Title>
       <Accordion.Body id='filters-all'>
       </Accordion.Body>
   </Accordion>
```

### Props

- children: ReactNode\*
- isOpen: boolean
- id: string\*

(\* = required)

### Available Customisations

-

## Accessibility

### Behaviour

When focusing or hovering on this component, certain colours should change depending on the variant. With this component the user should interact with the platform in one way or another like state change.

### Keyboard interactions

Each accordion is a tab stop. Space or Enter keys expand or collapse accordions, which are collapsed by default. Interactive elements within expanded accordions integrate into the tab order automatically.

### Research

https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/

## Notes

-

## Update log

### [10 july 2023]

Added .md file.
