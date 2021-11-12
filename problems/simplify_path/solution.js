/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    const stack = []
    const components = path.split('/')
    
    for (const directory of components) {
        // If it's a dot or empty string, it's a no-op, so continue
        if (directory === '.' || directory === '') continue
        
        // If dictionary is .., then we go up one in the structure
        if (directory === '..') {
            if (stack.length > 0) stack.pop()
        }
        
        // Otherwise, it's a legitimate name, add to stack
        else stack.push(directory)
    }
    
    // Combine all the names together with / in between
    const res = stack.join('/')
    return '/' + res
};