<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Methods of Array</title>
</head>
<body>
    <script>
      var games=[
            'Football',
            'Cricket',
            'Tennis',
            'TableTennis',
            'Badminton'
        ];  

document.write('All Games');
document.write('');

games.forEach(detail_games);

function detail_games(games,index,arr){

    
    // document.write('['+index+']='+games);
    document.write(+games+'='+index);
}  

    </script>
</body>
</html>