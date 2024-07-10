import Vue from 'vue';
import { createStore } from "vuex";
import axios from 'axios';

// Create a new store instance.
export const store = createStore({
  state: {
    books: [],
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    ADD_BOOK(state, book) {
      state.books.push(book);
    },
    UPDATE_BOOK(state, updatedBook) {
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        Vue.set(state.books, index, updatedBook);
      }
    },
    DELETE_BOOK(state, bookId) {
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      const response = await axios.get("/data/books.json");
      commit("SET_BOOKS", response.data);
    },
    addBook({ commit }, book) {
      commit("ADD_BOOK", book);
    },
    updateBook({ commit }, book) {
      commit("UPDATE_BOOK", book);
    },
    deleteBook({ commit }, bookId) {
      commit("DELETE_BOOK", bookId);
    },
  },
  getters: {
    books: (state) => state.books,
    getBookById: (state) => (id) => state.books.find((book) => book.id === id),
  },
});
