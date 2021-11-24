
var Logger = function() {
    this.map = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (message in this.map) {
        if (timestamp >= this.map[message]) {
            this.map[message] = timestamp + 10
            return true
        }
        return false
    }
    else {
        this.map[message] = timestamp + 10
        return true
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */