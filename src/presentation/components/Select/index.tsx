import React, { useState } from 'react'
import { ISelect, SelectItems } from './types'
import { ChevronDown, ChevronUp } from 'lucide-react'

import * as s from './styled'

export const CustomSelect = ({
  placeholder,
  items,
  onChange,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<SelectItems>()

  const handleChange = (items: SelectItems): void => {
    setSelectValue(items)
    onChange(items)
  }

  return (
    <s.Container onClick={() => { setIsOpen(!isOpen) }} role='select'>
      <div role='select'>
        <div role='selectvalue'>
          {selectValue?.label ?? <s.Placeholder>{placeholder}</s.Placeholder>}
        </div>
      </div>
      <div>
        {isOpen ? <ChevronUp/> : <ChevronDown/>}
      </div>
      {isOpen && <s.Backdrop onClick={() => { setIsOpen(false) }} />}
      {isOpen && <s.Items>
        <ul role='selecitems'>
          {items.map((item: SelectItems) => <li key={Math.random()} onClick={() => { handleChange(item) }} role='selectitem'> {item.label} </li>)}
        </ul>
      </s.Items>}
    </s.Container>
  )
}
