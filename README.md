Set Up
Clone the repository:
git clone https://github.com/KaliJS/Invoice-react-app
Create your environment file:
cp .env.example .env

Update these settings in the .env file:
DB_DATABASE (your local database, i.e. "react_db")
DB_USERNAME (your local db username, i.e. "root")
DB_PASSWORD (your local db password, i.e. "")

Install PHP dependencies:
composer install

Generate an app key:
php artisan key:generate
Run the database migrations:
php artisan migrate
Install Javascript dependencies:
npm install

Run an initial build:
npm run dev
