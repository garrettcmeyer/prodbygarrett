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
        instagram: 'https://www.instagram.com/reel/C6hRSSmvgqr/'
      },
      '20230514': {
        bpm: '130',
        key: 'G Minor',
        download: 'https://example.com/sample20230514.mp3',
        instagram: 'https://www.instagram.com/reel/C6hRSSmvgqr/'
      }
    };

    const sample = samples[code];

    if (sample) {
      document.getElementById('sample-details').innerHTML = `
        <h3>Sample Code: ${code}</h3>
        <p>BPM: ${sample.bpm}</p>
        <p>Key: ${sample.key}</p>
      `;

      const embedCode = `
        <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${sample.instagram}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
          <div style="padding:16px;">
            <a href="${sample.instagram}?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
              <div style=" display: flex; flex-direction: row; align-items: center;">
                <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                  <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                  <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                </div>
              </div>
              <div style="padding: 19% 0;"></div>
              <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,5
