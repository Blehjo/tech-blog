async function updatePostFormHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
    
    const user_id = window.location.toString().split('/')[4]

    const response = await fetch(`/api/posts/${user_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            user_id, post_title, post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
        
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    
};  

document
    .querySelector('#done')
    .addEventListener('click', updatePostFormHandler);