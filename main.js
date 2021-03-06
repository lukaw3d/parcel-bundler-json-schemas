const fs = require('fs')
const parcelConfigSchema = require('@parcel/core/lib/ParcelConfig.schema.js').default
const targetDescriptorSchema = require('@parcel/core/lib/TargetDescriptor.schema.js').PACKAGE_DESCRIPTOR_SCHEMA

parcelConfigSchema.title = 'JSON schema for .parcelrc files'
parcelConfigSchema.$schema = 'http://json-schema.org/draft-04/schema#'

fs.writeFileSync('config_schema.json', JSON.stringify(parcelConfigSchema, null, 2), 'utf-8')
fs.writeFileSync('package_target_schema.json', JSON.stringify(targetDescriptorSchema, null, 2), 'utf-8')
