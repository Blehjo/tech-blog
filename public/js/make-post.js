var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
post_date = mm + '/' + dd + '/' + yyyy;

const newPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('sending form');

    const post_title = document.querySelector('.title').value.trim();
    const post_content = document.querySelector('.textarea').value.trim();

    if (post_title && post_content) {
        const response = await fetch(`/api/dashboard`, {
            method: 'POST',
            body: JSON.stringify({ post_title, post_content, post_date }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post!');
        }
    }

}

document
    .querySelector('#post-form')
    .addEventListener('onSubmit', newPostFormHandler);