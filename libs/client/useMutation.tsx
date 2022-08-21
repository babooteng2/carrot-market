import { useState } from "react";

/* export default function useMutation( 
  url:string 
): [
  (data: any)=>void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data:any) {

  }
  return [mutation, {loading, data, error}];
} */

interface IUseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
type UseMutationResult<T> = [(data: any) => void, IUseMutationState<T>];
export default function useMutation<T = any>(
  url: string,
): UseMutationResult<T> {
  /* const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined); */
  const [state, setState] = useState<IUseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(_data: any) {
    /* setLoading( true ); */
    setState(prev => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_data),
    })
      /* json이 없다면 에러를 보이지 않음 */
      .then(response => response.json().catch(() => {}))
      /* .then(json => setData( json )) shortCut */
      /* .then(setData)
    .catch(setError)
    .finally(()=> setLoading(false)); */
      .then(data => setState(prev => ({ ...prev, data })))
      .catch(error => setState(prev => ({ ...prev, error })))
      .finally(() => setState(prev => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
