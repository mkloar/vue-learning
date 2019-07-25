new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
    },
    methods: {
        logName: function() {
           console.log("Test")
        },
        logAge: function() {
            console.log("Test #2");
        }
    }
});
