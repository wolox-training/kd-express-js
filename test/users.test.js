const request = require('supertest');
const app = require('../app');

describe('User Creation', () => {
  it('should create an user successfuly', async () => {
    const user = {
      id: 99,
      firstName: 'User1',
      lastName: 'LastnameUser1',
      email: 'user99@wolox.com.ar',
      password: 'contrasena22'
    };
    const res = await request(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(201);
    expect(res.body.email).toEqual(user.email);
  });
});
