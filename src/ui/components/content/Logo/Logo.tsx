import React from 'react'

import YouweLogo from '../../../../../public/youwe-logo.svg'

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

interface LogoProps {
  size?: 'md'
  variant: 'standard'
  alt?: string
}

interface ILogoFamilyClasses {
  size: Record<string, string>
  variant: Record<string, SVGComponent>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    md: 'h-[300px] w-[300px]',
  },
  variant: {
    standard: YouweLogo,
  },
}

const Logo = ({ size = 'md', variant = 'standard', alt }: LogoProps) => {
  const SVGLogo = logoFamilyClasses['variant'][variant]

  return (
    <>
      <SVGLogo className={logoFamilyClasses['size'][size]} />
      {alt && <span className='sr-only'>{alt}</span>}
    </>
  )
}

export default Logo
