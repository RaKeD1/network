import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '1234' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('12341234'),
        ))
            .toEqual({ username: '12341234' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '1234' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('12341234'),
        ))
            .toEqual({ password: '12341234' });
    });
});
