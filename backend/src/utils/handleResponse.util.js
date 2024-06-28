
class handleResponse {
     constructor(data, statusCode, message) {
          this.statusCode = statusCode
          this.data = data,
               this.message = message
          this.success = statusCode < 400

     }
}

export { handleResponse }