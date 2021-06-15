export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postUrl = ( newUrl ) => {
  console.log("POST FIRED", newUrl);
  fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify({
        "id": newUrl.id,
        "title": newUrl.title,
        "long_url": newUrl.urlToShorten,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
}