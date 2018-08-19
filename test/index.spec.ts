import { 
    getJSONSchema,
    validateValueBySchema,
    testValue
} from '../index';
import 'should';

describe('obj-ts-validator', function () {

    describe('getJSONSchema()', function () {

        it('runs without errors', function () {

            return getJSONSchema('test')
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
            const testSchemaName = 'test';

            return testValue(testVal, testSchemaName, 'DateObj')
                .then(result => {
                    console.log('%j', result);
                    debugger;
                })
        })

        it('validates a value', function(){
            const testSchemaName = 'test';
            
            return testValue(testValue, testSchemaName, 'DateObj')
                .then(result => {
                    result.errors.length.should.be.above(0);
                });
        })
    })
})
