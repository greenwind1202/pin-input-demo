# Installation

Execute the following command under root directory:

```sh
$ composer install
$ npm install
$ npm run dev
$ cp .env.example .env
$ php artisan key:generate
$ npm i -D ts-loader typescript
$ php artisan serve

```

# Results

-   Implemented all the minimum requirements
-   Implemented some features in Plus point:
    -   Allow to change number of input boxes (please change in `LENGTH_OF_PIN` sresources\js\constant.tsx)
    -   Allow pasting
    -   Fancy UI (I think)
    -   Using Typescript
    -   UnitTest( just several cases). Please run `npm run test` to confirm it

Please note that when change anything in js files, you need to execute command `npm run dev`
