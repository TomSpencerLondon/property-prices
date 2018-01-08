const Jasmine = require('jasmine');

const jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

const green = "\x1b[32m";
const red = "\x1b[31m";
const resetTextColour = "\x1b[0m";

var myReporter = {
    specDone: function(result) {
        const textColour = result.status === "passed" ? green : red;
        console.log(textColour + 'Spec: "' + result.description + '": ' + result.status + resetTextColour);
    }
};

jasmine.addReporter(myReporter);

jasmine.execute();
