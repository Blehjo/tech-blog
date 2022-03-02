const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('input[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
console.log(comment)

    if (comment) {
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_date, post_id }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (comment) {
        console.log('thanks')
        } else {
        alert('Could not post comment.');
        }
    }
};

  document.querySelector('.comment-form')
    .addEventListener('onSubmit', commentFormHandler);