const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray = [];


/* Create Elements and DOM */
function displayPhotos(){
  //Run function for each object in photosArray
  photosArray.forEach((photos)=>{
      /* const dp = document.createElement('img');
      dp.setAttribute('src',photos.profile_image.small); */

      const name = document.createElement('h5');
      name.setAttribute('class','mt-2')
      name.innerText = photos.user.name;

      const item = document.createElement('a');
      item.setAttribute('href',photos.links.html);
      item.setAttribute('target', '_blank');

      const img = document.createElement('img');
      img.setAttribute('src',photos.urls.regular);
      img.setAttribute('alt',photos.alt_description);
      img.setAttribute('title',photos.alt_description);

      const download = document.createElement('button');
      download.setAttribute('class',"btn btn-primary btn-sm mb-5");
      download.innerText = 'Download';

      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href',photos.links.download);

      /* puting <img> inside <a> */
      /* imageContainer.appendChild(dp); */
      imageContainer.appendChild(name);
      item.appendChild(img);  
      imageContainer.appendChild(item);
      downloadLink.appendChild(download);
      imageContainer.appendChild(downloadLink);


  });
}
/* Unsplash API */
const count = 3;
const apiKey = 'uUbaA6Q7JBUn-9aeJgQDOTe88_xzyG2_H7SAjjpKi7k';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

/* Get Photos from Unsplash API */
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
         console.log(photosArray); 
        displayPhotos();
        
    } catch (error) {
       console.log("Error dumbass",error) 
    }
}

// On load
getPhotos();