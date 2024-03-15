import Image from "next/image";
import Head from "next/head";
import {Metadata} from "next";
import styles from "./test.module.scss"

export const metadata: Metadata = {
    title: "HIIO420 PORTFOLIO",
    description: "Hiio420Porfolio"
}
export default function Home() {
    return (
        <>
            <main className={styles.home}>
                HIIO420
            </main>
        </>
    );
}
