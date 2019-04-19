const sdk = require('kinvey-flex-sdk');
var RuleEngine = require("node-rules");

sdk.service((err, flex) => {
  flex.functions.register('EmploymentStatus', (context, complete, modules) => {
 
/* Creating Rule Engine instance */
var R = new RuleEngine();
 
/* Add a rule */
var rule = {
    "condition": (R) => {
        console.log(this);
        R.when(this.jobStatus === 3);
    },
    "consequence": (R) => {
        this.result = false;
        this.reason = "Task has affected Employment Status";
        R.next();
    }
};
 
/* Register Rule */
R.register(rule);
 
/* Add a Fact with less than 500 as transaction, and this should be blocked */
 
/* Check if the engine blocks it! */
R.execute(context, function (data) {
    if (data.goalStatus === "3") {
        dataStore.save(context);
        const email = modules.email;
        email.send('garon@progress.com',
        context.body.friendEmail,
               'Employment Status has changed',
               'Employment status has changed. Review changes here: ', function(err, result) {
               complete().ok().next();
               });
    } else {
        console.log("Error: " + data.reason);
    }
});
  });
});