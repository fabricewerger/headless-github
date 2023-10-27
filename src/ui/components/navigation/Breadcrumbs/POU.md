# Breadcrumbs: Principles of Use

## Usage

The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them. Breadcrumbs are always treated as secondary and should never entirely replace the primary navigation. They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.

### How to import

`import { Breadcrumbs } from '@/components/navigation`

### Anatomy

`<Breadcrumbs {...args} />`

### Props

- breadcrumbs: Array<ILink> \*
- currentUrl?: string \*

(\* = required)

### Available Customisations

-

## Accessibility

### Behaviour

Use arialabels to define the breadcrumb to screenreaders. Should have focus & hover styling to indicitate it is clickable. Have atleast 2 changes in appearence (color and underline).

### Keyboard interactions

Link needs to be reached with the TAB button and be activated with ENTER.

### Research

https://www.w3.org/TR/WCAG21/#abstract

## Notes

Base interaction styling might need to change based on design.

## Update log

### [13 july 2023]

Added .md file.
