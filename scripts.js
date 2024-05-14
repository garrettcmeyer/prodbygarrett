function searchSample() {
  const code = document.getElementById('search-bar').value;
  if (code) {
    window.location.href = `results.html?code=${code}`;
  } else {
    alert('Please enter a code.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code && document.getElementById('sample-details')) {
    // Example data, replace this with actual data fetching logic
    const samples = {
      '01': {
        bpm: '120',
        key: 'C Major',
        download: 'https://example.com/sample01.mp3',
        instagram: 'https://www.instagram.com/reel/C5xCo4-LO2u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      },
      '20230514': {
        bpm: '130',
        key: 'G Minor',
        download: 'https://example.com/sample20230514.mp3',
        instagram: 'https://www.instagram.com/p/20230514/'
      }
    };

    const sample = samples[code];

    if (sample) {
      document.getElementById('sample-details').innerHTML = `
        <h3>Sample Code: ${code}</h3>
        <p>BPM: ${sample.bpm}</p>
        <p>Key: ${sample.key}</p>
      `;

      const embedUrl = `https://www.instagram.com/p/${code}/embed`;

      const reelEmbedContainer = document.getElementById('reel-embed-container');
      reelEmbedContainer.innerHTML = `<iframe src="${embedUrl}" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`;

      const downloadBtn = document.getElementById('download-btn');
      downloadBtn.style.display = 'block';
      downloadBtn.onclick = () => {
        window.location.href = sample.download;
      };
    } else {
      document.getElementById('sample-details').innerHTML = '<p>Sample not found.</p>';
    }
  }
});
