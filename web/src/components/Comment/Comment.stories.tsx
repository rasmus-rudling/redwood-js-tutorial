import Comment from './Comment'

const COMMENT1 = {
  id: 0,
  name: 'Anna',
  createdAt: '2022-07-12T12:34:45Z',
  body: 'Cool blogg!!',
  postId: 2,
}

export const defaultView = () => {
  return <Comment comment={COMMENT1} />
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: 'moderator',
    id: 1,
    email: 'moderator@moderator.com',
  })

  return (
    <div className="m-4">
      <Comment comment={COMMENT1} />
    </div>
  )
}

export default { title: 'Components/Comment' }
