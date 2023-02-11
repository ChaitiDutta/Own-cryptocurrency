export const SingleCoin=(id)=>
`https://api.coingecko.com/api/v3/coins/${id}`;

export const ChartHistry=(id, days=365, currency)=>
`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`