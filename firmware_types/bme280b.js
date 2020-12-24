module.exports = {
    "convert": (req_cbor) => {
        let obj = {}
        if ("t" in req_cbor) obj.t = req_cbor.t * 0.25;
        if ("v" in req_cbor) obj.v = req_cbor.v * 9 / 40960;
        if ("P" in req_cbor) obj.P = req_cbor.P / 100;
        if ("T" in req_cbor) obj.T = req_cbor.T / 100;
        if ("H" in req_cbor) obj.H = req_cbor.H / 1024;
        return obj
    },
    "subscribe": (my_address) => {
        return {
            'a': my_address,
            's': {
                'P': { 'i': 120000, 'r': 0 },
                'T': { 'i': 120000, 'r': 0 },
                'H': { 'i': 120000, 'r': 0 },
                'v': { 'i': 120000, 'r': 10 },
                't': { 'i': 120000, 'r': 2 },
            }
        }
    }
};