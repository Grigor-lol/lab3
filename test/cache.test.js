import {Cache} from "../src/cache";


test('Decrease hits', () => {
    let cache = new Cache()
    cache.set("car","Toyota",3)
    cache.get("car")
    expect(cache._hitsMap.get("car")).toEqual(2)
});

test('Not value on key', () => {
    let cache = new Cache()
    cache.set("car","Toyota",3)
    cache.set("mileage",24000,4)
    let nullValue = cache.get("name")
    expect(nullValue).toBe(null)
});

test('Zero hits', () => {
    let cache = new Cache()
    cache.set("car","Toyota",3)
    cache.set("mileage",24000,0)
    let nullValue = cache.get("mileage")
    expect(nullValue).toBe(null)
});



test('Without hits', () => {
    let cache = new Cache()
    cache.set("mileage", 24000)
    let mileageValue = cache.get("mileage")
    expect(cache._hitsMap.get("mileage")).toEqual(0)
});
