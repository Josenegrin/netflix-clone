import { HTMLInputTypeAttribute } from 'react'

export interface InputProps {
  name: string;
  onChange: any;
  value: string;
  label: string;
  type?: HTMLInputTypeAttribute
}