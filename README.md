# obj-ts-validator
plain old javascript object typescript definition validator

## API

### testValue(value: any, tsDeclarationFilePath: string, typescriptClassName: string)

#### Example
```typescript
testValue({date: 10}, path.join(__dirname, 'your/ts/declarationfile.d.ts', 'DateObj'))
```
