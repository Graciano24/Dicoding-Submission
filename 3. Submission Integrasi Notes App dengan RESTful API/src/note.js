// Data statis catatan
const staticNotes = [
    {
        id: "notes-jT-jjsyz61J8XKiI",
        title: "Welcome to Notes, Dimas!",
        body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
        createdAt: "2022-07-28T10:03:12.594Z",
        archived: false,
    },
    {
        id: "notes-aB-cdefg12345",
    title: "Meeting Agenda",
    body: "Discuss project updates and assign tasks for the upcoming week.",
    createdAt: "2022-08-05T15:30:00.000Z",
    archived: false,
  },
  {
    id: "notes-XyZ-789012345",
    title: "Shopping List",
    body: "Milk, eggs, bread, fruits, and vegetables.",
    createdAt: "2022-08-10T08:45:23.120Z",
    archived: false,
  },
  {
    id: "notes-1a-2b3c4d5e6f",
    title: "Personal Goals",
    body: "Read two books per month, exercise three times a week, learn a new language.",
    createdAt: "2022-08-15T18:12:55.789Z",
    archived: false,
  },
  {
    id: "notes-LMN-456789",
    title: "Recipe: Spaghetti Bolognese",
    body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
    createdAt: "2022-08-20T12:30:40.200Z",
    archived: false,
  },
  {
    id: "notes-QwErTyUiOp",
    title: "Workout Routine",
    body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
    createdAt: "2022-08-25T09:15:17.890Z",
    archived: false,
  },
  {
    id: "notes-abcdef-987654",
    title: "Book Recommendations",
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: "2022-09-01T14:20:05.321Z",
    archived: false,
  },
  {
    id: "notes-zyxwv-54321",
    title: "Daily Reflections",
    body: "Write down three positive things that happened today and one thing to improve tomorrow.",
    createdAt: "2022-09-07T20:40:30.150Z",
    archived: false,
  },
  {
    id: "notes-poiuyt-987654",
    title: "Travel Bucket List",
    body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
    createdAt: "2022-09-15T11:55:44.678Z",
    archived: false,
  },
  {
    id: "notes-asdfgh-123456",
    title: "Coding Projects",
    body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
    createdAt: "2022-09-20T17:10:12.987Z",
    archived: false,
  },
  {
    id: "notes-5678-abcd-efgh",
    title: "Project Deadline",
    body: "Complete project tasks by the deadline on October 1st.",
    createdAt: "2022-09-28T14:00:00.000Z",
    archived: false,
  },
  {
    id: "notes-9876-wxyz-1234",
    title: "Health Checkup",
    body: "Schedule a routine health checkup with the doctor.",
    createdAt: "2022-10-05T09:30:45.600Z",
    archived: false,
  },
  {
    id: "notes-qwerty-8765-4321",
    title: "Financial Goals",
    body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
    createdAt: "2022-10-12T12:15:30.890Z",
    archived: false,
  },
  {
    id: "notes-98765-54321-12345",
    title: "Holiday Plans",
    body: "Research and plan for the upcoming holiday destination.",
    createdAt: "2022-10-20T16:45:00.000Z",
    archived: false,
  },
  {
    id: "notes-1234-abcd-5678",
    title: "Language Learning",
    body: "Practice Spanish vocabulary for 30 minutes every day.",
    createdAt: "2022-10-28T08:00:20.120Z",
    archived: false,
  },
];

// Fungsi untuk menampilkan catatan dari API
async function displayNotesFromAPI(data) {
    const notesGrid = document.querySelector('.notes-grid');
    notesGrid.innerHTML = '';

    data.forEach(note => {
        const noteBox = document.createElement('div');
        noteBox.classList.add('note-box');

        const titleElement = document.createElement('h2');
        titleElement.textContent = note.title;

        const bodyElement = document.createElement('p');
        bodyElement.textContent = note.body;

        const createdAtElement = document.createElement('p');
        createdAtElement.textContent = `Created At: ${note.createdAt}`;

        const archiveButton = document.createElement('button');
        archiveButton.textContent = note.archived ? 'Unarchive' : 'Archive';
        archiveButton.classList.add('archive-button');
        archiveButton.addEventListener('click', () => {
            const action = note.archived ? unarchiveNoteById : archiveNoteById;
            action(note.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.addEventListener('click', () => {
            deleteNoteAPI(note.id);
        });

        noteBox.appendChild(titleElement);
        noteBox.appendChild(bodyElement);
        noteBox.appendChild(createdAtElement);
        noteBox.appendChild(archiveButton);
        noteBox.appendChild(deleteButton);

        noteBox.dataset.noteId = note.id;

        // Tambahkan catatan ke dalam grid hanya jika tidak diarsipkan
        if (!note.archived) {
            notesGrid.appendChild(noteBox);
        }
    });
}

// Fungsi untuk menampilkan data statis
function displayStaticNotes() {
    const notesGrid = document.querySelector('.notes-grid');

    staticNotes.forEach(note => {
        const noteBox = document.createElement('div');
        noteBox.classList.add('note-box');

        const titleElement = document.createElement('h2');
        titleElement.textContent = note.title;

        const bodyElement = document.createElement('p');
        bodyElement.textContent = note.body;

        const createdAtElement = document.createElement('p');
        createdAtElement.textContent = `Created At: ${note.createdAt}`;

        const archiveButton = document.createElement('button');
        archiveButton.textContent = note.archived ? 'Unarchive' : 'Archive';
        archiveButton.classList.add('archive-button');
        archiveButton.addEventListener('click', () => {
            const action = note.archived ? unarchiveNoteById : archiveNoteById;
            action(note.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.addEventListener('click', () => {
            // Handling deletion for static notes can be added here
            console.log(`Deleting note with id: ${note.id}`);
        });

        noteBox.appendChild(titleElement);
        noteBox.appendChild(bodyElement);
        noteBox.appendChild(createdAtElement);
        noteBox.appendChild(archiveButton);
        noteBox.appendChild(deleteButton);

        noteBox.dataset.noteId = note.id;

        // Tambahkan catatan ke dalam grid hanya jika tidak diarsipkan
        if (!note.archived) {
            notesGrid.appendChild(noteBox);
        }
    });
}

// Panggil fungsi untuk menampilkan data statis saat DOM dimuat
window.addEventListener('DOMContentLoaded', async (event) => {
    const modal = document.querySelector('.modal');
    const modalBackground = document.querySelector('.modal-background');
    const addNoteButton = document.querySelector('.add-note-button');

    // Tampilkan catatan dari API saat halaman dimuat
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
        const data = await response.json();
        displayNotesFromAPI(data.data);

        // Panggil fungsi untuk menampilkan data statis setelah data dari API selesai dimuat
        displayStaticNotes();
    } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
    }

    // Tambahkan event listener untuk tombol tutup modal
    modalBackground.addEventListener('click', (e) => {
        if (e.target === modalBackground) {
            modal.style.display = 'none';
            modalBackground.style.display = 'none';
        }
    });

    // Tambahkan event listener untuk form tambah catatan
    const addNoteForm = document.getElementById('add-note-form');
    addNoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('note-title').value;
        const body = document.getElementById('note-body').value;

        // Tambahkan catatan baru ke API
        await addNoteToAPI(title, body);

        // Setelah menambahkan catatan, muat ulang catatan dari API
        try {
            const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
            const data = await response.json();
            displayNotesFromAPI(data.data);
        } catch (error) {
            console.error('Error:', error);
            // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
        }

        modal.style.display = 'none';
        modalBackground.style.display = 'none';

        addNoteForm.reset();
    });

    // Tambahkan event listener untuk tombol tambah catatan
    addNoteButton.addEventListener('click', () => {
        const loader = document.getElementById('loader');
        const noteInputForm = document.getElementById('add-note-form');

        loader.style.border = '8px solid #f3f3f3';
        loader.style.borderTop = '8px solid #3498db';
        loader.style.borderRadius = '50%';
        loader.style.width = '50px';
        loader.style.height = '50px';
        loader.style.animation = 'spin 2s linear infinite';
        loader.style.position = 'fixed';
        loader.style.top = '50%';
        loader.style.left = '50%';
        loader.style.transform = 'translate(-50%, -50%)';
        loader.style.zIndex = '9999';

        loader.style.display = 'block';
        noteInputForm.style.display = 'none';


        setTimeout(() => {
            modal.style.display = 'block'; // Tampilkan modal
            modalBackground.style.display = 'block';
            loader.style.display = 'none';
            noteInputForm.style.display = 'block';
        }, 2000);
    });


    // Fungsi untuk menyembunyikan indikator loading
    function hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }

    // Temukan elemen yang akan digunakan untuk berpindah halaman (elemen anchor dengan ID 'notepadLink')
    const notepadLink = document.getElementById('notepadLink');

    // Pada halaman baru, sembunyikan indikator loading setelah halaman selesai dimuat
    window.addEventListener('load', () => {
        hideLoader();
    });
});

// Fungsi untuk menambahkan catatan ke API
async function addNoteToAPI(title, body) {
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        });
        const data = await response.json();
        console.log(data);
        // Tampilkan pesan sukses atau manipulasi DOM sesuai kebutuhan
    } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
    }
}

// Fungsi untuk menghapus catatan dari API
async function deleteNoteFromAPI(noteId) {
    const loader = document.getElementById('loader'); // Ambil elemen indikator loading

    // Set gaya loading
    loader.style.border = '8px solid #f3f3f3';
    loader.style.borderTop = '8px solid #3498db';
    loader.style.borderRadius = '50%';
    loader.style.width = '50px';
    loader.style.height = '50px';
    loader.style.animation = 'spin 2s linear infinite';
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.zIndex = '9999';
    loader.style.display = 'block';

    try {
        const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        // Tampilkan pesan sukses atau manipulasi DOM sesuai kebutuhan
    } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
    }
    loader.style.display = 'none';
}

// Fungsi untuk menghapus catatan dari API
async function deleteNoteAPI(noteId) {
    if (confirm("Apakah Anda Yakin menghapus note anda?")) {
        // Hapus catatan dari API
        await deleteNoteFromAPI(noteId);

        // Setelah menghapus catatan, muat ulang catatan dari API
        try {
            const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
            const data = await response.json();
            displayNotesFromAPI(data.data);
        } catch (error) {
            console.error('Error:', error);
            // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
        }
    }
}

// Fungsi untuk mengarsipkan catatan berdasarkan ID
async function archiveNoteById(noteId) {
    try {
        const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}/archive`, {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
        // Tampilkan pesan sukses atau manipulasi DOM sesuai kebutuhan
    } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
    }
}

// Fungsi untuk membuka kembali catatan berdasarkan ID
async function unarchiveNoteById(noteId) {
    try {
        const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}/unarchive`, {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
        // Tampilkan pesan sukses atau manipulasi DOM sesuai kebutuhan
    } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan atau manipulasi DOM sesuai kebutuhan
    }
}

