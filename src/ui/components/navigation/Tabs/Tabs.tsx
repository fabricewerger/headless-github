'use client'

import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const TabsContext = createContext<ITabContext>({})

const Tabs = ({ children }: PropsWithChildren) => {
  const [tab, setTab] = useState<number>()

  return (
    <TabsContext.Provider value={{ tab, setTab }}>
      <div className='relative w-full overflow-x-scroll scroll-smooth'>
        <div className='flex border-b border-surface gap-sm'>{children}</div>
      </div>
    </TabsContext.Provider>
  )
}

export const Tab = ({ children, isSelected, id }: TabProps) => {
  const { tab, setTab } = useContext(TabsContext)

  useEffect(() => {
    if (isSelected && setTab) setTab(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='cursor-pointer relative overflow-hidden group'
      {...(setTab && { onClick: () => setTab(id) })}
    >
      <div
        className={`px-sm py-md bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 ${
          tab === id ? 'bg-opacity-100' : ''
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute bottom-0 h-xs w-[0%] bg-surface-black transition-all left-1/2 -translate-x-1/2 duration-[400ms] ${
          tab === id ? 'w-[100%]' : ''
        }`}
      ></div>
    </div>
  )
}

interface ITabContext {
  tab?: number
  setTab?: (tab?: number) => void
}

interface TabProps {
  children: ReactNode
  isSelected?: boolean
  id: number
}

Tabs.Tab = Tab

export default Tabs
