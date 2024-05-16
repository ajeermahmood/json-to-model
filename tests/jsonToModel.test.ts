import { convertToModel } from '../jsonToModel';

test('Converts valid JSON to model', () => {
    const json = '{"name": "John", "age": 30}';
    const model = convertToModel(json);
    expect(model).toEqual({ name: 'John', age: 30 });
});

test('Throws error for invalid JSON', () => {
    const invalidJson = '{name: "John", age: 30}';
    expect(() => {
        convertToModel(invalidJson);
    }).toThrow();
});
