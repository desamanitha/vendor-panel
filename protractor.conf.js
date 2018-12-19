const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    specs: ['./tests/**/*.spec.js'],
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        print: () => { }
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true,
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: true
            }
          }));
    }
  }