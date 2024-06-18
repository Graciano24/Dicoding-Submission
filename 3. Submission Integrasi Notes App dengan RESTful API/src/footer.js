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

      // Buat elemen p dan a secara dinamis
      const pElement = document.createElement('p');
      pElement.textContent = "© 2024, Catatlah Apa Yang Menurutmu Penting, ";

      const lineBreak = document.createElement('br');

      const aElement = document.createElement('a');
      aElement.textContent = "Agar Kelak Akan Tetap Ada Kenangan Yang Dapat Kauingat Dari Catatamu";

      // Tambahkan elemen a ke dalam elemen p
      pElement.appendChild(lineBreak);
      pElement.appendChild(aElement);

      // Dapatkan slot dengan nama 'content'
      const contentSlot = shadow.querySelector('slot[name="content"]');

      // Tambahkan elemen p ke dalam slot 'content'
      contentSlot.appendChild(pElement);
    }
  }
  
  // Daftarkan custom element
  customElements.define('custom-footer', CustomFooter);
