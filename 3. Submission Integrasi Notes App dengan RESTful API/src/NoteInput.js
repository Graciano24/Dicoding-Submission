// Deklarasi custom element NoteInput
class NoteInput extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2>Add New Note</h2>
            <form id="add-note-form">
                <input type="text" id="note-title" placeholder="Title" required>
                <textarea id="note-body" placeholder="Body" required></textarea>
                <button type="submit">Save</button>
            </form>
        `;
    }
}
customElements.define('note-input', NoteInput);