import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additianal params', () => {
        const expected = 'someClass someClass1 someClass2';
        expect(classNames('someClass', {}, ['someClass1', 'someClass2'])).toBe(expected);
    });

    test('with mods (one mod false)', () => {
        const expected = 'someClass someClass1 someClass2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['someClass1', 'someClass2'],
        ))
            .toBe(expected);
    });
    test('with mods (one mod false)', () => {
        const expected = 'someClass someClass1 someClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['someClass1', 'someClass2'],
        ))
            .toBe(expected);
    });
    test('with mods (one mod undefined)', () => {
        const expected = 'someClass someClass1 someClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['someClass1', 'someClass2'],
        ))
            .toBe(expected);
    });
    test('with mods (one mod null)', () => {
        const expected = 'someClass someClass1 someClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: null },
            ['someClass1', 'someClass2'],
        ))
            .toBe(expected);
    });
});
