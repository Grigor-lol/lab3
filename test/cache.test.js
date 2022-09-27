import {Cache} from "../src/cache";


test('Decrease hits', () => {
    let cache = new Cache()
    cache.set("car","Toyota",2)
    cache.get("car")
    cache.get("car")
    expect(cache.get("car")).toEqual(null)
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
    expect(mileageValue).toEqual(24000)
    let nullValue = cache.get("mileage")
    expect(nullValue).toEqual(null)
});

test('Statistic', () => {
    let cache = new Cache()
    cache.set("mileage", 24000, 2)
    let res = "Установлен элемент 24000 по ключу mileage. Количество обращений: 2"
    expect(cache._history[0]).toEqual(res)
    cache.get("mileage")
    let res2 = "Обращение к элементу 24000 по ключу mileage. Количество обращений: 1"
    expect(cache._history[1]).toEqual(res2)
    cache.get("car")
    let res3 = "Обращение по несуществующему ключу car"
    expect(cache._history[2]).toEqual(res3)
    cache.get("mileage")
    let res4 = "Обращение к элементу 24000 по ключу mileage. Количество обращений: 0"
    expect(cache._history[3]).toEqual(res4)
    cache.get("mileage")
    let res5 = "Обращение к элементу 24000 по ключу mileage. Лимит обращений исчерпан"
    expect(cache._history[4]).toEqual(res5)
});
