// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
	allScriptsTimeOut: 120000,
	ignoreUncaughtExceptions: true,
	untrackOutstandingTimeouts: true,
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	seleniumAddress: 'http://sh-cap1-zone1-taassel-pro.appls.cap1.paas.gsnetcloud.corp/wd/hub',
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	
	capabilities: {
		browserName: 'chrome',
		acceptSslCerts: true,
		chromeOptions: {
			useAutomationExtension: false,
			// args: [ '--headless', '--disable-gpu', '--window-size=1200,800' ]
			args: [ '--window-size=1200,800' ]
		}
	},

	specs: [
		'e2e/features/*.feature',
	],
	
	cucumberOpts: {
		tags: 'not (@ignore or @obsolete) and (@test or @e2e or @acceptance or @integration)',
		format: [ 'json:./target/reports/cucumber/cucumber_report.json', 'node_modules/cucumber-pretty' ]
	},

	onPrepare: function() {
		require('babel-register');
		require('babel-polyfill');
	},

	onCleanUp: function() {
		var cucumberHtmlReport = require('cucumber-html-reporter');
		var today = require('moment');
		console.log('Creating report . . .');
		return cucumberHtmlReport.generate({
			theme: 'bootstrap',
			name: 'BDD Test Report',
			brandTitle: 'Automation Report',
			jsonFile: './target/reports/cucumber/cucumber_report.json',
			output: './target/reports/cucumber/html/cucumber_report.html',
			reportSuiteAsScenarios: true,
			launchReport: false,
			metadata: {
				Generated: today().format('LLL')
			}
		});
	}
};
