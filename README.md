# Example of using nyc with mock-fs and mountfs

Steps to reproduce:

```console
npm install

# Tests with AVA passed
npm test

# Tests with nyc fail (can not find mocked file)
npm run coverage
```
