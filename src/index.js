import {Cache} from './cache.js'
const cache = new Cache();
cache.set("machine", "toyota", 13)
let m = cache.get("machine")
cache.get("bycicle")
cache.set("name", "John", 0)
cache.get("name")
cache.getInfo()