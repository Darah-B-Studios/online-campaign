const url = 'http://rafineg.herokuapp.com/api/collect/bootcamp';
// const url = 'https://rafineg.up.railway.app/api/collect/bootcamp';
// const url = 'http://localhost:8000/collect/bootcamp';

export const paymentService = {
    collect: async (info) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            }
        };
        const res = await fetch(url, requestOptions);
        const data = await res.json();
        return data;
    },
    pay: async (info) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json; charset=utf-8",
                "X-MeSomb-Application": "65bce9457e050c97a80d6d39c21afd9be92714ab",
            }
        };
        // const url = "https://mesomb.hachther.com/api/v1.0/payment/online";
        const res = await fetch(url, requestOptions);
        const data = await res.json();
        return data;
    },
}

