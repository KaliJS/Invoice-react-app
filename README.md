Project is built in laravel and react.

Set Up<br>
Clone the repository:<br>
git clone https://github.com/KaliJS/Invoice-react-app<br>
Create your environment file:<br>
cp .env.example .env<br>

Update these settings in the .env file:<br>
DB_DATABASE (your local database, i.e. "react_db")<br>
DB_USERNAME (your local db username, i.e. "root")<br>
DB_PASSWORD (your local db password, i.e. "")<br>

Install PHP dependencies:<br>
composer install<br>

Generate an app key:<br>
php artisan key:generate<br>
Run the database migrations:<br>
php artisan migrate<br>
Install Javascript dependencies:<br>
npm install<br>

Run an initial build:<br>
npm run dev
