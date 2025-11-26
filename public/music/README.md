# Wedding Background Music

## How to Add Music

Place your wedding music file in this directory with the name `wedding-song.mp3`.

### Option 1: Using an Offline File

1. Choose your favorite wedding song
2. Convert it to MP3 format if needed
3. Rename the file to `wedding-song.mp3`
4. Place it in this `public/music/` directory

### Option 2: Using an Online Link

If you prefer to use a music file hosted online:

1. Open `app/components/MusicPlayer.tsx`
2. Find the line: `src="/music/wedding-song.mp3"`
3. Replace it with your online URL: `src="https://your-music-url.com/song.mp3"`

## Supported Formats

- MP3 (recommended)
- WAV
- OGG

## Notes

- The music will auto-play when visitors open the website (if browser allows)
- Visitors can toggle the music on/off using the button in the bottom-right corner
- The music will loop continuously
