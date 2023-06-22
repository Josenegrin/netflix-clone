import { describe, it, vi, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import { InputProps } from './interface'
import Input from '.'

const defaultProps: InputProps = {
  name: 'name',
  onChange: () => {},
  value: '',
  label: 'this is the name',
  type: 'text'
}

describe('[ components / Input / index ]', () => {
  describe('When Input is rendered', () => {
    it('should render', () => {
      // Act
      const { asFragment } = render(<Input {...defaultProps}/>)

      // Assert
      expect(asFragment()).toMatchSnapshot()
    })
  })
  
  describe('When the value is changed', () => {
    it('Should call onChange', () => {
      const props: InputProps = {
        ...defaultProps,
        name: 'input-name',
        onChange: vi.fn()
      }
      
      render(<Input {...props}/>)

      fireEvent.change(screen.getByPlaceholderText('input-name'), {
        target: {value: 'new value'}
      })
    })
  })
})