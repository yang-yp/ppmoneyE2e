/**
 *
 */

module.exports={
    specs: "test/messageCenter.js",
    suites:{
        all:["test/*.js"],
        selected:[
            'test/profileSet.js',
            'test/openAccount.js',
            'test/login.js'
        ]
    }
}