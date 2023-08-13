<script setup lang="ts">
import { Movie } from '@/interfaces/Movie'
import config from '~/config/index'

const route = useRoute()

const { data: movie } = await useFetch<Movie>(config.API_BASE_URL, {
  params: {
    i: route.params.id,
    apikey: config.API_KEY
  }
})
</script>

<template>
  <div class="container mx-auto py-8">
    <div class="flex items-center justify-center mb-8">
      <h2 class="text-2xl font-semibold">
        {{ movie?.Title }}
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-4">
        <img
          v-if="movie?.Poster !== 'N/A'"
          :src="movie?.Poster"
          :alt="movie?.Title"
          class="w-full h-auto rounded-lg shadow-md"
        >
        <p v-else class="mt-4 text-gray-600">
          No poster available
        </p>
      </div>
      <div v-if="movie" class="p-4">
        <ul class="list-disc pl-4">
          <li><span class="font-semibold">Year:</span> {{ movie.Year }}</li>
          <li><span class="font-semibold">Rated:</span> {{ movie.Rated }}</li>
          <li><span class="font-semibold">Released:</span> {{ movie.Released }}</li>
          <li><span class="font-semibold">Runtime:</span> {{ movie.Runtime }}</li>
          <li><span class="font-semibold">Genre:</span> {{ movie.Genre }}</li>
          <li><span class="font-semibold">Director:</span> {{ movie.Director }}</li>
          <li><span class="font-semibold">Actors:</span> {{ movie.Actors }}</li>
          <li><span class="font-semibold">Plot:</span> {{ movie.Plot }}</li>
          <li><span class="font-semibold">Language:</span> {{ movie.Language }}</li>
          <li><span class="font-semibold">Country:</span> {{ movie.Country }}</li>
          <li><span class="font-semibold">Awards:</span> {{ movie.Awards }}</li>
          <li><span class="font-semibold">IMDb Rating:</span> {{ movie.imdbRating }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.text-2xl {
  color: #333;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.list-disc {
  list-style-type: disc;
  margin-left: 1.25rem;
}
</style>
