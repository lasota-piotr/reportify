export function fetcherApi<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  return fetch(`${process.env.REACT_APP_API_URL}${input}`, {
    mode: 'cors',
    ...init
  }).then(r => r.json())
}
