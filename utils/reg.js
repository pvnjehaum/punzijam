
/**
 * 根据特定标准验证用户名，例如长度和允许的字符。
 * @param {string} username - 要验证的用户名。
 * @returns {boolean} - 如果用户名有效则返回 true，否则返回 false。
 */
function nameTest(username) {
    // 示例：用户名必须在5到20个字符之间，并且只能包含字母、数字和下划线。
    return /^[a-zA-Z0-9_]{5,20}$/.test(username);
}

/**
 * 根据特定标准验证密码，例如长度和包含字母及数字。
 * @param {string} password - 要验证的密码。
 * @returns {boolean} - 如果密码有效则返回 true，否则返回 false。
 */
function pwdTest(password) {
    // 示例：密码必须至少有8个字符，包含一个数字、一个大写字母和一个小写字母。
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

/**
 * 验证昵称，确保它只包含字母和可选的空格，允许基本标点。
 * @param {string} nickname - 要验证的昵称。
 * @returns {boolean} - 如果昵称有效则返回 true，否则返回 false。
 */
function nickTest(nickname) {
    // 示例：昵称必须只包括字母、空格及基本标点（如连字符或撇号）。
    return /^[a-zA-Z\s'-]+$/.test(nickname);
}

// 导出这些函数以便在其他脚本中使用
export { nameTest, pwdTest, nickTest };
