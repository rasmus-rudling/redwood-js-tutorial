import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

import { ARTICLE1 } from '../ArticlesCell/ArticlesCell.mock'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    render(<Article article={ARTICLE1} />)

    expect(screen.getByText(ARTICLE1.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE1.body)).toBeInTheDocument()
  })

  it('renders comments when displaying a full blog post', async () => {
    const comment = standard().comments[0]
    render(<Article article={ARTICLE1} />)

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    )
  })

  it('renders a summary of a blog post', () => {
    render(<Article article={ARTICLE1} summary={true} />)

    expect(screen.getByText(ARTICLE1.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })

  it('does not render comments when displaying a summary', async () => {
    const comment = standard().comments[0]
    render(<Article article={ARTICLE1} summary={true} />)

    await waitFor(() =>
      expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
    )
  })
})
