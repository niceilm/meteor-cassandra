Package.describe({
  name: 'flynn:cassandra',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'wrapping nodejs cassandra driver',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/niceilm/meteor-cassandra',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('cassandra.js', "server");
  api.export('cassandra', "server");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('flynn:cassandra');
  api.addFiles('cassandra-tests.js');
});

Npm.depends({
  "cassandra-driver": "2.2.2"
});
