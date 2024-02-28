const path = require('path');
const {
	configureToMatchImageSnapshot
} = require('jest-image-snapshot');

const hbuilderx_version = 'dev 2.0.0'
const uniTestPlatformInfo = process.env.UNI_OS_NAME
const folderName = `__image_snapshots__/${hbuilderx_version}/__${uniTestPlatformInfo}__`
let environment = 'official'
if(hbuilderx_version.includes('dev')){
  environment = 'dev'
}else if(hbuilderx_version.includes('alpha')){
  environment = 'alpha'
}
const baseFolderName = `__image_snapshots__/base/${environment}/__${uniTestPlatformInfo}__`


expect.extend({
	toMatchImageSnapshot: configureToMatchImageSnapshot({
		customSnapshotIdentifier(args) {
			return args.currentTestName.replace(/\//g, '-').replace(' ', '-');
		},
		customSnapshotsDir: path.join(__dirname, baseFolderName),
		customDiffDir: path.join(__dirname, `${folderName}/`, 'diff'),
	}),
});
