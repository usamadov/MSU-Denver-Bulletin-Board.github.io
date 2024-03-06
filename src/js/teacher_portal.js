// teacher_portal.js
const fileUploadForm = document.getElementById('fileUploadForm');
const messageForm = document.getElementById('messageForm');

fileUploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`uploads/${currentUser.uid}/${file.name}`);

    fileRef.put(file).then((snapshot) => {
        console.log('File uploaded successfully');
    });
});

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    console.log('Message sent:', message);
});

function logout() {
    firebase.auth().signOut().then(() => {
        console.log('Successfully logged out');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Logout failed', error.message);
    });
}
