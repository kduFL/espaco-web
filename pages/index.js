import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>O pix do Espaço está disponível!</p>
      <h2 className={styles.descricao}>
        Abra o app em que vai fazer a transferência, escanei o <b>QR Code</b> ou
        cole a <b>chave PIX</b>
      </h2>
      <div className={styles.qr}><img src="/qr.png" /></div>
      <div className={styles.contDados}>
        <div className={styles.rowDados}>
          <p className={styles.titleDados}>Agência e Conta</p>
          <p className={styles.valueDados}>2115 | 13771-5</p>
        </div>

        <div className={styles.rowDados}>
          <p className={styles.titleDados}>CNPJ</p>
          <p className={styles.valueDados}>01.104.932/0053-78</p>
        </div>

        <div className={styles.rowDados}>
          <p className={styles.titleDados}>Chave Pix</p>
          <p className={styles.valueDados}>doeespaco@gmail.com</p>
        </div>

        <div className={styles.rowDados}>
          <p className={styles.titleDados}>Nome</p>
          <p className={styles.valueDados}>União Nordeste Brasileira da IASD</p>
        </div>

        <div className={styles.rowDados}>
          <p className={styles.titleDados}>Banco</p>
          <p className={styles.valueDados}>Bradesco S.A.</p>
        </div>
      </div>

      <button onClick={() => {navigator.clipboard.writeText("doeespaco@gmail.com")}} className={styles.copiar}>Copiar chave Pix</button>
    </div>
  );
}
