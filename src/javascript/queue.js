/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
Constraints
    1 ≤ s.length ≤ 104
    s consists of parentheses only '()[]{}'.
 */

    /** algo
     * 1. take i/p
     * 2. check data type 
     * 3. if string proceesd further else throw error
     * 4. loop over string
     * 5. if ( || [ || { found  push in array
     * 6. else if ,check length of stack and look for ] || ) || }
     * 7. if step 6 is true then remove opening breakits
     */
    
const validateString = (data) => {
    if (typeof data === 'string') {
        
    } else {
        throw new Error('in valid data type')
    }
}