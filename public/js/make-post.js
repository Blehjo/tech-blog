const newPostFormHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('.title').value.trim();
    const post_content = document.querySelector('.textarea').value.trim();


    if (post_title && post_content) {
        const response = await fetch(`/api/dashboard`, {
            method: 'POST',
            body: JSON.stringify({ post_title, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post!');
        }
    }

};

document
    .querySelector('#post-form')
    .addEventListener('submit', newPostFormHandler);