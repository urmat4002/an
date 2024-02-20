import { useState } from "react";
import { FilterValue, FiltertItem } from "./types/Filter.types";
import { Button, Select, Typography } from "@/shared/ui";
import style from "./Filter.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Filter = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [selectValue, setSelectValue] = useState<FilterValue>({
    city: [],
    type: [],
    rating: [],
  });

  const handleSearchParams = (option: FiltertItem[], paramType: string) => {
    setSearchParams((prev) => {
      prev.set(paramType, convertToString(option));

      const params = prev.get(paramType);

      if (!params) prev.delete(paramType);

      return prev;
    });
  };

  const convertToString = (option: FiltertItem[]) => {
    const converted = option.map((obj) => obj.label);

    return converted.join(",");
  };

  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();

    navigate(`/estates/${searchParams}`);
  };

  const dataCity = [
    {
      id: 1,
      label: "Istanbul",
    },
    {
      id: 2,
      label: "Dubai",
    },
    {
      id: 3,
      label: "Bishkek",
    },
  ];
  const types = [
    {
      id: 1,
      label: "Apartments",
    },
    {
      id: 2,
      label: "Duplexes",
    },
    {
      id: 3,
      label: "Penthouses",
    },
    {
      id: 4,
      label: "Cottages",
    },
    {
      id: 5,
      label: "Townhouses",
    },
    {
      id: 6,
      label: "Commercial propertiesfdffdsdfdf",
    },
  ];
  const ratings = [
    {
      id: 1,
      label: "Recently",
    },
    {
      id: 2,
      label: "Popular",
    },
    {
      id: 3,
      label: "All",
    },
  ];

  return (
    <div className={style.filter}>
      <div className={style.filterBlock}>
        <div className={style.filterSelect}>
          <Select
            value={selectValue.city}
            options={dataCity}
            placeholder={"City"}
            checkbox={true}
            onChange={(option) => {
              handleSearchParams(option, "city");
              setSelectValue({ ...selectValue, city: option });
            }}
          />
          <Select
            value={selectValue.type}
            options={types}
            placeholder={"Type"}
            onChange={(option) => {
              handleSearchParams(option, "type");
              setSelectValue({ ...selectValue, type: option });
            }}
          />
          <Select
            value={selectValue.rating}
            options={ratings}
            placeholder={"Popular"}
            onChange={(option) => {
              handleSearchParams(option, "rating");
              setSelectValue({ ...selectValue, rating: option });
            }}
          />
          <Button type="primary" onClick={handleFilter}>
            <Typography variant="button">Show results</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
