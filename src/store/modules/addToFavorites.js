import addToFavoritesApi from '@/api/addToFavorites'

export const actionTypes = {
	addToFavorites: '[addToFavorites] Add to favorites'
}

export const mutationTypes = {
	addToFavoriteStart: '[addToFavorites] Add to favorites start',
	addToFavoriteSuccess: '[addToFavorites] Add to favorites success',
	addToFavoriteFailure: '[addToFavorites] Add to favorites failure'
}

const mutations = {
	[mutationTypes.addToFavoriteStart]() { },
	[mutationTypes.addToFavoriteSuccess]() { },
	[mutationTypes.addToFavoriteFailure](){},
}

const action = {
	[actionTypes.addToFavorites](context, { slug, isFavorited }) {
		return new Promise(resolve => {
			context.commit(mutationTypes.addToFavoriteStart)
			const promise = isFavorited ? addToFavoritesApi.removeFromFavorites(slug) : addToFavoritesApi.addToFavorites(slug)

			promise.then(article => {
				context.commit(mutationTypes.addToFavoriteSuccess, article); resolve(article)
			})
			.catch(() => context.commit(mutationTypes.addToFavoriteFailure))
		})
	}
}

export default {
	action,
	mutations
}