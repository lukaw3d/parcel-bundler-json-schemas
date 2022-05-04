const fs = require('fs')
const ParcelConfigSchema = require('@parcel/core/lib/ParcelConfig.schema.js').default
const TargetDescriptorSchema = require('@parcel/core/lib/TargetDescriptor.schema.js').PACKAGE_DESCRIPTOR_SCHEMA

ParcelConfigSchema.properties.$schema = { type: 'string' }

fs.writeFileSync('config_schema.json', JSON.stringify(ParcelConfigSchema, null, 2), 'utf-8')
fs.writeFileSync('package_schema.json', JSON.stringify(TargetDescriptorSchema, null, 2), 'utf-8')
