# parcel-bundler-json-schemas
Dump ParcelConfig.schema.js into JSON

`yarn start` / main.js creates:
- config_schema.json from https://github.com/parcel-bundler/parcel/blob/v2/packages/core/core/src/ParcelConfig.schema.js#L93
- package_target_schema.json from https://github.com/parcel-bundler/parcel/blob/v2/packages/core/core/src/TargetDescriptor.schema.js#L27

With this, you can get code-completion in `.parcelrc`:
```json
{
  "$schema": "https://raw.githubusercontent.com/lukaw3d/parcel-bundler-json-schemas/main/config_schema.json",
  "extends": "@parcel/config-default"
}
```

And `targets` in `package.json`:
```json
{
  "$schema": "https://raw.githubusercontent.com/lukaw3d/parcel-bundler-json-schemas/main/package_schema.json",
  "scripts": {
    "start": "parcel --target web --dist-dir build"
  },
  "devDependencies": {
    "parcel": "2.3.2"
  },
  "targets": {
    "web": {
      "source": "src/index.html",
      "context": "browser",
      "scopeHoist": false
    }
  }
}
```
