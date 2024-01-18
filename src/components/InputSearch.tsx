// import { Anime } from "@models/anime";
// import { fetchSearchAnime } from "@services/api/TopAnime";
// import { BiSearch } from "react-icons/bi";

import { Anime } from "@models/anime";
import { fetchSearchAnime } from "@services/api/TopAnime";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";

// // type ResultSearch = Anime[];

// interface InputSearchProps {
//   placeHolder?: string;
//   withResult?: boolean;
//   result?: Anime[];
//   ref?: React.RefObject<HTMLInputElement>;
// }
// const InputSearch: React.FC<InputSearchProps> = ({
//   placeHolder,
//   withResult,
//   result,
//   ref,
// }) => {
// const handleSearch = (searchValue:string) =>{
//     fetchSearchAnime("sousou")
//     console.log(result)
// }

//   return (
//     <div className="flex items-center flex-col">
//       <div className="flex border-[1px] border-secGray rounded-sm px-2 items-center justify-between">
//         <input
//           className="text-center py-1 px-4"
//           type="text"
//           placeholder={placeHolder}
//           ref={ref}
//         />
//         <button className="py-1 px-2" onClick={()=>handleSearch}>
//           <BiSearch size={30} />
//         </button>
//       </div>
//       {withResult ? (
//         <div>
//           <div>
//             {result?.slice(0, 5).map((resultData) => (
//               <div key={resultData.mal_id}>{resultData.title}</div>
//             ))}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default InputSearch;
interface InputSearchProps {
  placeHolder?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ placeHolder }) => {
  const [searchResult, setSearchResult] = useState<Anime[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      const searchValue = searchRef.current?.value;
      if (searchValue) {
        await wait(1000);
        return fetchSearchAnime(searchValue);
      }
    },
    queryKey: ["animes"],
    enabled: false, // Do not auto-fetch on component mount
  });

  const handleSearch = () => {
    refetch(); // Trigger the data fetching when the search button is clicked
    console.log(searchRef.current?.value)
    console.log(searchResult)
  };

  useEffect(() => {
    if (data) {
      setSearchResult(data);
    }
  }, [data]);

  return (
    <div className="flex items-center flex-col">
      <div className="flex border-[1px] border-secGray rounded-sm px-2 items-center justify-between">
        <input
          className="text-center py-1 px-4"
          type="text"
          placeholder={placeHolder}
          ref={searchRef}
        />
        <button className="py-1 px-2" onClick={handleSearch}>
          <BiSearch size={30} />
        </button>
      </div>
      {isLoading && (
        <div className="flex justify-center mt-32">is Loading...</div>
      )}
      {isError && (
        <div className="flex flex-col items-center">
          <p className="text-red-500 mb-4">Error fetching data</p>
          <Button onClick={() => refetch()} variant="primary">
            Retry
          </Button>
        </div>
      )}
      {searchResult.map((resultData: Anime) => (
        <div key={resultData.mal_id}>{resultData.title}</div>
      ))}
    </div>
  );
};

export default InputSearch;
