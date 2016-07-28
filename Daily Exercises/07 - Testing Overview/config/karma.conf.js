basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'http://localhost//vendor/angular/angular.js',
  'http://localhost//vendor/angular/angular-cookies.js',
  'http://localhost//vendor/angular/angular-loader.js',
  'http://localhost//vendor/angular/angular-resource.js',
  'http://localhost//vendor/angular/angular-sanitize.js',
  'http://localhost//vendor/angular/angular-mocks.js',

  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
