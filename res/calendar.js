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
