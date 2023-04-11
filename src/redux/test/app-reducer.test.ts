import appReducer, { InintalStateAppType, initializeApp, initializedSuccess, initialStateApp } from "../app-reducer";

let stateApp: InintalStateAppType = initialStateApp;

describe('initializedSuccess', () => {
    test('inintialized should be true', () => {
        let newState = appReducer(stateApp, initializedSuccess());
        expect(newState.inintialized).toBeTruthy()
    })
})  