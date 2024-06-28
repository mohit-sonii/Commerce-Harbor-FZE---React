

class handleError extends Error {
     constructor(statusCode, message) {
          super(message);
          this.statusCode = statusCode;
          this.success = false;
          this.data = null;
     }
}

export { handleError };
