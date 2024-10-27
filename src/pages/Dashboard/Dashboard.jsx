import React from "react";
import "./Dashboard.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import Browse from '../../components/Browse/Browse';
import Button from '../../components/Button/Button';

const Dashboard = () => {
return (
    <div>
        <section>
            <SearchBar />
        </section>
        <section>
            <div className="search__wrapper" >
test
            </div>
        </section>
        <section>
            <Browse />
        </section>
        <section>
            <Button />
        </section>
    </div>
);
};

export default Dashboard;