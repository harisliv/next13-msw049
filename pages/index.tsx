import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name: ",name);
  }, [name]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setName(res.name))
      .catch((error) => {
        console.error(error);
      });
  }, [flag]);
  return (
    <div className={styles.container}>
      <button onClick={() => setFlag(true)}>{`Name: ${name}`}</button>
    </div>
  );
}
