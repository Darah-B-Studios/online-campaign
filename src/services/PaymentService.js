const url = 'http://rafineg.herokuapp.com/api/collect/bootcamp';

export const paymentService = {
    collect: async (info) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json; charset=utf-8"
            }
        };
        const res = await fetch(url, requestOptions);
        const data = await res.json();
        return data;
    },
}

