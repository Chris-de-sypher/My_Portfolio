/** @format */

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};


const btn1 = document.querySelector("#All-projects");
const btn2 = document.querySelector("#Arts");
const btn3 = document.querySelector("#Graphics");
const search = document.querySelector("#mysearch");
const glass = document.querySelector(".glass");
const card = document.querySelector(".cards-grid");

glass.onclick = () => {
  search.classList.add("input-eject");
}

btn1.addEventListener("click", (e) => {
    try {
        e.preventDefault();
    const targets = e.target.getAttribute("data-value");
    const targets1 = e.target.getAttribute("data-value1");
      const searchstring = Portfolio.filter((item) => {
         return (item.categories.includes(targets) || item.categories.includes(targets1)) 
      })
        cardList(searchstring)
  } catch (e) {
    throw new Error(console.log(e));
  }
});
btn2.addEventListener("click", (e) => {
    try {
      e.preventDefault();
    const targets = e.target.getAttribute("data-values");
      const searchstring = Portfolio.filter((item) => {
          return (item.categories.includes(targets))
      })
        cardList(searchstring)
  } catch (e) {
    throw new Error(console.log(e));
  }
});
btn3.addEventListener("click", (e) => {
    try {
        e.preventDefault();
    const targets = e.target.getAttribute("data-val");
      const searchstring = Portfolio.filter((item) => {
          return (item.categories.includes(targets))
      })
        cardList(searchstring)
  } catch (e) {
    throw new Error(console.log(e));
  }
});


const Portfolio = [
  {
    "image": "label.jpeg",
    "url": "label.jpeg",
    "title": "Tears",
    "categories": "Arts",
  },
  {
    "image":
      "Who you should date from The Umbrella Academy _ Five Hargreeves.jpeg",
    "url": "Who you should date from The Umbrella Academy _ Five Hargreeves.jpeg",
    "title": "Man on suit",
    "categories": "Arts",
  },
  {
    "image": "725da123-9d0d-4ec4-a509-f10c0ee92f9c.jpeg",
    "url": "725da123-9d0d-4ec4-a509-f10c0ee92f9c.jpeg",
    "title": "Minium",
    "categories": "Arts",
  },
  {
    "image": "pencil.png",
    "url": "pencil.png",
    "title": "Baby sketch",
    "categories": "Arts",
  },
  {
    'image': "Caption this – 12 February 2020.jpeg",
    "url": "Caption this – 12 February 2020.jpeg",
    "title": "Simple Design",
    "categories": "Arts",
  },
  {
    "image": "baby.jpeg",
    "url": "baby.jpeg",
    "title": "Old woman",
    "categories": "Arts",
  },
  {
    "image": "089284ab-a613-40fd-880c-68ec5e026dce.jpeg",
    "url": "089284ab-a613-40fd-880c-68ec5e026dce.jpeg",
    "title": "BasketBall",
    "categories": "Graphics",
  },
  {
    "image":
      "A Chic Logo Design for The School of Styling - Saffron Avenue.jpeg",
    "url": "A Chic Logo Design for The School of Styling - Saffron Avenue.jpeg",
    "title": "Follower",
    "categories": "Graphics",
  },
  {
    "image": "Effet Slice Head avec Photoshop - Tuto Photoshop.jpeg",
    "url": "Effet Slice Head avec Photoshop - Tuto Photoshop.jpeg",
    "title": "Slice",
    "categories": "Graphics",
  },
  {
    "image": "From Poland, the Soul of Graphic Design.jpeg",
    "url": "From Poland, the Soul of Graphic Design.jpeg",
    "title": "Skull",
    "categories": "Graphics",
  },
  {
    "image": "People Poster Design Series - Zeka Design.jpeg",
    "url": "People Poster Design Series - Zeka Design.jpeg",
    "title": "Flash",
    "categories": "Graphics",
  },
  {
    "image": "Poster Design Everyday.jpeg",
    "url": "Poster Design Everyday.jpeg",
    "title": "Hands",
    "categories": "Graphics",
  },
];


const cardList = (listItems) => {
  const newListItems = listItems
    .map((item) => {
      return `<div class="cards" data-id="goo">
              <img src="${item.image}" alt="${item.title}">
                <div class="t-p">
              <h4>${item.title}</h4> <span id="categories">${item.categories}</span>
                </div>
              <div class="buttons-for-port">
                <a href="${item.url}">View Image</a>
              </div>
            </div>`;
    })
    .join(" ");
  card.innerHTML = newListItems;
};

cardList(Portfolio);

let stores = [];



const $url = 'https://api.github.com/users/chris-de-sypher/repos';
;
const renderedRepo = document.querySelector(".grid-github");

search.addEventListener("keyup", run);
function run(e) {
  try {
    const searchstring = e.target.value.toLowerCase();
    let searches = stores.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchstring) ||
        character.description.toLowerCase().includes(searchstring)
      );
  });
    gitDataBase(searches);
  } catch (err) {
    alert(err);
  }
}

async function fethes() {
    const res = await fetch($url)
    stores = await res.json()
    gitDataBase(stores)
    console.log(stores);
}

const gitDataBase = async (gitrepo) => {
    const newRepo = await gitrepo.map((item) => {
        return `<div class="ecard-git">
            <h2>${item.name}</h2>
            <p>
              ${item.description}
            </p>
            <div class="date">
              <span>${item.created_at}</span>
              <span>${item.updated_at}</span>
            </div>
            <div class="lan">
                <span>${item.language}</span>
                <img src="${item.owner["avatar_url"]}">
            </div>
            <div class="button">
                <a href="${item.html_url}" target='_blank'>Source code</a>
            </div>
          </div>`;
    })
        .join(" ")
    renderedRepo.innerHTML = newRepo;
}


fethes()





