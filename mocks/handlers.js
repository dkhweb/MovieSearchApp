import { rest } from 'msw'
import movie from './movie.json'
import config from '~/config/index'

export const handlers = [
  rest.get(config.API_BASE_URL, (_req, res, ctx) => {
    const queryParams = _req.url.searchParams

    const searchParam = queryParams.get('s')
    const idParam = queryParams.get('i')

    if (searchParam?.length) {
      return res(
        ctx.status(200),
        ctx.json({
          Response: 'True',
          Search: [movie]
        })
      )
    } else if (idParam?.length) {
      return res(
        ctx.status(200),
        ctx.json(movie)
      )
    }
  })
]
