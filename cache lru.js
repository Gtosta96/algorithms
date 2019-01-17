const LRUCache = function(capacity) {
  this.cache = new Array(capacity).fill({ key: null, value: null, id: 0 });
  Object.seal(this.cache);
  
  this.currentId = 0;
};

LRUCache.prototype.get = function(key) {
  const result = this.cache.find((item) => item.key === key);

  if (result) {
    this.currentId += 1;
    result.id = this.currentId;

    return result.value;
  }

  return -1;
};

LRUCache.prototype.put = function(key, value) {
  let smallestId = Number.MAX_SAFE_INTEGER;
  let index = undefined;

  for(let i = 0; i < this.cache.length; i++) {
      const item = this.cache[i];
      
      if (item.key === key) {
        index = i;
        break;
      }

      if (item.id < smallestId) {
          smallestId = item.id;
          index = i;
      }
  }

  this.currentId += 1;
  this.cache[index] = { key: key, value: value, id: this.currentId };
};

const cache = new LRUCache(2);

cache.put(2, 1);
cache.put(2, 2);
cache.get(2);       // returns 1
cache.put(1, 1);    // evicts key 2
cache.put(4, 1);    // evicts key 2
cache.get(2);       // returns -1 (not found)