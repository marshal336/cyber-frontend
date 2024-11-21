"use client";
import { useState } from "react";
import { IAddress } from "../Payment/Step-one";
import { axiosClassic } from "@/services/api/instance";
import { ICountry } from "@/types/country.type";
import { useQuery } from "@tanstack/react-query";

interface ISelectCountryProps {
  className?: string;
  country?: string;
  setValueAddress?(key: keyof Partial<IAddress>, value: string): void;
}

export default function SelectCountry({ ...data }: ISelectCountryProps) {
  const [focus, setFocus] = useState(false);
  const { data: countrys } = useQuery({
    queryKey: ["countrys"],
    queryFn: async () => {
      try {
        const { data } = await axiosClassic.get<ICountry[]>(
          `https://restcountries.com/v3.1/all`
        );
        return data.map((item) => ({ name: item.name.common }));
      } catch (error) {
        throw error;
      }
    },
  });
  if (!countrys) return;
  return (
    <div className="flex max-sxs:flex-col max-sxsitems-center items-start gap-5 relative">
      <select className="p-2 max-w-[200px]">
        {countrys.map(({ name }) => (
          <option
            onClick={() => data.setValueAddress?.("country", name)}
            key={name}
            value={name}
          >
            {name}
          </option>
        ))}
      </select>

      <span className="bg-black text-white rounded-md text-sm py-1 px-2 w-auto">
        HOME
      </span>
    </div>
  );
}
