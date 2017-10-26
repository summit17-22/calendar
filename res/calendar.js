var key = '1u6WjLROCdfA0mJIwuyQ-vPz1ATE9cLgDVqfhlHTyjEU';

function init() {
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) {
            console.log(data)
        },
        simpleSheet: true
    })
}

window.addEventListener('DOMContentLoaded', init)

var subjects = ["Socials", "English", "Math", "Science"]
var colors = ["#d32f2f", "#2e7d32", "#1565c0", "#ffee58"]