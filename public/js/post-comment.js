const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('.comment-input').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

    if (comment && post_id) {
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (comment) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Could not post comment.');
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);