const CROSS_DOMAIN_REQ = !!window.GM_xmlhttpRequest

const request = (url, option) => {
  const { method = 'GET', headers, data } = option
    return fetch(url, {
      body: data,
      headers, method,
      mode: 'cors',
	  referrer: 'no-referrer'
    }).then(res => res.json())
}

export default request
