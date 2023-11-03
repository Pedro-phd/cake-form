import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode
  errorMessage?: string
  label?: string
  hint?: string
  mask?: 'phone' | 'date' | 'zipcode' | 'hour'
}