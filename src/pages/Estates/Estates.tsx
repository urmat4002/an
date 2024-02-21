import { ObjectCard, ObjectCardProps } from "@/entities";
import { Section } from "@/features";
import { HeroEstates } from "@/widgets";
import { useEffect, useState } from "react";

import styles from "./Estates.module.scss";
import { useAppSelector } from "@/shared/hooks/hooks";
import { Filter } from "@/features/Filter";

export const Estates = () => {
  const isOpen = useAppSelector((state) => state.citySlice.isOpen);
  const [estates, setEstates] = useState<ObjectCardProps[]>([]);
  useEffect(() => {
    fetch("https://209.38.228.54/api/v1/estate")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.estates);
        setEstates(json.estates);
      });
  }, []);
  return (
    <>
      {isOpen ? (
        <HeroEstates />
      ) : (
        <Section title="All real estates" container>
          <Filter />
        </Section>
      )}
      <Section container>
        <div className={styles.estates}>
          {estates.map((item) => (
            <ObjectCard
              key={item.id}
              id={item.id}
              images={Array.isArray(item.images) ? item.images : [item.images]}
              price_usd={item.price_usd}
              city={item.city}
              project={item.project}
            />
          ))}
        </div>
      </Section>
    </>
  );
};
