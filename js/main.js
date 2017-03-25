var terrain = [];
$.get('http://simonguo.tech/map.txt', function(data) {
  var lines = data.split('\n');
  for (var i = 0; i < lines.length; i++)
  {
    terrain.push([]);
    var tiles = lines[i].split(' ');
    for (var j = 0; j < tiles.length - 1; j++)
    {
      var tileData = tiles[j].split(',');
      terrain[i].push([parseInt(tileData[0]), parseInt(tileData[1])]);
    }
  }
  console.log(terrain);
});
