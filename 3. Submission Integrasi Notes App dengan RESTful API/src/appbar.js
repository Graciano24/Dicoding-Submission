export default class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="navbar-brand">Notepad</div>
            <button class="add-note-button">&#43;</button>
        `;
        this.style.display = 'flex'; 
        this.style.alignItems = 'center'; 
        this.style.justifyContent = 'center'; 
        this.style.width = '100%'; 
   
        const addNoteButton = this.querySelector('.add-note-button');
        addNoteButton.style.marginLeft = 'auto'; 
   
        addNoteButton.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            const modalBackground = document.querySelector('.modal-background');
            modal.style.display = 'block';
            modalBackground.style.display = 'block';
        });
    }
  }
  customElements.define('app-bar', AppBar);