import Link from "next/link";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { getCollections } from "../../services/shopify/collections";
export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        {collections.map(
          (collection: {
            id: Key | null | undefined;
            handle: any;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <Link key={collection.id} href={`store/${collection.handle}`}>
              {collection.title}
            </Link>
          )
        )}
      </nav>
      {children}
    </main>
  );
}
