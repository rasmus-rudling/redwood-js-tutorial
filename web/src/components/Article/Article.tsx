import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
  summary?: boolean
}

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article className="mt-4 first:mt-0">
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      {/* <div>Posted at: {article.createdAt}</div> */}
    </article>
  )
}

export default Article
