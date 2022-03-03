async function updatePostFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
        
    if (response.ok) {
        document.location.replace(`/updatepost/${id}/`);
    } else {
        alert(response.statusText);
    }
    
};  

async function deletePostFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
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
    .querySelector('#updatebtn')
    .addEventListener('click', updatePostFormHandler);    

document
    .querySelector('#deletebtn')
    .addEventListener('click', deletePostFormHandler);  
  