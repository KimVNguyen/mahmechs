module.exports = {
    round: (value, step) => {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.ceil(value * inv) / inv;
    }


}

