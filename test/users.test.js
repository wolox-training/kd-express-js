const request = require('supertest');
const app = require('../app');
const { mockUser, mockUserInexistent } = require('./mocks/users');

describe('User Creation', () => {
  it('should create an user successfuly', async done => {
    const user = mockUser;
    const res = await request(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(201);
    expect(res.body.firstName).toEqual(user.firstName);
    expect(res.body.email).toEqual(user.email);
    done();
  });
  it('should throw an error for existing user', async done => {
    const user = mockUser;
    await request(app)
      .post('/users')
      .send(user);
    user.id = 9;
    const res = await request(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(422);
    expect(res.body.internal_code).toEqual('mail_exist_error');
    done();
  });

  it('should throw an error for invalid password', async done => {
    const user = mockUser;
    user.password = '00';
    const res = await request(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(422);
    done();
  });

  it('should throw an error for empty user data', async done => {
    const user = {};
    const res = await request(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(422);
    done();
  });
});

describe('User login', () => {
  it('should return login token', async done => {
    const user = mockUser;
    user.password = 'contrasena22';
    await request(app)
      .post('/users')
      .send(user);
    const res = await request(app)
      .post('/users/sessions')
      .send(user);
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('token');
    done();
  });
  it('should return non-existing mail', async done => {
    const user = mockUserInexistent;
    const res = await request(app)
      .post('/users/sessions')
      .send(user);
    expect(res.status).toEqual(401);
    done();
  });
  it('should return invalid password error', async done => {
    const user = mockUser;
    user.password = 'contrasena22';
    await request(app)
      .post('/users')
      .send(user);
    user.password = '0';
    const res = await request(app)
      .post('/users/sessions')
      .send(user);
    expect(res.status).toEqual(401);
    done();
  });
});
