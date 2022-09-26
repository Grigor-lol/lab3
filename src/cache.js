class Cache{
    constructor() {
        this._valuesMap = new Map();
        this._hitsMap = new Map();
        this._history = new Array();
    }

    set(key, value, hits = 1){
        this._valuesMap.set(key,value)
        this._hitsMap.set(key,hits)
        this._history.push(`Установлен элемент ${value} по ключу ${key}. Количество обращений: ${hits}`)
    }

    get(key){
        if (!this._valuesMap.has(key)) {
            this._history.push(`Обращение по несуществующему ключу ${key}`)
            return null
        }
        if (this._hitsMap.get(key) == 0) {
            this._history.push(`Обращение к элементу ${this._valuesMap.get(key)} по ключу ${key}. Лимит обращений исчерпан`)
            return null
        }
        this._hitsMap.set(key,this._hitsMap.get(key)-1)
        this._history.push(`Обращение к элементу ${this._valuesMap.get(key)} по ключу ${key}. Количество обращений: ${this._hitsMap.get(key)}`)
        return this._valuesMap.get(key)
    }

    getInfo(){
        this._history.forEach((elem) =>{
            console.log(elem)
        })
    }
}
export {Cache}


