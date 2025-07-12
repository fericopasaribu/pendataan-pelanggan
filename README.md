# Customer Data Collection App

A web application for managing customer data built using NextJS.

## Tech Stack

- **Programming Language**:
  NextJS (v15.3.4)  
- **UI Libraries**:
  -  Tailwind CSS (v4.1)
  -  Shadcn (v2.9.0)  
- **ORM**: Prisma (v6.10.1) 
- **Database**: PostgreSQL (v16.9)

---

## Setup Instructions

### 1. Open Terminal / Console

Start by opening your terminal or command prompt.

### 2. Clone the Repository

   ```bash
   git clone https://github.com/fericopasaribu/pendataan-pelanggan.git
   cd pendataan-pelanggan
   ```
### 3. Project Setup

- Open your terminal and navigate to the folder where the cloned project is located.
  
- Run the following command to install dependencies
    ```bash
    npm i
    ```
    
- Open the ``` .env ``` and update the ``` DATABASE_URL ``` configuration to match your PostgreSQL username, password, and database name.
    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/db_barang?schema=public"
    ```
    
- Run the following command to apply the database migrations
    ```bash
    npx prisma migrate dev
    ```
    
- Run the following command in the terminal
    ```bash
    npm run dev
    ```
