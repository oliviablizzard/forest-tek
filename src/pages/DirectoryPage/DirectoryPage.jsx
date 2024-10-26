import Header from '../../components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';

export default function DirectoryPage() {
    const [organizations, setOrganizations] = useState([]);
    const getOrganizations = async () => {
        try {
            const results = await axios.get("http://localhost:8080/organizations");
            setOrganizations(results.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrganizations()
    }, [])

    return (
        <>
            <Header />
            <div>
                {organizations
                    .filter(organization => organization.status === "approved")
                    .map(organization => (
                        <div key={organization.id}>
                            <h3>{organization.acronym}</h3>
                            <p>{organization.contactTitle}</p>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    );
}