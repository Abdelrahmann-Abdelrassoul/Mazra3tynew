```markdown
# API Documentation

## User Management Endpoints

### 1. User Login
- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "token": "<JWT_TOKEN>"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "User doesn't exist" | "Invalid credentials"
    }
    ```

---

### 2. User Registration
- **URL:** `/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Abdelrahman Abdelrassoul",
    "email": "abdo@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "token": "<JWT_TOKEN>"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "User already exists" | "Please enter a valid email" | "Password must be at least 8 characters long"
    }
    ```

---

### 3. Farmer Login
- **URL:** `/farmer/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "farmer@example.com",
    "password": "farmerpassword"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "token": "<JWT_TOKEN>"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "Invalid credentials"
    }
    ```

---

## Product Management Endpoints

### 4. Add Product
- **URL:** `/products`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "category": "Category",
    "subCategory": "Subcategory",
    "bestseller": true,
    "image1": "<file_path>",
    "image2": "<file_path>",
    "image3": "<file_path>",
    "image4": "<file_path>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Product Added"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 5. List Products
- **URL:** `/products`
- **Method:** `GET`
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "products": [
        { "id": "1", "name": "Product 1", ... },
        { "id": "2", "name": "Product 2", ... }
      ]
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 6. Remove Product
- **URL:** `/products`
- **Method:** `DELETE`
- **Request Body:**
  ```json
  {
    "id": "<PRODUCT_ID>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Product Removed"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 7. Single Product Info
- **URL:** `/products/single`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "productId": "<PRODUCT_ID>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "product": { "id": "1", "name": "Product 1", ... }
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

## Order Management Endpoints

### 8. Place Order
- **URL:** `/orders`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userId": "<USER_ID>",
    "items": [ { "id": "1", "quantity": 2 }, ... ],
    "amount": 200,
    "address": "123 Street, City, Country"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Order Placed"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 9. All Orders (Admin)
- **URL:** `/orders/all`
- **Method:** `GET`
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "orders": [ { "id": "1", ... }, { "id": "2", ... } ]
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 10. User Orders
- **URL:** `/orders/user`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userId": "<USER_ID>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "orders": [ { "id": "1", ... }, { "id": "2", ... } ]
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 11. Update Order Status (Admin)
- **URL:** `/orders/status`
- **Method:** `PATCH`
- **Request Body:**
  ```json
  {
    "orderId": "<ORDER_ID>",
    "status": "Delivered"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Status Updated"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

## Cart Management Endpoints

### 12. Add to Cart
- **URL:** `/cart`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userId": "<USER_ID>",
    "itemId": "<ITEM_ID>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Added To Cart"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 13. Update Cart
- **URL:** `/cart/update`
- **Method:** `PATCH`
- **Request Body:**
  ```json
  {
    "userId": "<USER_ID>",
    "itemId": "<ITEM_ID>",
    "quantity": 3
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "message": "Cart Updated"
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```

---

### 14. Get User Cart
- **URL:** `/cart`
- **Method:** `GET`
- **Request Body:**
  ```json
  {
    "userId": "<USER_ID>"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "success": true,
      "cartData": { "item1": 2, "item2": 1 }
    }
    ```
  - **Failure:**
    ```json
    {
      "success": false,
      "message": "<Error Message>"
    }
    ```