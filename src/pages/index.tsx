import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Presentation } from "@/components/Presentation";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase/firebaseConfig";
import { GetStaticProps } from "next";
import Form from "@/components/Form";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";

interface DataPresentation {
  company: string;
  description: string[];
  job: string;
  name: string;
  objective: string;
}
interface CardData extends Array<[string, string, string, string, string]> {}

export default function Home({
  formattedDataPresentation,
  formattedDataCards,
  fileUrl,
}: {
  formattedDataPresentation: DataPresentation;
  formattedDataCards: CardData;
  fileUrl: string;
}) {
  return (
    <>
      <Head>
        <title> {formattedDataPresentation.name} - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <Navbar />
      <main>
        <Presentation
          presentation={formattedDataPresentation.objective}
          name={formattedDataPresentation.name}
          company={formattedDataPresentation.company}
          job={formattedDataPresentation.job}
          description={formattedDataPresentation.description}
          dataCards={formattedDataCards}
          resumeFile={fileUrl}
        />
        <Form />
        <div>
          <Map />
        </div>
      </main>
      <Footer />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const storage = getStorage();
  const querySnapshotPresentation = await getDocs(
    collection(db, "presentation")
  );
  const dataPresentation = querySnapshotPresentation.docs.map((doc) =>
    doc.data()
  );
  const querySnapshotCards = await getDocs(collection(db, "cards"));
  const dataCards = querySnapshotCards.docs.map((doc) => doc.data());
  const formattedDataPresentation = dataPresentation[0];
  const formattedDataCards = dataCards[0];

  const fileRef = ref(
    storage,
    "gs://portfolio-othmane.appspot.com/cv_othmane_alternance.pdf"
  );
  const fileUrl = await getDownloadURL(fileRef);

  return { props: { formattedDataPresentation, formattedDataCards, fileUrl } };
};
