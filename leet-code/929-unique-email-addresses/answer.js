/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const result = new Set();

  for (let i = 0; i < emails.length; i++) {
    const current = emails[i];
    const atIndex = current.indexOf('@');

    let local = current.substring(0, atIndex);

    local = local.replace(/\./g, '');
    local = local.substring(0, local.indexOf('+'));

    const domain = current.substring(atIndex, current.length);

    result.add(local + domain);
  }

  return result.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); //  2