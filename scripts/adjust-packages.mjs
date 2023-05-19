import isCI from 'is-ci';
import {readFileSync, writeFileSync, execSync} from 'fs';

let pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
let clean = true;

if (isCI) {
    console.log('CI detected, inserting devDependencies from deployConfig');
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        if (pkg.devDependencies[devDep] !== version) {
            pkg.devDependencies[devDep] = version;
            clean = false;
        }
    }
} else {
    console.log('No CI detected, setting @skeletonlabs/skeleton to workspace:*');
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        pkg.devDependencies[devDep] = 'workspace:*';
    }
}
writeFileSync('./package.json', JSON.stringify(pkg, null, 2), 'utf8');
if (clean === false) {
    execSync('pnpm install --no-frozen-lockfile')
}
process.exit(0);