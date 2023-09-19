import CertificateCard from "@/components/CertificateCard";
import HistoryBackBtn from "@/components/HistoryBackBtn";
import { CertificateType } from "../../../../types";

const getlist: any = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/certificates",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-store'
            }
        )

        const { data } = await response.json();

        return data.map((item: CertificateType) => <CertificateCard title={item.title} issuedDate={item.issuedDate} organization={item.organization} photo={item.photo} description={item.description} logo={item.logo} />)
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export default async function Certificates() {

    const data = await getlist();

    return (

        <main className="certificatesPage flex flex-col items-center">
            <header className="flex flex-row justify-start items-center mt-[100px] md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start">
                    <HistoryBackBtn />
                    <h2 className="text-5xl font-bold font-rubik mb-2">
                        Certificates
                    </h2>
                    <p className="opacity-80 font-quicksand">
                        Here is the list of certificates that I have.
                    </p>
                </div>
            </header>
            <div className="py-28 flex md:flex-row flex-col items-center md:justify-start gap-10 px-5">
                {data}
            </div>
        </main>
    );
}