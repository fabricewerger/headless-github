/* eslint-disable react/no-array-index-key */
import { ComponentPropsWithRef, ReactNode } from 'react'

interface ListProps extends ComponentPropsWithRef<'ul'> {
  direction?: 'row' | 'column'
  children: ReactNode[]
}

interface IListFamilyClasses {
  direction: Record<string, string>
}

const listFamilyClasses: IListFamilyClasses = {
  direction: {
    column: 'flex-column justify-between',
    row: 'flex-row [&_li]:w-full flex-wrap',
  },
}

const List = ({ direction = 'column', className, children }: ListProps) => {
  const childrenAsArray = Array.isArray(children)
    ? children.filter(Boolean)
    : [children].filter(Boolean)

  return (
    <ul
      className={`${className || ''} flex ${
        listFamilyClasses['direction'][direction]
      }`}
    >
      {childrenAsArray.map((child: ReactNode, index: number) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  )
}

export default List
