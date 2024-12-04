import createCache from '@emotion/cache';

export const createEmotionCache = (nonce) => {
    return createCache({ key: 'css', prepend: true, nonce });
};