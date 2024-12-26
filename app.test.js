import request from 'supertest';
import app from 'routes/Server../app'; // Replace with your server file

describe('API Testing', () => {
  let testUserToken = '';
  let testAdminToken = '';

  // Authentication APIs
  describe('Authentication', () => {
    it('should register a new user', async () => {
      const response = await request(app).post('/register').send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should log in a user', async () => {
      const response = await request(app).post('/login').send({
        email: 'testuser@example.com',
        password: 'password123',
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      testUserToken = response.body.token; // Save token for subsequent tests
    });

    it('should log in an admin', async () => {
      const response = await request(app).post('/admin-login').send({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      testAdminToken = response.body.token; // Save admin token
    });
  });

  // User Cart APIs
  describe('User Cart', () => {
    it('should add an item to the cart', async () => {
      const response = await request(app)
        .post('/add-to-cart')
        .set('Authorization', `Bearer ${testUserToken}`)
        .send({ userId: 'USER_ID_HERE', itemId: 'ITEM_ID_HERE' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should update cart item quantity', async () => {
      const response = await request(app)
        .put('/update-cart')
        .set('Authorization', `Bearer ${testUserToken}`)
        .send({ userId: 'USER_ID_HERE', itemId: 'ITEM_ID_HERE', quantity: 3 });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should get the user cart', async () => {
      const response = await request(app)
        .get('/get-cart')
        .set('Authorization', `Bearer ${testUserToken}`)
        .send({ userId: 'USER_ID_HERE' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  // Orders APIs
  describe('Orders', () => {
    it('should place an order', async () => {
      const response = await request(app)
        .post('/place-order')
        .set('Authorization', `Bearer ${testUserToken}`)
        .send({
          userId: 'USER_ID_HERE',
          items: [{ itemId: 'ITEM_ID_HERE', quantity: 2 }],
          amount: 200,
          address: '123 Test Street',
        });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should fetch all orders (admin)', async () => {
      const response = await request(app)
        .get('/all-orders')
        .set('Authorization', `Bearer ${testAdminToken}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should fetch user orders', async () => {
      const response = await request(app)
        .get('/user-orders')
        .set('Authorization', `Bearer ${testUserToken}`)
        .send({ userId: 'USER_ID_HERE' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should update order status', async () => {
      const response = await request(app)
        .put('/update-status')
        .set('Authorization', `Bearer ${testAdminToken}`)
        .send({ orderId: 'ORDER_ID_HERE', status: 'Delivered' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  // Product APIs
  describe('Products', () => {
    it('should add a product', async () => {
      const response = await request(app)
        .post('/add-product')
        .set('Authorization', `Bearer ${testAdminToken}`)
        .field('name', 'Test Product')
        .field('description', 'This is a test product')
        .field('price', 100)
        .field('category', 'Test Category')
        .attach('image1', 'path/to/test-image.jpg'); // Ensure image file exists
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should list all products', async () => {
      const response = await request(app).get('/list-products');
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should fetch a single product', async () => {
      const response = await request(app)
        .get('/single-product')
        .send({ productId: 'PRODUCT_ID_HERE' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should remove a product', async () => {
      const response = await request(app)
        .delete('/remove-product')
        .set('Authorization', `Bearer ${testAdminToken}`)
        .send({ id: 'PRODUCT_ID_HERE' });
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });
});
