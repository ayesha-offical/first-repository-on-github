function makeAlbum (artist: string, title: string):{artist: string; title: string}{
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
 
let album = makeAlbum("JIMIN","like crazy");
console.log(album);
album = makeAlbum("SUGA","D_DAY");
console.log(album);
album = makeAlbum("JIN","astronout");
console.log(album);

