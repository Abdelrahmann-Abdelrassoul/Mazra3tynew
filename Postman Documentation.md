Here's your API documentation in markdown format:

```markdown
# API Documentation

This is the Postman documentation for **User Cart**, **Orders**, **Products**, and **Authentication** APIs.

## Schema
[Postman API Schema](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

## 1. Authentication

### Register User
- **Method**: POST
- **URL**: `{{baseUrl}}/register`
- **Body**:
  ```json
  {
    "name": "Test User",
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

### Login User
- **Method**: POST
- **URL**: `{{baseUrl}}/login`
- **Body**:
  ```json
  {
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

### Admin Login
- **Method**: POST
- **URL**: `{{baseUrl}}/admin-login`
- **Body**:
  ```json
  {
    "email": "admin@example.com",
    "password": "adminpassword"
  }
  ```

## 2. User Cart

### Add to Cart
- **Method**: POST
- **URL**: `{{baseUrl}}/add-to-cart`
- **Headers**:
  - Authorization: `Bearer {{userToken}}`
- **Body**:
  ```json
  {
    "userId": "USER_ID",
    "itemId": "ITEM_ID"
  }
  ```

### Update Cart
- **Method**: PUT
- **URL**: `{{baseUrl}}/update-cart`
- **Headers**:
  - Authorization: `Bearer {{userToken}}`
- **Body**:
  ```json
  {
    "userId": "USER_ID",
    "itemId": "ITEM_ID",
    "quantity": 2
  }
  ```

### Get User Cart
- **Method**: GET
- **URL**: `{{baseUrl}}/get-cart?userId=USER_ID`
- **Headers**:
  - Authorization: `Bearer {{userToken}}`

## 3. Orders

### Place Order
- **Method**: POST
- **URL**: `{{baseUrl}}/place-order`
- **Headers**:
  - Authorization: `Bearer {{userToken}}`
- **Body**:
  ```json
  {
    "userId": "USER_ID",
    "items": [{"itemId": "ITEM_ID", "quantity": 1}],
    "amount": 100,
    "address": "123 Test St"
  }
  ```

### All Orders (Admin)
- **Method**: GET
- **URL**: `{{baseUrl}}/all-orders`
- **Headers**:
  - Authorization: `Bearer {{adminToken}}`

### Update Order Status
- **Method**: PUT
- **URL**: `{{baseUrl}}/update-status`
- **Headers**:
  - Authorization: `Bearer {{adminToken}}`
- **Body**:
  ```json
  {
    "orderId": "ORDER_ID",
    "status": "Delivered"
  }
  ```