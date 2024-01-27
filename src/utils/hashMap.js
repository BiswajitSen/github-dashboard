import areArraysEqual from "./areArraysEqual";

class HashMap {
  #list;
  constructor() {
    this.#list = new Map();
  }

  add(key, value) {
    if (!this.#list.has(key)) return this.#list.set(key, [value]);
    const selectedKey = this.#list.get(key);
    selectedKey.push(value);
  }

  getValue(key) {
    return this.#list.get(key);
  }

  getKeys() {
    return Array.from(this.#list.keys());
  }

  getValueCount(key) {
    return this.#list.get(key).length;
  }

  size() {
    return this.#list.size;
  }

  equals(otherHashMap) {
    if (this.size() !== otherHashMap.size()) {
      return false;
    }

    for (const [key, values] of this.#list.entries()) {
      if (!otherHashMap.#list.has(key)) {
        return false;
      }

      const otherValues = otherHashMap.#list.get(key);
      if (!areArraysEqual(values, otherValues)) {
        return false;
      }
    }
    return true;
  }
}

export default HashMap;
