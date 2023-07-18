document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  const playlist = document.getElementById('playlist');

  // Define your songs and their sources
  const songs = [
    { title: 'Song 1', source: 'song1.mp3' },
    { title: 'Song 2', source: 'song2.mp3' },
    { title: 'Song 3', source: 'song3.mp3' }
  ];

  // Create playlist
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = song.source;
    link.textContent = song.title;
    listItem.appendChild(link);
    playlist.appendChild(listItem);
  }

  // Play selected song
  playlist.addEventListener('click', function(e) {
    e.preventDefault();
    const target = e.target;
    if (target.tagName === 'A') {
      const source = target.getAttribute('href');
      audioPlayer.src = source;
      audioPlayer.play();
    }
  });
});
