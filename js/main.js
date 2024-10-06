
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/

document.getElementById('album-title-input').focus();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.elements);
  const isValid = validateForm(event.target.elements);

  if (isValid) {
      console.log('Form is valid and ready for submission:', {
          title: event.target.elements['album-title'].value,
          description: event.target.elements['album-description'].value,
          art: event.target.elements['album-art'].value,
      });
      const album = document.querySelector('#all-albums-list');
      album.innerHTML = album.innerHTML + `
      <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="img/${event.target.elements['album-art'].value}"/>
        <div class="card-body">
          <h5 class="card-title">${event.target.elements['album-title'].value}</h5>
          <p class="card-text">${event.target.elements['album-description'].value}</p>
        </div>
      </div>
    </div>
    `;
  } else {
      console.log('Form is invalid. Please correct the errors above.');
  }
})

// Function to validate album title
const validateAlbumTitle = (title) => {
  const titleInput = document.getElementById('album-title-input');

  if (!title || title.length > 60) {
      titleInput.classList.add('is-invalid');
      return false;
  } else {
      titleInput.classList.remove('is-invalid');
      return true;
  }
}

// Function to validate album description
const validateAlbumDescription = (description) => {
  const descriptionInput = document.getElementById('album-description-input');

  if (!description || description.length > 255) {
      descriptionInput.classList.add('is-invalid');
      return false;
  } else {
      descriptionInput.classList.remove('is-invalid');
      return true;
  }
}

// Function to validate album art
const validateAlbumArt = (art) => {
  const artInput = document.getElementById('albume-art-input');

  if (!art || !art.endsWith('.jpg')) {
      artInput.classList.add('is-invalid');
      return false;
  } else {
      artInput.classList.remove('is-invalid');
      return true;
  }
}

// Function to validate elements
const validateForm = (elements) => {
  const title = elements['album-title'].value
  const description = elements['album-description'].value;
  const art = elements['album-art'].value;

  const isTitleValid = validateAlbumTitle(title);
  const isDescriptionValid = validateAlbumDescription(description);
  const isArtValid = validateAlbumArt(art);

  return isTitleValid && isDescriptionValid && isArtValid;
}