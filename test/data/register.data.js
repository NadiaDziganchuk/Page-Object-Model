const email = Math.random().toFixed(6) + '@gmail.com';

const text = {
  header: 'User Register',
  paragraph: 'Profiles with fictitious or dummy data will be deleted.'
}

const user = {
  firstName: 'Test',
  lastName: 'Test',
  phone: '17775551122',
  email,
  password: 'abc123'
}

export {text, user};
