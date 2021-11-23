/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(domains) {
    const splitDomains = domains.map(domain => {
        // Split based on whitespace
        const splitDomain = domain.split(' ')
        
        // Parse the count to integer
        splitDomain[0] = parseInt(splitDomain[0])
        
        return splitDomain
    })
    
    // Convert the total sum of counts into a map
    const frequencyMap = {}
    for (const [count, domainName] of splitDomains) {
        for (const subdomain of getSubdomains(domainName)) {
            if (subdomain in frequencyMap) frequencyMap[subdomain] += count
            else frequencyMap[subdomain] = count
        }
    }
    
    // Convert this into an array
    const res = []
    for (const subdomain in frequencyMap) {
        res.push(frequencyMap[subdomain] + ' ' + subdomain)
    }
    return res
};

function* getSubdomains(domain) {
    // Find all the occurrences of "." backwards
    for (let x = domain.length - 1; x >= 0; x -= 1) {
        if (domain[x] === '.') yield domain.substring(x + 1, domain.length)
    }
    yield domain
}