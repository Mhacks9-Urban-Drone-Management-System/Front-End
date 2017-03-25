function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var strArray[] = allText.split("\n");
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("../map.txt");

for (var i = 0; i < array.length; i++) {
  array[i]
}
