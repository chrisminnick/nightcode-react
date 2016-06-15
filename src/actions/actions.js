export const TEST = "TEST";

export function getTest(testinfo){
    return {
        type: TEST,
        payload: testinfo
    }
}
