var grid = emptyGrid(20,20,function(el,row,col,i){
        
});

document.body.appendChild(grid);
     
function emptyGrid( rows, collumns, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<collumns;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}