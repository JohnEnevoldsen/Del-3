Vue.createApp({

    data() {

        return {
            word: null,
            wordToShow: null,
            wordInLower: null,
            wordInUpper: null
        }

    },

    methods: {
        showIt(word){
            word = "" + word
            this.wordToShow = word
            this.wordInLower = word.toLowerCase()
            this.wordInUpper = word.toUpperCase()
        }
    }

}).mount("#app")