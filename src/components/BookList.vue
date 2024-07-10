<template>
    <div>
        <h2>Book List</h2>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.title }} by {{ book.author }}
                <button @click="editBook(book)">Edit</button>
                <button @click="deleteBook(book.id)">Delete</button>
            </li>
        </ul>
        <button @click="createBook">Add Book</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['books'])
    },
    methods: {
        ...mapActions(['deleteBook']),
        editBook(book) {
            this.$emit('edit-book', book);
        },
        createBook() {
            this.$emit('create-book');
        }
    },
    created() {
        this.$store.dispatch('fetchBooks');
    }
}
</script>