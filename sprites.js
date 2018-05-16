function loadTextures(){
    //battery
    var frame0 = [
        '.2222222555555',
        '.2222222555555',
        '12232222555555',
        '12333222553335',
        '12232222555555',
        '.2222222555555',
        '.2222222555555'
    ];
    game.create.texture('battery0', frame0, 6, 6, 0);
    var frame1 = [
        '5555552222222.',
        '5555552222222.',
        '55555522223221',
        '53335522233321',
        '55555522223221',
        '5555552222222.',
        '5555552222222.',
        
    ];
    game.create.texture('battery1', frame1, 6, 6, 0);

    //electron
    var frame0 = [
	
        '..33..',
        '.3223.',
        '322223',
        '322223',
        '.3223.',
        '..33..'
    ];
    game.create.texture('electron0', frame0, 6, 6, 1);
    var frame1 = [
        
        '..22..',
        '.2332.',
        '233332',
        '233332',
        '.2332.',
        '..22..'
    ];
    game.create.texture('electron1', frame1, 6, 6, 1);
    
}

