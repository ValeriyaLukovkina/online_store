export const mockLocalStorage = () => {
    let store: any = {};
    
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation( (key:any) => {
     return store[key];
    });
    jest.spyOn(window.localStorage.__proto__, 'removeItem').mockImplementation((key:any): void =>  {
      delete store[key];
    });
    jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation((key:any, value:any):string =>  {
      return store[key] = value;
    });
    jest.spyOn(window.localStorage.__proto__, 'clear').mockImplementation(() =>  {
        store = {};
    });
}