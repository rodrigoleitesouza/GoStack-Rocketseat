import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password_hash: "rodrigosouza"
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with a duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password_hash: "rodrigosouza"
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: "Rodrigo Souza",
        email: "rodrigosouza@gmail.com",
        password_hash: "rodrigosouza"
      });

      expect(response.status).toBe(400);
  });
});
