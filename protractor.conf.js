const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine',
    specs: ['./test/**/*.spec.js'],
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
          jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
    }
  }