/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const lowestCommonAncestor = (p, q) => {
    const pVisitedNodes = new Set()
    pVisitedNodes.add(p)

    // Construct set from p as it goes to root
    let parent = p.parent
    while (parent !== null) {
        pVisitedNodes.add(parent)
        parent = parent.parent
    }
    
    // Check if q is a lowest common ancestor
    if (pVisitedNodes.has(q)) return q
    
    // Have q go to its parent, if it finds a common element
    // That is its lowest common ancestor
    parent = q.parent
    while (parent !== null) {
        if (pVisitedNodes.has(parent)) return parent
        parent = parent.parent
    }
};