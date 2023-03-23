import type { ParsedUrlQuery } from 'querystring'
import { createContext, useContext, useState, type ReactNode } from 'react'

type IUpdateFilter = {
  attribute: string
  filters: string[]
}

type IRemoveFilter = {
  attribute: string
  filter: string
}

type FilterConfiguration = {
  filters: Map<string, string[]>
  // eslint-disable-next-line no-unused-vars
  updateFilters: ({ attribute, filters }: IUpdateFilter) => void
  // eslint-disable-next-line no-unused-vars
  removeFilter: ({ attribute, filter }: IRemoveFilter) => void
  removeAllFilters: () => void
  filterCount: number
}

export const extractFiltersfromUrl = (url: ParsedUrlQuery) => {
  return {
    test: url,
  }
}

export const FilterContext = createContext<FilterConfiguration>({
  filters: new Map(),
  updateFilters: () => {},
  removeFilter: () => {},
  removeAllFilters: () => {},
  filterCount: 0,
})

type FilterContextProviderProps = {
  children: ReactNode
}

const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [filters, setFilters] = useState<Map<string, string[]>>(new Map())

  const updateFilters = ({
    attribute,
    filters: activeFilters,
  }: IUpdateFilter) => {
    setFilters(new Map(filters.set(attribute, activeFilters)))
  }

  const removeFilter = ({ attribute, filter }: IRemoveFilter) => {
    const updatedFilterGroup =
      filters.get(attribute)?.filter((value) => value !== filter) || []
    setFilters(new Map(filters.set(attribute, updatedFilterGroup)))
  }

  const removeAllFilters = () => {
    setFilters(new Map())
  }

  const filterCount = Array.from(filters.entries()).reduce(
    (accumulator, [, selectedFilters]) => {
      return selectedFilters.length + accumulator
    },
    0
  )

  return (
    <FilterContext.Provider
      value={{
        filters,
        updateFilters,
        removeFilter,
        removeAllFilters,
        filterCount,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider

export const useFilterContext = () => useContext(FilterContext)
