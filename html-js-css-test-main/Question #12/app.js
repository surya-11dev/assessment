let array=[]
function get_input(arrOfNum){
            arrOfNum.forEach(function(item){
                console.log("itemmm",item)
                !array.includes(item) ?array.push(item) : ""
            })
            console.log("answerr",array);
        }
        get_input([1, 2, 2, 4, 5, 6, 6])