import { render, cleanup } from '@redwoodjs/testing'

import BottomNav from './BottomNav'

describe('BottomNav', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BottomNav />)
    }).not.toThrow()
  })
})
