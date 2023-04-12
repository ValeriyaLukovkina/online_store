import appReducer, { initializedSuccess, initialStateApp, InitialStateAppType } from "../app-reducer";

let stateApp: InitialStateAppType = initialStateApp;

describe('initializedSuccess', () => {
    test('inintialized should be true', () => {
        let newState = appReducer(stateApp, initializedSuccess());
        expect(newState.inintialized).toBeTruthy()
    })
})