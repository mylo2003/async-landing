const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=OLAK5uy_nuPOxdguy3evibU3-qYy3dfT-jcDjvmXw&part=snippet&maxResults=9';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd184c3e23amsh3f130883e71e936p1675cdjsn5a978ab2864a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try{
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map (video => `
      <div class="group relative mt-5">
          <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-md text-slate-200">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${video.snippet.title}
              </h3>
          </div>
      </div>
      `).slice(0, 8).join('')}
      `;
      content.innerHTML = view;

  }catch (error){
      alert('Ups... Something wrong');
  }
})();