"use client";
import { useMemo, useState } from "react";
import { searchCards } from "@/public/CustomData";
import SearchCard from "./components/SearchCard";

export default function Home() {
  const [sort, setSort] = useState({ key: "", order: 1 });
  const [searchedItem, setSearchedItem] = useState("");
  const KEYS = Object.keys(searchCards[0]);

  const handleSort = (key: any) => {
    if (sort.key === key) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1,
      });
    }
  };

  const sortedArray = useMemo(() => {
    let _sortedData = searchCards;
    if (sort.key) {
      _sortedData = _sortedData.sort(
        (a: { [key: string]: any }, b: { [key: string]: any }): any => {
          const aValue = a[sort.key];
          const bValue = b[sort.key];
          if (aValue === bValue) {
            return 0;
          }
          return (aValue > bValue ? 1 : -1) * sort.order;
        }
      );
    }
    return _sortedData;
  }, [searchCards, sort]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <SearchCard
        searchedItem={searchedItem}
        handleSort={handleSort}
        KEYS={KEYS}
      />
    </main>
  );
}
