new Vue({
    el: '#vue-app',
    data: {
        name: "Jelko",
        job: "Ninja",
        website: "http://www.thenetninja.co.uk",
        websiteTag: '<a href="http://www.thenetninja.co.uk">Link #2 </a>',
        age: 22,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " "+this.name;
        },
        addYear: function(inc) {
            this.age += inc;
        },
        removeYear: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});