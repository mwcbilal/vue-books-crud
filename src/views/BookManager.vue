<template>
    <div>
        <BookList @edit-book="editBook" @create-book="createBook" />
        <BookForm v-if="showForm" :book="currentBook" :isEditing="isEditing" @save-book="saveBook"
            @cancel="cancelForm" />
    </div>
</template>

<script>
import BookList from '../components/BookList.vue';
import BookForm from '../components/BookForm.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        BookList,
        BookForm
    },
    data() {
        return {
            showForm: false,
            currentBook: null,
            isEditing: false
        }
    },
    methods: {
        ...mapActions(['addBook', 'updateBook']),
        createBook() {
            this.currentBook = { title: '', author: '' };
            this.isEditing = false;
            this.showForm = true;
        },
        editBook(book) {
            this.currentBook = { ...book };
            this.isEditing = true;
            this.showForm = true;
        },
        saveBook(book) {
            if (this.isEditing) {
                this.updateBook(book);
            } else {
                this.addBook({ ...book, id: Date.now() });
            }
            this.showForm = false;
        },
        cancelForm() {
            this.showForm = false;
        }
    }
}
</script>