import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="nav-a">Restaurant</div>
      <div id="menu-icon" class="menu-icon">
        <i class="ph ph-list"></i>
      </div>
      <ul id="menu-list" class="nav-ul hidden">
        <li><a href="/">Home</a></li>
        <li><a href="#">Favorite</a></li>
        <li><a href="https://www.tiktok.com/@user3187184888903?_t=8m0h4kq7iMx&_r=1">About Us</a></li>
      </ul>
    `;
  }
}

customElements.define('app-bar', AppBar);

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("visible"); 
});

menuIcon.setAttribute("role", "button");
menuIcon.setAttribute("aria-label", "Toggle Menu");

menuIcon.setAttribute("tabindex", "0");

menuIcon.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    menuList.classList.toggle("visible");
  }
});


var data = {
    "restaurants": [
        {
            "id": "6c7bqjgi84kcowlqdz",
            "name": "Bring Your Phone Cafe",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/41",
            "city": "Medan",
            "rating": 4.6
        },
        {
            "id": "ljx8i0qu2uckcowlqdz",
            "name": "Run The Gun",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/07",
            "city": "Bali",
            "rating": 4.6
        },
        {
            "id": "fe8bbxoazddkcowlqdz",
            "name": "Pangsit Express",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/29",
            "city": "Ternate",
            "rating": 4.8
          },
          {
            "id": "ik1zljmlf68kcowlqdz",
            "name": "Ducky Duck",
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/38",
            "city": "Malang",
            "rating": 4.7
          },
          {
            "id": "9jpuzkm6n6jkcowlqdz",
            "name": "Kafein",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/40",
            "city": "Bali",
            "rating": 3.8
          },
          {
            "id": "cpl5jpsnuqkkcowlqdz",
            "name": "Makan mudah",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/08",
            "city": "Malang",
            "rating": 4.6
          },
          {
            "id": "iqtf9hmdzvbkcowlqdz",
            "name": "Saya Suka",
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/32",
            "city": "Surabaya",
            "rating": 3.6
          },
          {
            "id": "8i06gqcc2dpkcowlqdz",
            "name": "Gigitan Cepat",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/45",
            "city": "Aceh",
            "rating": 4
          },
          {
            "id": "wf5o19xhxxkcowlqdz",
            "name": "Fairy Cafe",
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
            "pictureId": "https://restaurant-api.dicoding.dev/images/medium/04",
            "city": "Malang",
            "rating": 3.9
          }
    ]
};

// Mendapatkan elemen div untuk daftar restoran
var restaurantListDiv = document.getElementById("restaurant-list");
// Menambahkan atribut role="list" pada elemen div untuk daftar restoran
restaurantListDiv.setAttribute("role", "list");
// Menampilkan setiap restoran dalam data JSON
data.restaurants.forEach(function(restaurant) {
    
    var restaurantDiv = document.createElement("div");
    restaurantDiv.classList.add("restaurant");
    restaurantDiv.setAttribute("tabindex", "0");
    restaurantDiv.setAttribute("role", "listitem");

    var img = document.createElement("img");
    img.src = restaurant.pictureId;
    img.alt = restaurant.name;
    restaurantDiv.appendChild(img);

    var h2 = document.createElement("h2");
    h2.textContent = restaurant.name;
    restaurantDiv.appendChild(h2);

    var pCity = document.createElement("p");
    pCity.textContent = "City: " + restaurant.city;
    pCity.setAttribute("aria-label", "City: " + restaurant.city); 
    restaurantDiv.appendChild(pCity);

    var pRating = document.createElement("p");
    pRating.textContent = "Rating: " + restaurant.rating;
    pRating.setAttribute("aria-label", "Rating: " + restaurant.rating); 
    restaurantDiv.appendChild(pRating);

    
    var pDescription = document.createElement("p");
    pDescription.textContent = restaurant.description;
    pDescription.classList.add("restaurant-description"); 
    pDescription.setAttribute("aria-label", "Description: " + restaurant.description); 
    restaurantDiv.appendChild(pDescription);


    
    restaurantListDiv.appendChild(restaurantDiv);
});


// Definisikan custom element untuk footer catatan
class CustomFooter extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const wrapper = document.createElement('footer');
      wrapper.classList.add('custom-footer');
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="footer-content">
          <slot name="content"></slot>
        </div>
      `;
      const style = document.createElement('style');
      style.textContent = `
        /* Gaya untuk komponen footer catatan di dalam Shadow DOM */
        .custom-footer {
          background-color: #02e1ff;
          padding: 10px 20px;
          border-top: 2px solid #ccc;
          text-align: center;
        }

        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-content p {
          margin: #333;
          font-size: 14px;
          color: #666;
          font-style: bold;
        }

        .footer-content a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
          margin-left: 5px;
        }

        .footer-content a:hover {
          text-decoration: underline;
        }
      `;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(template.content.cloneNode(true));

      
      const pElement = document.createElement('p');
      pElement.textContent = "© 2024, List Your Restaurant ";

      
      const contentSlot = shadow.querySelector('slot[name="content"]');

      
      contentSlot.appendChild(pElement);
    }
  }
  
  
  customElements.define('custom-footer', CustomFooter);
