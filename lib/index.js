export function provideTester() {
	return {
		name: 'tester-name',
		options: {},
		scopes: ['**/test/*.js'],
		test(textEditor /* or null to run project tests */ , additionalArgs /* from results views */ ) {
			// Note, a Promise may be returned as well!
			return {
				messages: [{
					duration: 1, // duration in ms
					error: {
						name: 'optional error object',
						message: 'something went wrong',
						actual: 'optional actual result', // can be an object
						expected: 'optional expected result', // can be an object
						operator: 'optional operator'
					},
					filePath: 'file path to highlight',
					lineNumber: 1, // line number to highlight
					state: 'failed', // 'passed' | 'failed' | 'skipped',
					title: 'some test title'
				}],
				output: 'tester console output'
			}
		},
		stop() {
			// stop tester if needed
		}
	}
}
