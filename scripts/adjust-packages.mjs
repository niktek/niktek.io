import isCI from 'is-ci';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

export function makeWorkspacePackageLinks(pkg) {
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        pkg.devDependencies[devDep] = 'workspace:*';
    }
}

export function makeVersionedPackageLinks(pkg) {
    let clean = true;
    for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
        if (pkg.devDependencies[devDep] !== version) {
            pkg.devDependencies[devDep] = version;
            clean = false;
        }
    }
    return { pkg: pkg, clean: clean }
}

export function ci() {
    let pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
    let clean = true;
    if (isCI) {
         ({pkg, clean} = makeVersionedPackageLinks(pkg));
    } else {
        console.log('No CI detected, setting devDependencies to workspace:*');
        makeWorkspacePackageLinks(pkg);
    }
    writeFileSync('./package.json', JSON.stringify(pkg, null, 2), 'utf8');
    if (clean === false) {
        execSync('pnpm install --no-frozen-lockfile')
    }
}

ci()