const applyPagination = (sql, pageNo) => {
    const pageSize = 10;
    const offset = (pageNo - 1) * pageSize;
    return sql += ` limit ${pageSize} offset ${offset}`
}

module.exports = {applyPagination}