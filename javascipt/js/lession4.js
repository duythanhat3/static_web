var Color = {
    color: 'red',
    showColor: function () {
        document.getElementById('color').innerHTML = this.color;
    },
    showMultiColor: function () {
        var clor = 'blue';
        document.getElementById('color').innerHTML = this.color + ', ' + clor;
    }
};


var Song = {
    showLyrics: function() {
        var lyrics = "Nay nguoi anh yeu hoi \"Lai gan day voi anh\" anh se trao len doi moi";
        document.getElementById('color').innerHTML = lyrics;
    }
};