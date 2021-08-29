if(document.querySelector('#sign_up_form')) {
  document.querySelector('#sign_up_form').addEventListener('submit', async e => {
    e.preventDefault()
    const fieldsMap = ['name', 'email', 'password']

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    // Errors
    function errorHandler(nameInput, nameError, data) {
      console.log(data.errors[nameInput]);
      if(data.errors) {
        nameInput.classList.add('is-invalid')
        nameError.textContent = data.errors[nameInput]
      } else {
        nameInput.classList.remove('is-invalid')
        nameInput.classList.add('is-valid')
        nameError.textContent = ''
      }
    }

    try {
      const result = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({name, email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await result.json()
      console.log(data)
      if(data.errors) {
        fieldsMap.forEach(item => {
          errorHandler(
            document.querySelector(`input[name=${item}]`),
            document.querySelector(`.invalid-feedback.${item}-error`) ,
            data)
        })
      }
      if(data.user) {
        location.assign('/')
      }
    } catch (err) {
      console.log(err)
    }
  })
}

if(document.querySelector('#sign_in_form')) {
  document.querySelector('#sign_in_form').addEventListener('submit', async e => {
    e.preventDefault()
    const fieldsMap = [ 'email', 'password']

    const email = e.target.email.value
    const password = e.target.password.value

    // Errors
    function errorHandler(nameInput, nameError, data, fieldName) {
      console.log(data.errors.password)
      if(data.errors[fieldName]) {
        nameInput.classList.add('is-invalid')
        nameError.textContent = data.errors[fieldName]
      } else {
        nameInput.classList.remove('is-invalid')
        nameInput.classList.add('is-valid')
        nameError.textContent = ''
      }
    }

    try {
      const result = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await result.json()
      console.log(data)
      if(data.errors) {
        fieldsMap.forEach(item => {
          errorHandler(
            document.querySelector(`input[name=${item}]`),
            document.querySelector(`.invalid-feedback.${item}-error`) ,
            data, item)
        })
      }
      if(data.user) {
        location.assign('/')
      }
    } catch (err) {
      console.log(err)
    }
  })
}
