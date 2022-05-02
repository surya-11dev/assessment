utils.depthOf = function(object) {
    var level = 1;
    for(var key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            var depth = utils.depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}
