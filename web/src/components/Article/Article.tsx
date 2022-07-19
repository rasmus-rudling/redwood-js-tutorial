import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

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
      {!summary && (
        <div className="mt-5">
          <CommentForm postId={article.id} />

          <div className="mt-5">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
