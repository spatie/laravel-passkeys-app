# Laravel Passkeys Demo app

This is a demo application to showcase the [spatie/laravel-passkeys](https://spatie.be/docs/laravel-passkeys) package which allows you to authenticate users using passkeys.

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/laravel-passkeys.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/laravel-passkeys)

## Installation

```bash
# clone the repo
git clone spatie/laravel-passkeys-app

# cd into the directory
cd laravel-passkeys-app

# install dependencies
composer install
npm install

# copy the .env file
cp .env.example .env

# generate the application key
php artisan key:generate

# run the migrations and seeder
php artisan migrate
```

## Usage

When using Valet, you should now be able to visit `http://laravel-passkeys-app.test` in your browser. If you're using a different local development environment, you may need to adjust the URL accordingly.

You can create a new user by visiting the `/register` route. After registering, you create a passkey. After that, try logging out and logging back in using the passkey. 

## Implementation details

The `authenticate-passkeys` component is [being used in the login view](https://github.com/spatie/laravel-passkeys-app/blob/ff6e3bc51d4f80f4d1970a0e7ef5c8e5b87c508d/resources/views/livewire/pages/auth/login.blade.php#L29).

The `Passkeys` Livewire component is [being used on the dashboard view](https://github.com/spatie/laravel-passkeys-app/blob/ff6e3bc51d4f80f4d1970a0e7ef5c8e5b87c508d/resources/views/dashboard.blade.php#L12).

## Documentation

All documentation on the package is available [on our documentation site](https://spatie.be/docs/laravel-passkeys).

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

This code is based on the [Laracast course on passkeys](https://laracasts.com/series/add-passkeys-to-a-laravel-app) by the amazing [Luke Downing](https://github.com/lukeraymonddowning).

- [Freek Van der Herten](https://github.com/freekmurze)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

