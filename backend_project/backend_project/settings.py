INSTALLED_APPS = [
    # Other installed apps
    'employees',
]

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'your_mongodb_database_name',  # Replace with your MongoDB database name
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
            'username': 'your_username',       # Replace with your MongoDB username
            'password': 'your_password',       # Replace with your MongoDB password
            'authSource': 'admin',
            'authMechanism': 'SCRAM-SHA-1',
        }
    }
}
ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']
