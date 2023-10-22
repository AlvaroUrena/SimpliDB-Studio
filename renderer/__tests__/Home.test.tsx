import { render, screen } from '@testing-library/react'
import Home from '@/pages'
import { withNextTRPC } from '@/utils/trpcForTest'

it('should have Click button', () => {
  render(<Home />, { wrapper: withNextTRPC }) // ARRANGE (ARRANGE EVERYTHING FOR THE TEST)

  const myElem = screen.getByText('Click') // ACTION

  expect(myElem).toBeInTheDocument() // ASSERT
})
