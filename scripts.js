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
        instagram: 'https://instagram.com/p/01'
      },
      '20230514': {
        bpm: '130',
        key: 'G Minor',
        download: 'https://example.com/sample20230514.mp3',
        instagram: 'https://instagram.com/p/20230514'
      }
    };

    const sample = samples[code];

    if (sample) {
      document.getElementById('sample-details').innerHTML = `
        <h3>Sample Code: ${code}</h3>
        <p>BPM: ${sample.bpm}</p>
        <p>Key: ${sample.key}</p>
        <a href="${sample.instagram}" target="_blank">View Instagram Reel</a>
      `;

      const followBtn = document.getElementById('follow-btn');
      followBtn.addEventListener('click', () => {
        setTimeout(() => {
          const downloadBtn = document.getElementById('download-btn');
          downloadBtn.style.display = 'block';
          downloadBtn.onclick = () => {
            window.location.href = sample.download;
          };
        }, 5000); // Wait 5 seconds after clicking the follow button to show the download link
      });
    } else {
      document.getElementById('sample-details').innerHTML = '<p>Sample not found.</p>';
    }
  }
});
