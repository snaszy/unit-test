const capitilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

module.exports = capitilize;