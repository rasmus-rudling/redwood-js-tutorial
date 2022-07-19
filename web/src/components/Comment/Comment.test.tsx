import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Comment from './Comment'

const COMMENT1 = {
  id: 0,
  name: 'Anna',
  createdAt: '2022-07-12T12:34:45Z',
  body: 'Cool blogg!!',
  postId: 2,
}

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = COMMENT1

    render(<Comment comment={comment} />)

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()

    const dateExpect = screen.getByText('12 juli 2022')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
  })

  it('does not render a delete button if user is logged out', async () => {
    render(<Comment comment={COMMENT1} />)

    await waitFor(() =>
      expect(screen.queryByText('Delete')).not.toBeInTheDocument()
    )
  })

  it('renders a delete button if the user is a moderator', async () => {
    mockCurrentUser({
      roles: 'moderator',
      id: 1,
      email: 'moderator@moderator.com',
    })

    render(<Comment comment={COMMENT1} />)

    await waitFor(() => expect(screen.getByText('Delete')).toBeInTheDocument())
  })
})
