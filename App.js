new Vue({
    el: '#vue-app',
    data: {
        age: 22,
        x: 0,
        y: 0
    },
    methods: {
        addYear: function(inc) {
            this.age += inc;
        },
        removeYear: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        }
    }
});

new Vue({
    el: '#vue-app-keyboard',
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