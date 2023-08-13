<script setup lang="ts">
import { ref } from 'vue'
import { Movie, Response } from '@/interfaces/Movie'
import config from '~/config/index'

const router = useRouter()

const searchQuery = ref('')
const movies = ref<Movie[]>([])

async function searchMovies () {
  try {
    const { data } = await useFetch<Response>(config.API_BASE_URL, {
      params: {
        s: searchQuery.value,
        apikey: config.API_KEY
      }
    })

    if (data.value?.Response === 'True') {
      movies.value = data.value.Search
    } else {
      movies.value = []
    }
  } catch (error) {
    alert(error)
  }
}

function openMovie (id: string) {
  router.push({ path: '/movies/' + id })
}
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">
      Movie Search
    </h1>
    <div class="flex items-center justify-center mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a movie"
        class="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <button
        class="bg-blue-500 text-white rounded-r-lg px-4 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="searchMovies"
      >
        Search
      </button>
    </div>

    <!-- Movie list -->
    <ul
      v-if="movies?.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-4 cursor-pointer" @click="openMovie(movie.imdbID)">
          <h2 class="text-lg font-semibold">
            {{ movie.Title }}
          </h2>
          <p class="text-gray-600">
            {{ movie.Year }}
          </p>
          <img
            v-if="movie.Poster !== 'N/A'"
            :src="movie.Poster"
            :alt="movie.Title"
            class="mt-4 rounded-lg shadow-md"
          >
          <p v-else class="mt-4 text-gray-600">
            No poster available
          </p>
        </div>
      </li>
    </ul>
    <p v-else class="no-movies text-lg text-gray-800">
      No movies found.
    </p>
  </div>
</template>
