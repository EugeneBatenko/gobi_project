if (document.querySelector('#add_client')) {
  document.querySelector('#add_client').addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(e.target)
    const obj = {}
    for (const [key, value] of data) {
      obj[key] = value
    }

    fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log(obj)
  })
}

if (document.querySelector('#update_client')) {
  document.querySelector('#update_client').addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(e.target)
    const obj = {}
    for (const [key, value] of data) {
      obj[key] = value
    }

    fetch(`/api/clients/${obj.id}`,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        method: 'PUT',
        body: JSON.stringify(obj)
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
}

function deleteItem(e) {

  const dataId = e.getAttribute('data-id')

  fetch(`/api/clients/${dataId}`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      method: 'DELETE'
    })
    .then(res => {
      location.reload()
      console.log(res)
    })
    .catch(err => console.log(err))
}