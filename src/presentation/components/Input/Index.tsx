'use client'

import * as s from './styled'
import { IInput } from './types'
import { useIMask } from 'react-imask';
import { inputMasks } from './inputMasks';
import { forwardRef } from 'react';

export const CustomInput = forwardRef<HTMLInputElement, IInput>(function Input(props, ref) {

  const { label, endAdornment, hint, errorMessage, mask, required, ...rest } = props
  const { ref: iMaskRef } = useIMask(mask ? inputMasks[mask] : {})



  return (
    <label>
      <s.Label>
        {label}
        <span className='req'>{required && '*'}</span>
      </s.Label>
      <s.Container>
        <s.Input
          ref={(domNode) => {
            if (domNode) {
              if (ref) {
                (ref as ((instance: HTMLInputElement) => void))(domNode)
              }
              iMaskRef.current = domNode
            }
          }} {...rest} />
        {endAdornment}
      </s.Container>
      {!errorMessage && <s.Hint>{hint}</s.Hint>}
      <s.Error  role="alert">{errorMessage}</s.Error>
    </label>
  )
})