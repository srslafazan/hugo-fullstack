import styles from "./TermsOfService.module.css";
import pkg from "../../package.json";

export const TermsOfService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Terms of Service</h1>
      <p className={styles.description}>
        This website and its affiliated websites (
        {pkg.domains.map((domain: string, i) => (
          <span key={domain}>
            {i !== 0 ? " " : null}
            &quot;{domain}&quot;{i < pkg.domains.length - 1 ? "," : null}
          </span>
        ))}
        ) is owned and operated by {pkg.company.name}. By accessing or using the
        Site, you are agreeing to be bound by these Terms of Service and our
        Privacy Policy. If you do not agree with these terms, please do not use
        the Site.
      </p>
      <h2>Use of the Site</h2>
      <p className={styles.description}>
        The Site is intended for users who are at least 13 years old. If you are
        under 13, you are not permitted to use the Site.
      </p>
      <p className={styles.description}>
        You may not use the Site for any illegal or unauthorized purpose. You
        must not, in the use of the Site, violate any laws in your jurisdiction
        (including but not limited to copyright laws).
      </p>
      <p className={styles.description}>
        You are responsible for any activity that occurs under your account. You
        must keep your account password secure. You must notify us immediately
        of any breach of security or unauthorized use of your account.
      </p>
      <h2>Content</h2>
      <p className={styles.description}>
        The Site may contain links to third-party websites or resources. We have
        no control over these sites and resources, and you acknowledge and agree
        that we are not responsible for the availability or accuracy of such
        sites or resources.
      </p>
      <p className={styles.description}>
        We reserve the right to modify or remove any content on the Site at any
        time without notice.
      </p>
      <h2>Intellectual Property</h2>
      <p className={styles.description}>
        The Site and its original content, features, and functionality are owned
        by {pkg.company.name} and are protected by international copyright and
        trademark laws.
      </p>
      <h2>Termination</h2>
      <p className={styles.description}>
        We reserve the right to terminate your access to the Site at any time,
        without notice, for any reason. Changes to These Terms of Service We
        reserve the right to modify these terms at any time. We will post any
        modifications on this page and it is your responsibility to review these
        terms for any changes.
      </p>
      <h2>Contact Us</h2>
      <p className={styles.description}>
        If you have any questions about these terms, please contact us.
      </p>
      <p className={styles.description}>
        Effective {pkg.termsOfService.effectiveDate}
      </p>
    </div>
  );
};
