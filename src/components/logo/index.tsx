import styles from "./styles.module.css";
export default function Logo() {
  return (
    <svg
      viewBox="0 0 83 100"
      className={`${styles.logo} border-4 border-current fill-current stroke-current`}
    >
      <path
        className={styles.kTop}
        d="M10 5 V33 H29 L50 5 h-9 L25 27 H18 L18 5 Z"
      />
      <path
        className={styles.kBottom}
        d="M10 55 V27 H29 L50 55 h-9 L25 33 H18 L18 55 Z"
      />
      <path
        className={styles.pLetter}
        d="M48 95 L41 95 L41 50 
        L 61 50
        Q 62 50 64 50.5
        Q 66 51 69 53
        Q 72 56 73 59
        Q 73.5 63 73 67
        Q 72 71 69 74.5
        Q 67.5 76 65 77
        Q 61 78 58 78
        L 48 78 Z
        M 48 56
        L 59.5 56
        Q 61.5 56 64 57
        Q 65 57.5 66.5 60
        Q 67 63 66.5 66
        Q 66.5 68 64.5 70
        Q 62.5 72 57.5 72
        L 48 72 Z"
      />
    </svg>
  );
}
