"use strict";

const URL = "https://mock-data-api.firebaseio.com/webb21/products.json";

// const data = [
//   {
//     description: "Please don't eat this one... for real!",
//     id: 16065,
//     images: [
//       {
//         alt: "an orange painted blue",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/mysterious-orange_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/mysterious-orange_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/mysterious-orange_S.jpg",
//         },
//       },
//     ],
//     name: "Mysterious Orange",
//     price: 324,
//     rating: 4.7,
//     stock: 7,
//   },
//   {
//     description:
//       "Get this rare pieace of tech that has been hand painted in a matte white finnish!",
//     id: 18272,
//     images: [
//       {
//         alt: "a white playstation",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/white-playstation_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/white-playstation_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/white-playstation_S.jpg",
//         },
//       },
//     ],
//     name: "White Playstation",
//     price: 4595,
//     rating: 4.5,
//     stock: 2,
//   },
//   {
//     description:
//       "Want to look cool whilst listening to some sweet music? Get theese matte black over-the-ear headphones today!",
//     id: 19336,
//     images: [
//       {
//         alt: "black hadphones",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/black-headphones_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/black-headphones_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/black-headphones_S.jpg",
//         },
//       },
//     ],
//     name: "Black Headphones",
//     price: 3426,
//     rating: 3.5,
//     stock: 200,
//   },
//   {
//     description:
//       "Drink a lot of water? Don't know where to store your water once it leaves the faucet... tired of having to drink straight from the sink? The wait is over with this unique set of Porcelain Carafes.",
//     id: 20281,
//     images: [
//       {
//         alt: "a set of 3 porcelain carafes",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/set-of-3-porcelain-carafes_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/set-of-3-porcelain-carafes_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/set-of-3-porcelain-carafes_S.jpg",
//         },
//       },
//     ],
//     name: "Set of 3 Porcelain Carafes",
//     price: 399,
//     rating: 2.1,
//     stock: 12,
//   },
//   {
//     description:
//       "Having trouble getting up in the morning? Scared that you might hit the snooze-button so hard the display on your smartphone cracks... again... Fear not! We present to you the original alarm clock! And no...it doesn't have any apps!",
//     id: 23787,
//     images: [
//       {
//         alt: "alarm clock",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/alarm-clock_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/alarm-clock_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/alarm-clock_S.jpg",
//         },
//       },
//     ],
//     name: "Alarm Clock",
//     price: 349,
//     rating: 3.1,
//     stock: 13,
//   },
//   {
//     description:
//       "Tired of Instagram filters? Spice things up with the original Instant camera!",
//     id: 24524,
//     images: [
//       {
//         alt: "polaroid instant camera",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/polaroid-pronto600-camera_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/polaroid-pronto600-camera_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/polaroid-pronto600-camera_S.jpg",
//         },
//       },
//     ],
//     name: "Polaroid Pronto600 Camera",
//     price: 679,
//     rating: 4.6,
//     stock: 53,
//   },
//   {
//     description:
//       "This is it! The answer to all your questions... just don't ask me where it goes...",
//     id: 28261,
//     images: [
//       {
//         alt: "a metal key",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/the-key-to-happiness_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/the-key-to-happiness_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/the-key-to-happiness_S.jpg",
//         },
//       },
//     ],
//     name: "The Key to Happiness",
//     price: 6575,
//     rating: 5,
//     stock: 1,
//   },
//   {
//     description:
//       "We really have no idea why thiss bottle costs so much but hey... people are buying them like crazy... so we keep raising them prices! #profit",
//     id: 33646,
//     images: [
//       {
//         alt: "a simple water bottle",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/larq-bottle_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/larq-bottle_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/larq-bottle_S.jpg",
//         },
//       },
//     ],
//     name: "LARQ Bottle",
//     price: 465,
//     rating: 3.5,
//     stock: 190,
//   },
//   {
//     description:
//       "Want to take your photography to the next level? Why not try out a real film camera? Buy this unique piece of glass and steal and get creative.",
//     id: 33703,
//     images: [
//       {
//         alt: "film camera",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/rolleiflex-camera_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/rolleiflex-camera_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/rolleiflex-camera_S.jpg",
//         },
//       },
//     ],
//     name: "Rolleiflex Camera",
//     price: 1249,
//     rating: 4.7,
//     stock: 1,
//   },
//   {
//     description:
//       "Do we really have to explain this one? Somethings are just better with mustard!",
//     id: 34592,
//     images: [
//       {
//         alt: "a tube of mustard",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/heinz-yellow-mustard_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/heinz-yellow-mustard_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/heinz-yellow-mustard_S.jpg",
//         },
//       },
//     ],
//     name: "Heinz Yellow Mustard",
//     price: 23,
//     rating: 4.8,
//     stock: 20,
//   },
//   {
//     description: "Bought a camera but forgot the lens? We've got you covered!",
//     id: 34696,
//     images: [
//       {
//         alt: "a camera lens",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-lens_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-lens_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-lens_S.jpg",
//         },
//       },
//     ],
//     name: "Nikon Camera Lens",
//     price: 19857,
//     rating: 4.9,
//     stock: 1,
//   },
//   {
//     description:
//       "Theese plants are all the rave right now! Use your FOMO (Fear of Missing Out) and buy one today!",
//     id: 36849,
//     images: [
//       {
//         alt: "a plant in a pot",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/succulent-green_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/succulent-green_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/succulent-green_S.jpg",
//         },
//       },
//     ],
//     name: "Succulent Green",
//     price: 69,
//     stock: 14,
//   },
//   {
//     description: "Just a real pale stool, nothing fancy about it.",
//     id: 38424,
//     images: [
//       {
//         alt: "a stool",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/pale-stool_L.jpg",
//           medium: "https://was-reach-hackathon-img.vercel.app/pale-stool_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/pale-stool_S.jpg",
//         },
//       },
//     ],
//     name: "Pale Stool",
//     price: 795,
//     stock: 0,
//   },
//   {
//     description:
//       "Want to become a New York Times best selling author? Look no further! Do it right from the beginning by purchasing a real typewriter, just like the pros!",
//     id: 43638,
//     images: [
//       {
//         alt: "a typewriter",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/typewriter_L.jpg",
//           medium: "https://was-reach-hackathon-img.vercel.app/typewriter_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/typewriter_S.jpg",
//         },
//       },
//     ],
//     name: "Typewriter",
//     price: 1495,
//     rating: 3.5,
//     stock: 2,
//   },
//   {
//     description: "Stay alive! Buy this!",
//     id: 45927,
//     images: [
//       {
//         alt: "a healthy drink",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/vitality-shot_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/vitality-shot_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/vitality-shot_S.jpg",
//         },
//       },
//     ],
//     name: "Vitality Shot",
//     price: 47,
//     rating: 3.4,
//     stock: 245,
//   },
//   {
//     description:
//       "Whaaaat! Look at it! Isn't it cute? I think so, and so should you! Buy it!",
//     id: 50191,
//     images: [
//       {
//         alt: "a cactus in a pot",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/cute-cactus_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/cute-cactus_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/cute-cactus_S.jpg",
//         },
//       },
//     ],
//     name: "Cute Cactus",
//     price: 63,
//     rating: 4.4,
//     stock: 17,
//   },
//   {
//     description: "Need to take some grat photos? Get a real camera!",
//     id: 55067,
//     images: [
//       {
//         alt: "DSLR camera",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-with-lens_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-with-lens_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/nikon-camera-with-lens_S.jpg",
//         },
//       },
//     ],
//     name: "Nikon Camera With Lens",
//     price: 26784,
//     rating: 3.4,
//     stock: 1,
//   },
//   {
//     description:
//       "What is on this mixtape made by a music legend? There is only one way to tell (Yeah, that's right, the answer is to buy it and listen to it to find out!).",
//     id: 55955,
//     images: [
//       {
//         alt: "a cassette",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/rare-mystery-mixtape_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/rare-mystery-mixtape_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/rare-mystery-mixtape_S.jpg",
//         },
//       },
//     ],
//     name: "Rare Mystery Mixtape",
//     price: 3145,
//     rating: 4.6,
//     stock: 1,
//   },
//   {
//     description:
//       "Short on dough? Wanted to buy a DSLR camera but don't have the funds? This is the next best thing!",
//     id: 61197,
//     images: [
//       {
//         alt: "comapact camera",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/autostar-camera_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/autostar-camera_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/autostar-camera_S.jpg",
//         },
//       },
//     ],
//     name: "Autostar Camera",
//     price: 420,
//     rating: 2.1,
//     stock: 1,
//   },
//   {
//     description:
//       "Take a look at youself! No, seriously! Do it with this magic mirror!",
//     id: 64866,
//     images: [
//       {
//         alt: "mirror",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/mirror-mirror-on-the-blue-backdrop_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/mirror-mirror-on-the-blue-backdrop_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/mirror-mirror-on-the-blue-backdrop_S.jpg",
//         },
//       },
//     ],
//     name: "Mirror Mirror on The Blue Backdrop",
//     price: 276,
//     rating: 5,
//     stock: 59,
//   },
//   {
//     description:
//       "With my sunglasses on, I'm Jack Nicholson. Without them, I'm fat and 60. Want to be cool? Buy theese glasses!",
//     id: 72067,
//     images: [
//       {
//         alt: "sunglasses",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/cool-sunglasses_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/cool-sunglasses_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/cool-sunglasses_S.jpg",
//         },
//       },
//     ],
//     name: "Cool Sunglasses",
//     price: 2659,
//     rating: 4.3,
//     stock: 342,
//   },
//   {
//     description:
//       "Get the oil that everyone is going Loco over... Go Coco-Loco with this coconut oil.",
//     id: 78960,
//     images: [
//       {
//         alt: "coconut oil",
//         src: {
//           large: "https://was-reach-hackathon-img.vercel.app/coconut-oil_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/coconut-oil_M.jpg",
//           small: "https://was-reach-hackathon-img.vercel.app/coconut-oil_S.jpg",
//         },
//       },
//     ],
//     name: "Coconut Oil",
//     price: 159,
//     rating: 3,
//     stock: 42,
//   },
//   {
//     description: "We couldn't find the right one, so... here you go!",
//     id: 82614,
//     images: [
//       {
//         alt: "a sneaker",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/a-left-sneaker_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/a-left-sneaker_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/a-left-sneaker_S.jpg",
//         },
//       },
//     ],
//     name: "A Left Sneaker",
//     price: 143,
//     stock: 1,
//   },
//   {
//     description: "Why not?",
//     id: 83687,
//     images: [
//       {
//         alt: "a banana",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/yellow-banana_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/yellow-banana_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/yellow-banana_S.jpg",
//         },
//       },
//     ],
//     name: "Yellow Banana",
//     price: 7,
//     rating: 4.6,
//     stock: 15,
//   },
//   {
//     description: "Light up someones day with this blue lighter!",
//     id: 84108,
//     images: [
//       {
//         alt: "a lighter",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/blue-lighter_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/blue-lighter_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/blue-lighter_S.jpg",
//         },
//       },
//     ],
//     name: "Blue Lighter",
//     price: 23,
//     rating: 3.2,
//     stock: 2,
//   },
//   {
//     description:
//       "Will it shine? That is the question... Is this the solution to dark-matter? Who knows...",
//     id: 93102,
//     images: [
//       {
//         alt: "a black lightbulb",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/black-lightbulb_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/black-lightbulb_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/black-lightbulb_S.jpg",
//         },
//       },
//     ],
//     name: "Black Lightbulb",
//     price: 369,
//     rating: 2.1,
//     stock: 0,
//   },
//   {
//     description:
//       "Hey, we've all been there, you are tired but need to deploy a site now! This cup of joe will solve all you problems!",
//     id: 99157,
//     images: [
//       {
//         alt: "a cup of coffee",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.vercel.app/a-cup-of-joe_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.vercel.app/a-cup-of-joe_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.vercel.app/a-cup-of-joe_S.jpg",
//         },
//       },
//     ],
//     name: "A Cup of Joe",
//     price: 54,
//     rating: 4.9,
//     stock: 0,
//   },
// ];

// 1. Rendera ut innehållet från API:t i en HTML-fil
// 2. Varje produkt ska renderas med name, description, image, price, rating och stock
// 3. Det är upptill er att designa sidan så som ni vill
// 4. Image måste ha alt-attributet satt
// 5. När man klickar på en bild så ska totalen uppdateras.
// 6. När man klickar på en bild så ska varan läggas till i ens varukorg.Rendera ut namnet på produkten samt priset i varukorgen.
// 7. Ändra funktionalitet så att man lägger till varan i varukorgen genom att klicka på en "Köp" knapp istället för att klicka på bilden.
// 8. Lägg till ett input-fält och en knapp högst uppe på sidan. I denna ska användaren kunna mata in en siffra.
//    När användaren trycker på knappen ska sidan filtrera produkterna så att endast produkter med rating större än eller lika med siffran syns

const dataContainer = document.getElementById("dataContainer");
const totalElement = document.getElementById("totalElement");

let storeData = [];
let totalValue = 0;

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    storeData = data;
    renderDataList(storeData);
    console.log(data);
  });

function renderDataList(data) {
  renderDataItem(data);
}

function renderDataItem(data) {
  for (const [, obj] of Object.entries(data)) {
    const wrapper = createWrapperElement(obj);
    dataContainer.appendChild(wrapper);
  }
}

function createNameElement(obj) {
  const name = document.createElement("h2");
  name.innerText = obj.name;

  return name;
}

function createImageElement(obj) {
  const image = document.createElement("img");

  image.src = obj.images[0].src.small;
  image.alt = obj.images[0].alt;
  image.classList.add("storeImage");

  image.addEventListener("click", () => {
    updateTotalElement(image);
  });

  return image;
}

function updateTotalElement(image) {
  const element = storeData.find((ele) => {
    if (ele.images[0].alt === image.alt) return ele;
  });

  console.log(element);

  totalValue += +element?.price;
  totalElement.innerText = `Total: ${totalValue}`;
}

function createDescriptionElement(obj) {
  const description = document.createElement("p");
  description.innerHTML = obj.description;

  return description;
}

function createPriceElement(obj) {
  const price = document.createElement("p");
  price.innerText = `Price: ${obj.price}`;

  return price;
}

function createRatingElement(obj) {
  const rating = document.createElement("p");
  rating.innerText = `Rating: ${obj.rating}`;

  return rating;
}

function createStockElement(obj) {
  const stock = document.createElement("p");
  stock.innerText = `Stock: ${obj.stock}`;

  return stock;
}

function createWrapperElement(obj) {
  const wrapper = document.createElement("div");

  wrapper.appendChild(createNameElement(obj));
  wrapper.appendChild(createImageElement(obj));
  wrapper.appendChild(createDescriptionElement(obj));
  wrapper.appendChild(createPriceElement(obj));
  wrapper.appendChild(createRatingElement(obj));
  wrapper.appendChild(createStockElement(obj));

  return wrapper;
}

renderDataList(storeData);
