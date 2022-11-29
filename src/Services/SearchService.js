import * as httpRequest from '~/untils/httprequest';
export const search = async (q, type) => {
    try {
        const res = await httpRequest.get('', {
            params: { q, type },
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
