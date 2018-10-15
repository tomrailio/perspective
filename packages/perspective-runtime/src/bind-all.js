/**
 * Bind all methods in a class to the class instance.  It is sad that this is
 * necessary.
 *
 * @export
 * @param {*} self
 */
export function bindall(self) {
  for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {
      const value = self[key];
      if (key !== "constructor" && typeof value === "function") {
          self[key] = value.bind(self);
      }
  }
}