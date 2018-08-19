const path = require('path');
const { validate } = require('jsonschema');
const _ = require('lodash');
const typson = require('typson/lib/typson-schema');

export function getJSONSchema(schemaFileName: string): Promise<any> {

	return new Promise((resolve, reject) => {
		typson.schema(path.join(__dirname, `./assets/${schemaFileName}.d.ts`))
			.done(schema => {
				resolve(schema);
			})
	});
}

export function validateValueBySchema (value: any, schema, schemaClassName) {
    const valueSchema = _.get(schema,`definitions.${schemaClassName}`, {});
    const validationResult = validate(value, valueSchema);

    return Promise.resolve(validationResult);
}

export function testValue (value: any, schemaFileName: string, schemaClassName: string) {
    return getJSONSchema(schemaFileName)
        .then(schema => validateValueBySchema(value, schema, schemaClassName))
}

