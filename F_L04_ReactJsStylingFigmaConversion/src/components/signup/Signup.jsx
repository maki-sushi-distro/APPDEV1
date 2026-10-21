import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup({ onGoToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle account creation
  };

  return (
    <div className={styles.signup}>
      {/* ---------- Left panel ---------- */}
      <section className={styles.left}>
        <h1 className={styles.tagline}>
          Need webdesign
          <br />
          for your business?
          <br />
          <strong>Design Spacee</strong>
          <br />
          will help you.
        </h1>

        <img className={styles.logo} src={logo} alt="Design Spacee logo" />

        <p className={styles.link}>figma.com/@designspacee</p>
      </section>

      {/* ---------- Right panel ---------- */}
      <section className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className={styles.socials}>
            <button type="button" className={styles.social}>
              Sign up with Google
            </button>
            <button type="button" className={styles.social}>
              Sign up with Facebook
            </button>
          </div>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit" className={styles.submit}>
            Create Account
          </button>

          <p className={styles.login}>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onGoToLogin();
              }}
            >
              Login
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}
