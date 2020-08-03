export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
    if (user[objPropName] === itemId) { //itemId = action.userId
        return { ...user, ...newObjProps }
    }
    return user;
})
}