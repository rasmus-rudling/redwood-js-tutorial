import { ARTICLE1 } from '../ArticlesCell/ArticlesCell.mock'

import Article from './Article'

export const full = () => {
  return <Article article={ARTICLE1} />
}

export const summary = () => {
  return <Article article={ARTICLE1} summary={true} />
}

export default { title: 'Components/Article' }
