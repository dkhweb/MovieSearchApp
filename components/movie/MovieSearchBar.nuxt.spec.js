import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieSearch from './MovieSearchBar.vue'

describe('MovieSearch', () => {
  it('renders the component', () => {
    const wrapper = mount(MovieSearch)
    expect(wrapper.exists()).toBe(true)
  })

  it('updates searchQuery when input value changes', async () => {
    const wrapper = mount(MovieSearch)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('Harry Potter')
    expect(wrapper.vm.searchQuery).toBe('Harry Potter')
  })

  // it('searches movies', async () => {
  //     const wrapper = mount(MovieSearch);

  //     const searchInput = wrapper.find('input');
  //     const searchButton = wrapper.find('button');

  //     await searchInput.setValue('Spider-Man');
  //     await searchButton.trigger('click');

  //     await flushPromises();

  //     const movieItems = wrapper.findAll('li');
  //     expect(movieItems.length).toBeGreaterThan(0);
  // });

  // it('displays "No movies found" when no movies are found', async () => {
  //     const wrapper = mount(MovieSearch);
  //     const searchInput = wrapper.find('input');
  //     const searchButton = wrapper.find('button');

  //     await searchInput.setValue('Invalid Movie');
  //     await searchButton.trigger('click');

  //     await flushPromises();

  //     const noMoviesText = wrapper.find('p.no-movies');
  //     expect(noMoviesText.exists()).toBe(true);
  // });
})
