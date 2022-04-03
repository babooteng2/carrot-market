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

interface IUseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data:any) => void, IUseMutationState]
export default function useMutation(url:string): UseMutationResult {
  /* const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined); */
  const [state, setState] = useState({
    loading: false,
    data: undefined, 
    error: undefined,
  })
  function mutation( data: any ) {
    /* setLoading( true ); */
    setState( prev => ({...prev, loading:true}));
    fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( data ),
    })
    /* json이 없다면 에러를 보이지 않음 */
    .then((response) => response.json().catch( () => {} ) )
    /* .then(json => setData( json )) shortCut*/ 
    /* .then(setData)
    .catch(setError)
    .finally(()=> setLoading(false)); */
    .then(data => setState( prev => ({...prev, data})))
    .catch(error => setState( prev => ({...prev, error})))
    .finally(() => setState( prev => ({...prev, loading:false })));
  }
  return [mutation, { ...state }];
}