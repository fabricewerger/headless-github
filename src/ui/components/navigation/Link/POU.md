# Link: Principles of Use

## Usage

Links are used as navigational elements and can be used on their own or inline with text. They provide a lightweight option for navigation but like other interactive elements, too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly. Use a button instead of a link for actions that will change data or manipulate how it is displayed, change a state, or trigger an action. Buttons should never be used for navigational actions.

### How to import

`import { Link } from '@/components/navigation`

### Anatomy

Internal link

```
<Link href={href} {...props}>
    {children}
</Link>
```

External link

```
<a href={href} target={target} rel='nofollow' {...props}>
    {children}
</a>
```

### Props

- children: string \*
- disabled: boolean \*
- href: string \*
- target: string \*
- children \*
- onClick \*
- ...props \*

(\* = required)

### Available Customisations

-

## Accessibility

### Behaviour

Give the link a role '`link`' for screenreaders. Should have focus & hover styling to indicitate it is clickable. Have atleast 2 changes in appearence (color and underline).

### Keyboard interactions

Link needs to be reached with the TAB button and be activated with ENTER.

### Research

https://www.w3.org/TR/WCAG21/#abstract

## Notes

Base interaction styling might need to change based on design.

## Update log

### [13 july 2023]

Added .md file, added accessibility attributes.
