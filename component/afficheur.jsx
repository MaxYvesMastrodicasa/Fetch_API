// pages/index.js
import React, { useState, useEffect } from 'react';
import style from "@/styles/monCSS.module.css"

export default function Afficheur() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/kaamelott');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.main_counter}>
      <h1>Kaamelott</h1>
      {data && <p className={style.p}>"{data.citation.citation}"</p>}
      {data && <p><strong>{data.citation.infos.personnage}</strong></p>}
      {data && <p><strong><i>{data.citation.infos.saison} - {data.citation.infos.episode}</i></strong></p>}
      <div className={style.button_set}>
      <button onClick={fetchData}>Encore !</button>
      </div>
    </div>
  );
}