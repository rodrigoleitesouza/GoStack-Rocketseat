import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import User from '../../src/app/models/User';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be encrypt user password when new user is created', async () => {
    const user = await User.create({
      name: "Rodrigo Souza",
      email: "rodrigosouza@gmail.com",
      password: "rodrigosouza"
    });

    const compareHash = await bcrypt.compare('rodrigosouza', user.password_hash);

    expect(compareHash).toBe(true);
  })

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password: "rodrigosouza"
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with a duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password: "rodrigosouza"
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password: "rodrigosouza"
      });

    expect(response.status).toBe(400);
  });
});
