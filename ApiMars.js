
btn = document.querySelector("#btnImagen");
img = document.querySelector("#imgMarte");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;