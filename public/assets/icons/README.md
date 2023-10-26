# Converting SVG Icons into React components

For greater control over importing SVGs into a project, as well as addressing some crucial accessibility concerns, we have extended the npm package [SVGO](https://github.com/svg/svgo) to apply some additional transforms. This configuration can be found in the svgo.config.js file.

A full list of configurable options can be found at the SVGO Github page.

## Adding a new SVG to the project

The assumption is that the SVG will originate from Figma, although the following process can apply to any program that produces SVGs.

- Export the icon within a 24 x 24 pixel frame, with a transparent background (hint: the SVG should have the following attribute viewBox="0 0 24 24")
- Dependent on the program used, you may need to remove some additional and unwanted HTML code within the SVG file
- Add to the /source folder, and import into the index.ts file
- The icon can then be imported into the project like so '@/icons/YourNewIcon' and used as a regular React component
