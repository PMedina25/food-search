import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer huvj-Nhx4MHjgws3pRh1t8-iXxUYQcuGF1zP-zYJXqG6QboNrSAFYkBsWVsfnyzIIeggelfSvBDtbOyNGY0hTxrU6LzyBNoHxlSvLDpTRRxniZ59UR-xMw4fDMYtYnYx",
  },
});

export default yelp;
