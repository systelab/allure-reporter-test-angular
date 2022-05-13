import {because, TestUtil} from 'systelab-components-test/lib/utilities';
import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import {GeneralParameters} from '../general-parameters';

describe('TC000X_Allure-Validation_e2e', () => {

	beforeEach(async () => {
		TestIdentification.setTmsLink('TC000X_Allure-Validation_e2e');
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify the xml file generation');
		TestIdentification.setAppVersion(GeneralParameters.appVersion);
		await ReportUtility.addLabel('actualResults', 'new label inserted from e2e Test Execution... ');
	});

	it('Allure-Validation - Trivial action with expected result (pass)', async () => {
		await ReportUtility.addExpectedResult('Expected result is correct', async() => {
			AssertionUtility.expectEqual(1, 1);
		});
	});

	it('Allure-validation - Trivial action with expected result (fail)', async () => {
		await ReportUtility.addExpectedResult('Expected result is not correct', async () => {
			AssertionUtility.expectEqual(1, 2);
		});
	});

	it('Allure-validation - Nested actions (pass)', async () => {
		await ReportUtility.addExpectedResult('Action:First Level action', async () => {
			await ReportUtility.addExpectedResult('Action:Second Level action', async () => {
				await ReportUtility.addExpectedResult('Action:Third Level action', async () => {
					await ReportUtility.addExpectedResult('Action:Fourth Level action', async () => {
						AssertionUtility.expectEqual(1, 1);
					});
				});
			});
		});
	});

	it('Allure-validation - Nested results (pass)', async () => {
		await ReportUtility.addExpectedResult('First Level result', async () => {
			AssertionUtility.expectEqual(1, 1);
			await ReportUtility.addExpectedResult('Second Level result', async () => {
				AssertionUtility.expectEqual(1, 1);
				await ReportUtility.addExpectedResult('Third Level result', async () => {
					AssertionUtility.expectEqual(1,1);
					await ReportUtility.addExpectedResult('Fourth Level result', async () => {
						AssertionUtility.expectEqual(1, 1);
						await ReportUtility.addExpectedResult('Expected result is correct', async () => {
							AssertionUtility.expectEqual(1, 1);
						});
					});
				});
			});
		});
	});

	it('Allure-validation - Nested actions (fail)', async () => {
		await ReportUtility.addExpectedResult('Action:First Level Action', async () => {
			await ReportUtility.addExpectedResult('Action:Second Level Action', async () => {
				await ReportUtility.addExpectedResult('Action:Third Level Action', async () => {
					await ReportUtility.addExpectedResult('Expected result is not correct', async () => {
						AssertionUtility.expectEqual(1, 2);
					});
				});
			});
		});
	});

	it('Allure-validation - Nested results (fail)', async () => {
		await ReportUtility.addExpectedResult('First Level Result', async () => {
			AssertionUtility.expectEqual(1, 1);
			await ReportUtility.addExpectedResult('Second Level Result', async () => {
				AssertionUtility.expectEqual(1, 1);
				await ReportUtility.addExpectedResult('Third Level Result', async () => {
					AssertionUtility.expectEqual(1, 1);
					await ReportUtility.addExpectedResult('Expected result is not correct', async () => {
						AssertionUtility.expectEqual(1, 2);
					});
				});
			});
		});
	});

	it('Allure-validation - non Nested results (fail)', async () => {
		await ReportUtility.addExpectedResult('First Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Second Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Third Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Fourth Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Expected result is not correct', async () => {
			AssertionUtility.expectEqual(1, 2);
		});
	});

	it('Allure-validation - non Nested results (pass)', async () => {
		await ReportUtility.addExpectedResult('First Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Second Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Third Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Fourth Result', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
		await ReportUtility.addExpectedResult('Expected result is correct', async () => {
			AssertionUtility.expectEqual(1, 1);
		});
	});
});