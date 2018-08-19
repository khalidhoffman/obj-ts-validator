import 'should';
import * as path from 'path';
import { 
    getJSONSchema,
    validateValueBySchema,
    testValue
} from '../index';

describe('obj-ts-validator', function () {
    const testSchemaFilePath = path.join(__dirname, './assets/test.d.ts');

    describe('getJSONSchema()', function () {

        it('runs without errors', function () {

            return getJSONSchema(testSchemaFilePath)
                .then(schema => {
                    console.log('%j', schema);
                    debugger;
                })
        })
    })

    describe('validateValueBySchema()', function() {
        const testVal = {someNum: 10};

        it('runs without errors', function () {
            const testSchema = {};

            return validateValueBySchema(testVal, testSchema, 'DateObj')
                .then(result => {
                    console.log('%j', result);
                    debugger;
                })
        })
    })

    describe('testValue()', function () {
        const testVal = {someNum: 10};

        it('runs without errors', function () {
            return testValue(testVal, testSchemaFilePath, 'DateObj')
                .then(result => {
                    console.log('%j', result);
                    debugger;
                })
        })

        it('validates a value', function(){
            return testValue(testValue, testSchemaFilePath, 'DateObj')
                .then(result => {
                    result.errors.length.should.be.above(0);
                });
        })
    })
})
