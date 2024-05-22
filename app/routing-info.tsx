'use client';

import { usePathname } from 'next/navigation';

export default function RoutingInfo() {
  const pathname = usePathname();
  const splitPath = pathname.split('/').filter((p) => p !== '');
  const path = splitPath.map((p) => ` / ${p} `);
  const lastSegment = splitPath[splitPath.length - 1];
  const filterleafNodes = splitPath.filter((p) => p !== lastSegment);
  const leafNodes = filterleafNodes.map(
    (p, idx) => `${p}` + (filterleafNodes.length !== idx + 1 ? `, ` : '')
  );

  const altLeafNodes = leafNodes.length === 0 ? lastSegment : '';

  return (
    <div>
      <h1 className="mt-12 ml-4 text-2xl font-bold">Route Tree</h1>
      <div className="p-4 border border-2 my-8 mx-4 border-dashed border-purple-300 rounded-lg shadow-lg bg-gray-100">
        <p className="my-8">
          <span className="">Current URL path: </span>
          <span className="py-1 px-2 bg-gray-100 rounded-xl border-2">
            domain.com {path}
          </span>
        </p>
        <p className="my-8">
          Route Segment:{' '}
          {leafNodes.length > 0 ? (
            <span className="py-1 px-2 bg-gray-100 rounded-xl border-2">
              {leafNodes}
            </span>
          ) : (
            <span className="py-1 px-2 bg-gray-100 rounded-xl border-2">
              {altLeafNodes}
            </span>
          )}
        </p>
        <p className="my-8">
          Leaf Segment:{' '}
          {lastSegment && (
            <span className="py-1 px-2 bg-gray-100 rounded-xl border-2">
              {lastSegment}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
