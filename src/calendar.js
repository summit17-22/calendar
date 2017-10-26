var key = '1u6WjLROCdfA0mJIwuyQ-vPz1ATE9cLgDVqfhlHTyjEU';

function init() {
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) {
            console.log(data[0])
            
            var assignment = data[0]
            
            var print = "Assignment <b>";
            
            print += assignment.name
            
            print += "</b> is from <b>"
            
            print += assignment.class
            
            print += "</b> class and is due on <b>"
            
            print += assignment.duedisplay
            
            print += "</b>. It has criteria <b>"
            
            print += assignment.criteria
            
            print += "</b>"
           
            document.write(print)
        },
        simpleSheet: true
    })
}

window.addEventListener('DOMContentLoaded', init)