import { render, screen } from '@redwoodjs/testing/web'

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

  it('renders a summary of a blog post', () => {
    render(<Article article={ARTICLE1} summary={true} />)

    expect(screen.getByText(ARTICLE1.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })
})
