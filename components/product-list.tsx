/* eslint-disable react/jsx-no-useless-fragment */
import { IProductWithFavs } from "pages";
import useSWR from "swr";
import Item from "./item";

interface IRecord {
  id: number;
  product: IProductWithFavs;
}
interface IProductListResponse {
  [key: string]: IRecord[];
}

interface IProductListProps {
  kind: "favs" | "sales" | "purchases";
}

export default function ProductList({ kind }: IProductListProps) {
  const { data } = useSWR<IProductListResponse>(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind]?.map(record => (
        <Item
          id={record.product.id}
          key={record.id}
          title={record.product.name}
          price={record.product.price}
          hearts={record.product._count.favs}
          comments={0}
        />
      ))}
    </>
  ) : null;
}
