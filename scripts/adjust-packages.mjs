import isCI from 'is-ci';
import {readFileSync, writeFileSync} from 'fs';

let pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
if (isCI) {
    console.log('CI detected, inserting devDependencies from deployConfig');
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        pkg.devDependencies[devDep] = version;
    }
}else{
    console.log('No CI detected, setting @skeletonlabs/skeleton to workspace:*');
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        pkg.devDependencies[devDep] = 'workspace:*';
    }
}
writeFileSync('./package.json', JSON.stringify(pkg, null, 2), 'utf8');
process.exit(0);