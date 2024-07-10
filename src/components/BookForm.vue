<template>
    <div>
        <h2>{{ isEditing ? 'Edit Book' : 'Add Book' }}</h2>
        <form @submit.prevent="handleSubmit">
            <label for="title">Title:</label>
            <input type="text" v-model="localBook.title" required>
            <label for="author">Author:</label>
            <input type="text" v-model="localBook.author" required>
            <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
        </form>
        <button @click="$emit('cancel')">Cancel</button>
    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            default: () => ({ title: '', author: '' })
        },
        isEditing: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localBook: { ...this.book }
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('save-book', this.localBook);
        }
    },
    watch: {
        book: {
            immediate: true,
            handler(newVal) {
                this.localBook = { ...newVal };
            }
        }
    }
}
</script>