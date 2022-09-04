export const getShownMovieCount = (width) => {
    if (width > 768) {
        return 12;
    }
    if (width > 480) {
        return 8;
    }
    return 5;
};

export const getLoadStep = (width) => {
    if (width > 1280) {
        return 4;
    }
    if (width > 768) {
        return 3;
    }
    return 2;
};
