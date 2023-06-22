import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from '.'
import { ButtonProps } from './interface'
import { Children } from 'react'

const defaultProps: ButtonProps = {
  children: 'test',
  onClick: () => {}
}

describe('[ components / Button / index ]', () => {
  describe('When Button is rendered', () => {
    it('should render', () => {

      const { asFragment } = render(<Button {...defaultProps}/>)

      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('When the onClick event is executed', () => {
    it('should call onClick event', () => {
      const props: ButtonProps = {
        ...defaultProps,
        children: 'this is a button',
        onClick: vi.fn()
      }
      render(<Button {...props}/>)
      fireEvent.click(screen.getByText('this is a button'))

      expect(props.onClick).toHaveBeenCalled()
    })
  })
})