# Security policy

Al-Hikmah is a static website (HTML, CSS and JavaScript served by GitHub Pages). It has no server, no database, no user accounts and no stored personal data.

## Reporting a vulnerability

Please report security issues privately through GitHub's "Report a vulnerability" button on the Security tab of this repository, rather than opening a public issue. You will receive a reply as soon as possible.

## What is in place

- Dependencies are monitored with Dependabot alerts, and the production dependency tree currently has no known vulnerabilities.
- Secret scanning with push protection is enabled.
- CodeQL code scanning runs on this repository.
- Every change is type-checked and built by an automated workflow before it is published.
