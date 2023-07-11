import styles from "./Header.module.scss";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const Input: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const router = useRouter();

  const updateSearchQueryParams = (title: string): void => {
    const searchParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );

    if (title) {
      searchParams.set("title", title);
    } else {
      searchParams.delete("title");
    }
	
    const newPathName: string = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push("/catalog" + '?' + newPathName);
  };

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTitle(searchValue);
    updateSearchQueryParams(searchValue.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.header__search}>
        <Image
          className={styles.header__searchIcon}
          src="/images/search.svg"
          width={12}
          height={12}
          alt="Search Icon"
          loading="lazy"
        />
        <input
          className={styles.header__input}
          type="text"
          placeholder="Search"
          name="search"
          value={searchValue}
          onChange={searchHandle}
        />
      </div>
    </form>
  );
};
export default Input;
