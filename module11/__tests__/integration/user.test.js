import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
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
});
