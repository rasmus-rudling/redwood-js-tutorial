import Comment from './Comment'

export const COMMENT1 = {
  name: 'Anna',
  createdAt: '2022-07-12T12:34:45Z',
  body: 'Cool blogg!!',
}

export const generated = () => {
  return <Comment comment={COMMENT1} />
}

export default { title: 'Components/Comment' }
