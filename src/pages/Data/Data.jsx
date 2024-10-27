import React from "react";
import "./Data.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Data = () => {
return (
    <div>
        <section>
            <Header />
            <SearchBar />
            <Button />
        </section>
    </div>
);
};

export default Data;