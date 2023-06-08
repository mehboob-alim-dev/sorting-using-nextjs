import { searchCards } from "@/public/CustomData";
import Image from "next/image";

interface Props {
  searchedItem: string;
  handleSort: any;
  KEYS: any;
}

const SearchCard = ({ handleSort, KEYS }: Props) => {
  return (
    <>
      {KEYS.map(
        (key: any) =>
          key === "title" && (
            <button
              onClick={() => handleSort(key)}
              className="bg-red-900 py-5 px-10 text-white font-bold rounded-lg"
            >
              Sort
            </button>
          )
      )}

      <div className="flex flex-wrap -mx-3">
        {searchCards.map((item, index) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/6 text-center px-3" key={index}>
            <div className="p-3 md:p-[18px] 2xl:p-7 rounded-2xl cards-bg mb-6">
              <Image src={item.imgSrc} alt="" className="w-full h-full" />
              <h5 className="font-[Raleway] text-sm md:text-lg 2xl:text-2xl font-semibold text-white my-0 mt-[18px]">
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchCard;
